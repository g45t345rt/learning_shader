precision mediump float;

uniform vec2 resolution;

void main () {
  vec2 st = gl_FragCoord.xy/resolution;

  vec2 bl = step(0.4, st);
  vec2 tr = step(0.4, (1.0-st));
  float pct = bl.x*bl.y*tr.x*tr.y;

  vec3 color = vec3(pct);
  gl_FragColor = vec4(color, 1.0);
}
