precision mediump float;

uniform vec2 resolution;
uniform float time;

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  float ratio = resolution.x/resolution.y;
  st.x *= ratio;

  vec3 color = vec3(0);
  vec2 center = vec2(ratio/2., .5);
  vec2 pos = st;//-center;
  pos -= vec2(abs(sin(time)+.5), .5);
  float pct = length(pos)*2.;
  float a = atan(pos.y, pos.x);
  //float f = abs(cos(a*2.));
  //float f = abs(cos(a*2.))*.5+.2;
  //float f = abs(cos(a*12.)*sin(a*3.))*.8+.1;
  float f = smoothstep(-.3, 1., cos((time*10.)+a*10.))*.1+.5;

  pct = 1.-smoothstep(f, f+0.01, pct);
  color += vec3(pct);
  gl_FragColor = vec4(color, 1.);
}
