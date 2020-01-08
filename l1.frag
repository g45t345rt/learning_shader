#ifdef GL_ES
precision highp float;
#endif

uniform float time;
uniform vec2 resolution;
uniform vec2 mouse;

void main () {
  vec2 c = gl_FragCoord.xy/resolution;
  c *= resolution.x/resolution.y;

  vec3 v = vec3(c, abs(sin(time)));

  gl_FragColor = vec4(v, 1.0);
}
