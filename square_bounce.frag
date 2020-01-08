precision mediump float;

uniform vec2 resolution;
uniform float time;

float square (vec2 st, vec2 position, float size) {
  vec2 p = st-position;
  float s = .5-size/2.;
  vec2 lb = step(s, p);
  vec2 tr = step(s, 1.0-p);
  float pct = lb.x*lb.y*tr.x*tr.y;
  return pct;
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  vec2 move = vec2(sin(time)/2., abs(sin(time*10.))/4.);
  vec3 color = vec3(square(st, move, .1));
  gl_FragColor = vec4(color, 1.);
}
