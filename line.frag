precision mediump float;

uniform vec2 resolution;

#define PI 3.14159265359

float plot (vec2 s, float pct) {
  return smoothstep(pct-0.02, pct, s.y) - smoothstep(pct, pct+0.02, s.y);
}

void main () {
  vec2 s = gl_FragCoord.xy/resolution;

  float y = smoothstep(0.2, 0.5, s.x) - smoothstep(0.5, 0.8, s.x);
  vec3 color = vec3(y);

  float pct = plot(s, y);
  color = (1.0-pct)*color+pct*vec3(0.0, 1.0, 0.0);

  gl_FragColor = vec4(color, 1.0);
}
