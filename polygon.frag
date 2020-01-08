precision mediump float;

uniform vec2 resolution;

#define PI 3.14156
#define PI_2 6.28319

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st.x *= resolution.x/resolution.y;

  st = st*2. - 1.;
  vec3 color = vec3(0);

  int n = 5;
  float a = atan(st.x, st.y)+PI;
  float b = PI_2/float(n);
  color += smoothstep(0.5, 0.51, cos(floor(.5+a/b)*b-a)*length(st));

  gl_FragColor = vec4(color, 1.);
}
