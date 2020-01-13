precision mediump float;

uniform vec2 resolution;
uniform float time;

float box (vec2 st, vec2 size) {
  size = vec2(0.5) - size*.5;
  vec2 uv = step(size, st);
  uv *= step(size, 1.0-st);
  return uv.x*uv.y;
}

float cross (vec2 st, float size) {
  return box(st, vec2(size, size/4.))+box(st, vec2(size/4., size));

}

mat2 rotate2d(float angle) {
  return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

mat2 scale2d (vec2 size) {
  return mat2(size.x, 0, 0, size.y);
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st.x *= resolution.x/resolution.y;
  st -= .5;
  st *= rotate2d(sin(time)*1.);
  st *= scale2d(vec2(sin(time)+1.));
  st += .5;

  vec3 color = vec3(cross(st, .1));
  gl_FragColor = vec4(color, 1.);
}
