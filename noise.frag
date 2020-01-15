precision mediump float;

uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;

float rand (vec2 st) {
  return fract(sin(dot(st, vec2(43623.6, 93283.123))) * 100000.0);
}

float noise (vec2 st) {
  vec2 f = fract(st);
  vec2 i = floor(st);

  float a = rand(i);
  float b = rand(i + vec2(1., 0));
  float c = rand(i + vec2(0., 1.));
  float d = rand(i + vec2(1., 1.));

  // cubic hermine curve -- can be replace by smoothstep
  vec2 e = f*f*(3.-2.*f);
  //e = smoothstep(0., 1., f);

  return mix(a, b, e.x) + (c-a) * e.y * (1.-e.x) + (d-b) * e.x * e.y;
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st.x *= resolution.x/resolution.y;

  // Scale with mouse
  //vec3 color = vec3(noise(st * mouse * 100.));

  st *= rand(vec2(23)) * 1000.;
  float n = noise(st);
  vec3 color = vec3(smoothstep(.5, .52, n));

  gl_FragColor = vec4(color, 1.);
}
