precision mediump float;

uniform vec2 resolution;

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

  float s1 = square(st, vec2(0), .1);
  float s2 = square(st, vec2(.2), .1);
  vec3 c = vec3(min(s1, s2));
  gl_FragColor = vec4(c, 1.0);
}
