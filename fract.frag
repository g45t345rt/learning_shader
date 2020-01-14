precision mediump float;

uniform vec2 resolution;

void main () {
  vec2 st = gl_FragCoord.xy/resolution;

  st *= 3.;
  st = fract(st);
  vec3 color = vec3(st, 0);
  gl_FragColor = vec4(color, 1.0);
}
