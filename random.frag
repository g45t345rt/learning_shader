precision mediump float;

uniform vec2 resolution;
uniform float time;
// deterministic random
float rand (float x) {
  return fract(sin(x)*100000.0);
}

float rand2d (vec2 st) {
  return fract(sin(dot(st, vec2(23.345, 64.345))) * 32452.3453);
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  //vec3 color = vec3(rand(st.y*time));
  vec3 color = vec3(rand2d(st*time));
  gl_FragColor = vec4(color, 1.);
}
