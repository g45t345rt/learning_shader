precision mediump float;

uniform vec2 resolution;
uniform float time;

float rand (vec2 st) {
  return fract(sin(dot(st, vec2(11.34, 34.23))) * 61823.2192);
}

float noise (vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  float a = rand(i);
  float b = rand(i + vec2(1, 0));
  float c = rand(i + vec2(0, 1));
  float d = rand(i + vec2(1, 1));

  vec2 e = f * f * (3. - 2. * f);

  return mix(a, b, e.x) +
            (c - a) * e.y * (1.0 - e.x) +
            (d - b) * e.x * e.y;
}

#define OCTAVES 5

float fbm (vec2 st) {
  float value = 0.0;
  float amplitude = .5;

  vec2 shift = vec2(100.);
  mat2 rot = mat2(cos(.5), sin(.5), -sin(.5), cos(.5));

  for(int i = 0; i < OCTAVES; ++i) {
    value += amplitude * noise(st);
    st = rot * st * 2. + shift;
    amplitude *= 0.5;
  }

  return value;
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution*3.;
  st.x *= resolution.x/resolution.y;
  vec3 color = vec3(0.0);

  vec2 q = vec2(0);
  q.x = fbm(st+0.0*time);
  q.y = fbm(st+vec2(1));

  vec2 r = vec2(0);
  r.x = fbm(st+1.*q+vec2(1.2, 9.)+time);
  r.y = fbm(st+1.*q+vec2(8.3, 2.2)+0.124+time);

  float f = fbm(st+r);

  color = mix(vec3(0.3, .2, .4), vec3(0, 1., 1.), f*f);

  color = mix(color, vec3(0.155, 0, 0.1), clamp(length(q), 0., 1.));

  color = mix(color, vec3(0.1, .0, 0.1), clamp(length(r.x), 0., .2));

  gl_FragColor = vec4(color,1.);
}
