precision mediump float;

uniform vec2 resolution;
uniform float time;

vec2 tile (vec2 st, float zoom) {
  st *= zoom;
  return fract(st);
}

float circle (vec2 st, float size) {
  return step(size*.5, length(st-.5));
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st.x *= resolution.x/resolution.y;

  vec3 color = vec3(0);

  vec2 grid1 = tile(st, 10.);
  color += mix(vec3(.234, .723, 0.110), vec3(.643, .245, 0.834 ), circle(grid1, .5));

  //vec2 grid2 = tile(st, 2.);
  vec2 grid2 = tile(st + vec2(sin(time), cos(time)), 2.);
  color += mix(color, vec3(.212, .454,.964), circle(grid2, .5));

  gl_FragColor = vec4(color, 1.);
}
