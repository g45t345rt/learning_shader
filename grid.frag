
precision mediump float;
uniform vec2 resolution;
uniform float time;

void main () {
  //float dp = 1.0 / resolution.y;
  //vec2 p = gl_FragCoord.xy * dp;
  vec2 p = gl_FragCoord.xy / resolution.y;

  vec2 pi = floor(10.*p);

  vec3 col = vec3(0);
  col += mix(vec3(0.1), vec3(.2), mod(pi.x+pi.y, 2.0));
  gl_FragColor = vec4(col, 1.0);
}
