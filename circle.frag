precision mediump float;

uniform vec2 resolution;

void main () {
  vec2 st = gl_FragCoord.xy / resolution;

  float pct = 0.0;

  // using distance
  //pct = distance(st, vec2(0.5));

  // using length
  pct = length(0.5-st);

  // using sqrt
  //vec2 center = vec2(0.5)-st;
  //pct = sqrt(pow(center.x, 2.)+pow(center.y, 2.));

  vec3 color = vec3(pct);
  gl_FragColor = vec4(color, 1.);
}
