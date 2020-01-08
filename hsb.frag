precision mediump float;

uniform vec2 resolution;
uniform float time;

#define pi 6.2831

vec3 hsb2rgb( in vec3 c ){
  vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                           6.0)-3.0)-1.0,
                   0.0,
                   1.0 );
  rgb = rgb*rgb*(3.0-2.0*rgb);
  return c.z * mix( vec3(1.0), rgb, c.y);
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  vec2 center = vec2(.5)-st;

  float angle = atan(center.y, center.x);
  float radius = length(center)*2.0;

  vec3 color = hsb2rgb(vec3((angle/pi)+abs(mod(time, 1.)), radius, 1.0));

  gl_FragColor = vec4(color, 1.0);
}
