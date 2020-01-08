precision mediump float;

uniform vec2 resolution;

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  float ratio = resolution.x/resolution.y;
  st.x *= ratio;

  vec3 color = vec3(0);
  float pct = step(.2, length(max(abs(st-.5)-.3, 0.)));
  color += vec3(pct);
  gl_FragColor = vec4(color, 1.);
}
