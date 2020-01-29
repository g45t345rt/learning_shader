precision mediump float;

uniform vec2 resolution;
uniform float time;

void main () {
  vec2 st = (2.*gl_FragCoord.xy-resolution)/min(resolution.y, resolution.x);

  // animate
  st *= abs(sin(time*1.5))+1.1;

  // heart shape
  st.y = -st.y*1.2+abs(st.x)*(1.-abs(st.x));
  float r = length(st);

  // color
  vec3 color = vec3(smoothstep(.3, .32, r));
  color += vec3(1., .5*r, 0.4);

  gl_FragColor = vec4(color, 1.);
}
