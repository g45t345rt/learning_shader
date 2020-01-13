precision mediump float;

uniform vec2 resolution;
uniform float time;

// YUV to RGB matrix
mat3 yuv2rgb = mat3(1.0, 0.0, 1.13983,
                    1.0, -0.39465, -0.58060,
                    1.0, 2.03211, 0.0);

// RGB to YUV matrix
mat3 rgb2yuv = mat3(0.2126, 0.7152, 0.0722,
                    -0.09991, -0.33609, 0.43600,
                    0.615, -0.5586, -0.05639);

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st -= .5;
  st *= 2.;

  vec3 color = vec3(.5, st.x, st.y) * yuv2rgb;
  gl_FragColor = vec4(color, .1);
}
