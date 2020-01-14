precision mediump float;

uniform vec2 resolution;
uniform float time;

float box (vec2 st, vec2 size) {
  size = vec2(.5) - size*0.5;
  vec2 uv = step(size, st);
  uv *= step(size, 1.0-st);
  return uv.x*uv.y;
}

vec2 brickTile (vec2 st, float z) {
  st *= z;
  //st.x += step(1., mod(st.y, 2.)) * sin(time);
  float _time = time*.3;
  if (fract(_time) > 0.5) {
    if (fract(st.y*.5) > .5) {
          st.x -= fract(_time)*2.;
    } else {
          st.x += fract(_time)*2.;
    }
  } else {
    if (fract(st.x*.5) > .5) {
          st.y += fract(_time)*2.;
    } else {
          st.y -= fract(_time)*2.;
    }
  }

  return fract(st);
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st.x *= resolution.x/resolution.y;

  st = brickTile(st, 10.);
  vec3 color = vec3(box(st, vec2(.9)));
  gl_FragColor = vec4(color, 1.);
}
