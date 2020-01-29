// from https://www.shadertoy.com/view/ldX3Rr

precision mediump float;

uniform vec2 resolution;

void main () {
  vec2 st = (2.*gl_FragCoord.xy-resolution)/min(resolution.y, resolution.x);

  float h = dot(st, st); // circle
  float d = abs(st.y) - h; // double circle
  float a = d-0.20; // 2 dots
  float b = h - 1.;

  float c = sign(a*b*(st.y + st.x + (st.y - st.x)*sign(d)));

  vec3 color = vec3(c);
  gl_FragColor = vec4(color, 1.);
}
