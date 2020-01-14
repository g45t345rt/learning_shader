precision mediump float;

uniform vec2 resolution;
uniform float time;

#define PI 3.14159265358979323846

float box (vec2 st, vec2 size) {
  size = vec2(.5) - size *.5;
  vec2 uv = smoothstep(size, size+0.01, st);
  uv *= smoothstep(size, size+0.01, 1.0-st);
  return uv.x*uv.y;
}

vec2 rotate2d (vec2 st, float angle) {
  st -= .5;
  st *= mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
  st += .5;
  return st;
}

vec2 tile (vec2 st, float z) {
  st *= z;
  return fract(st);
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;

  st = tile(st, 4.);
  st = rotate2d(st, sin(time));

  vec3 color = vec3(box(st, vec2(min(abs(sin(time)), .7))));
  color *= vec3(fract(abs(sin(time))));
  gl_FragColor = vec4(color, 1.);
}
