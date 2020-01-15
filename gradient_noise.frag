precision mediump float;

uniform vec2 resolution;

vec2 rand (vec2 st) {
  st = vec2( dot(st,vec2(127.1,311.7)),
            dot(st,vec2(269.5,183.3)) );
  return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}

mat2 rotate (float a) {
  return mat2(cos(a), -sin(a), sin(a), cos(a));
}

float gradient_noise (vec2 st) {
  vec2 f = fract(st);
  vec2 i = floor(st);

  // Cubic hermite curve
  //vec2 e = f*f*(3.-2.*f);

  // Quintic interpolation curve
  vec2 e = f*f*f*(f*(f*6.-15.)+10.);

  float a = dot(rand(i), f);
  float b = dot(rand(i + vec2(1.,0)), f - vec2(1.,0));
  float c = dot(rand(i + vec2(0,1.)), f - vec2(0,1.));
  float d = dot(rand(i + vec2(1.,1.)), f - vec2(1.,1.));

  float mx = mix(a, b, e.x);
  float mx2 = mix(c, d, e.x);

  return mix(mx, mx2, e.y);
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st.x *= resolution.x/resolution.y;

  float x = gradient_noise(st*10.);

  vec3 color = vec3(x*.5+.5);
  gl_FragColor = vec4(color, 1.);
}
