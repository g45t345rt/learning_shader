precision mediump float;

uniform vec2 resolution;
uniform vec2 mouse;

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st.x *= resolution.x/resolution.y;
  vec3 color = vec3(0);

  const int arr_length = 5;
  vec2 points[arr_length];
  points[0] = vec2(.2, 0);
  points[1] = vec2(.6, .7);
  points[2] = vec2(0, .8);
  points[3] = vec2(.4, .9);
  points[4] = mouse;

  float m_dist = 1.;
  for(int i = 0; i < arr_length; i++) {
    float dist = distance(st, points[i]);
    m_dist = min(m_dist, dist);
  }

  color += m_dist;

  //color -= step(.5, abs(sin(m_dist*50.))*3.);

  gl_FragColor = vec4(color, 1.);
}
