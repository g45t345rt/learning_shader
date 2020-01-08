precision mediump float;

uniform vec2 resolution;
uniform float time;

void main () {
  vec2 st = gl_FragCoord.xy/resolution;

  // everythin above 0.5 to white and everthing below to 0.0
  //vec3 color = vec3(step(0.5, length(st-0.5)));

  // inverse the colors of background and foreground
  //vec3 color = vec3(1.0-step(0.5, length(st-0.5)));

  // using smoothstep to get smooth borders with color
  //vec3 color = vec3(0.7, 0.2, 1.)+vec3(smoothstep(0.2, 0.23, length(st-0.5)));

  // animate to grow and shrink like heartbeat
  vec3 color = vec3(step(abs(sin(time))/4., length(st-.5)));

  gl_FragColor = vec4(color, 1.0);
}
