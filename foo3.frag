precision mediump float;
uniform vec2 resolution;
uniform float time;

void main() {
  vec2 p = gl_FragCoord.xy / resolution;
  p.x *= resolution.x / resolution.y;

  vec2 p2 = p;
  p2 -= .3;
  p -= .5;


  float circle = sqrt(p.x*p.x+p.y*p.y);
  float circle2 = length(p2);
  vec3 col = vec3(1);
  col *= step(0.1, circle);
  col *= step(0.1, circle2);

  gl_FragColor = vec4(col, 1);
}
