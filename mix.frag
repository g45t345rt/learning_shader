precision mediump float;

uniform float time;

vec3 color1 = vec3(0.231, 0.453, 0.923);
vec3 color2 = vec3(0.908, 0.876, 0.239);

void main () {
  vec3 color = mix(color1, color2, abs(cos(time-.5)));
  gl_FragColor = vec4(color, 0.1);
}
