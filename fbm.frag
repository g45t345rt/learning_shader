// Fractal Brownian Motion
precision mediump float;

uniform vec2 resolution;

float rand (vec2 st) {
  return fract(sin(dot(st, vec2(12.2345, 78.456))) * 43758.34);
}

float noise (vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  float a = rand(i);
  float b = rand(i + vec2(1.0, 0.0));
  float c = rand(i + vec2(0.0, 1.0));
  float d = rand(i + vec2(1.0, 1.0));

  vec2 e = f * f * (3. - 2. * f);

  return mix(a, b, e.x) +
          (c - a) * e.y * (1. - e.x) +
          (d - b) * e.x * e.y;
}

#define OCTAVES 6
float fbm (vec2 st) {
  float value = 0.;
  float amplitude = .5;
  float frequency = 0.;

  // octaves
  for (int i = 0; i < OCTAVES; i++) {
    value += amplitude * noise(st);
    st*= 2.; // lacunarity
    amplitude *= .5; // gain
  }

  return value;
}

void main () {
  vec2 st = gl_FragCoord.xy/resolution;
  st.x *= resolution.x/resolution.y;

  vec3 color = vec3(0);
  color += fbm(st*3.);

  gl_FragColor = vec4(color, 1.);
}
