precision mediump float;

uniform vec2 resolution;
uniform vec2 mouse; // return mouse position between 0 to 1

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  float ratio = resolution.x/resolution.y;
  st.x *= ratio;

  vec3 color = vec3(0.,0.,1.);

  vec2 pos = abs(st-vec2(mouse.x*ratio, mouse.y));
  float pct = max(pos.x, pos.y);

  color += vec3(step(.1, pct));

  // outline square
  //color += 1.-vec3(step(.1, pct) * step(pct, 0.11));

  gl_FragColor = vec4(color, 1.);
}
