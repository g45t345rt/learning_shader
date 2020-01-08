precision mediump float;

uniform vec2 resolution;

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st.x *= resolution.x/resolution.y; // resizable window

  vec3 color = vec3(0.0);
  // Scene between -1. to 1.
  st = st*2.-1.;

  float d = length(abs(st)-.5);

  color += vec3(fract(d*10.));
  gl_FragColor = vec4(color, 1.);
}
