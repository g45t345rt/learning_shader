precision mediump float;

uniform vec2 resolution;
uniform float time;

mat2 rot (float a) {
  return mat2(cos(a), sin(a), -sin(a), cos(a));
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st.x *= resolution.x/resolution.y;

  st = -.5*(st-2.*.1)/st.x;

  st *= rot(time);
  //st *= sin(time)*.9;

  float s = 0.4;
  for(int i = 0; i < 6; i ++) {
    st = abs(st) - s;
    st *= rot(time);
    s = s/2.1;
  }

  float circle = length(st) > 0.005 ? 0. : 1.;
  vec3 color = vec3(circle);
  gl_FragColor = vec4(color, 1);
}
