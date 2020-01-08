precision mediump float;

uniform vec2 resolution;

void main () {
  vec2 st = gl_FragCoord.xy/resolution;

  vec2 center = st-.5;
  vec2 r = abs(center);
  float s = max(r.x, r.y);
  vec3 color = vec3(step(.1, s) * step(s, .15));
  gl_FragColor = vec4(color, 1.0);
}
