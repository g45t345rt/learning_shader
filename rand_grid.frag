precision mediump float;

uniform vec2 resolution;

float rand (vec2 st) {
  return fract(sin(dot(st, vec2(342.34, 714.34))) * 4532.4278);
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  vec3 color = vec3(0);

  st *= 10.;

  vec2 pos = floor(st);
  color += vec3(rand(pos));

  gl_FragColor = vec4(color, 1.);
}
