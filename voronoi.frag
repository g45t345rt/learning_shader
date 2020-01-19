precision mediump float;

uniform vec2 resolution;
uniform vec2 mouse;

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st.x *= resolution.x/resolution.y;

  const int arr_length = 5;
  vec2 points[arr_length];
  points[0] = vec2(.2, .5);
  points[1] = vec2(.4, .1);
  points[2] = vec2(.1, .8);
  points[3] = vec2(.7, .3);
  points[4] = mouse;

  float m_dist = 1.;
  vec2 m_point;
  for(int i = 0; i < arr_length; i++) {
    float dist = distance(st, points[i]);

    if (dist < m_dist) {
      m_dist = dist;
      m_point = points[i];
    }
  }

  vec3 color = vec3(0);
  color += m_dist*2.;

  color.rg = m_point;

  color -= abs(sin(m_dist*80.))*0.07;

  color += 1.-step(.01, m_dist);

  gl_FragColor = vec4(color, 1.);
}
