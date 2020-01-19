precision mediump float;

uniform vec2 resolution;
uniform float time;

#define PI_2 6.2831

vec2 rand (vec2 st) {
  return fract(sin(vec2(dot(st, vec2(645., 234.)),dot(st, vec2(64.,343.))))*8854.);
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st.x *= resolution.x/resolution.y;
  vec3 color = vec3(0);

  st *= 10.;

  vec2 f_st = fract(st);
  vec2 i_st = floor(st);
  float m_dist = 1.;

  for(int y = -1; y <= 1; y++) {
    for(int x = -1; x <= 1; x++) {
      vec2 neighbor = vec2(float(x), float(y));

      vec2 point = rand(i_st + neighbor);

      point = .5+.5*sin(time + PI_2 * point); //animate

      vec2 diff = neighbor + point - f_st;
      float dist = length(diff);

      m_dist = min(m_dist, dist);
    }
  }

  // draw distance
  color += m_dist;

  // draw center
  color += 1.-step(.01, m_dist);

  // draw grid
  color.r += step(.98, f_st.x) + step(.98, f_st.y);


  gl_FragColor = vec4(color, 1.);
}
