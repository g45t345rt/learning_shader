precision mediump float;

uniform vec2 resolution;

void main () {
  vec2 st = gl_FragCoord.xy/resolution;

  float ratio = resolution.x/resolution.y;
  st.x *= ratio; // apply aspect ratio for variable window size

  vec2 center = st-vec2(ratio/2., .5); //
  vec2 r = abs(center);
  float s = max(r.x, r.y);
  vec3 color = vec3(step(.1, s) * step(s, .15));
  gl_FragColor = vec4(color, 1.0);
}
