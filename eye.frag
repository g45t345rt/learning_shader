precision mediump float;
uniform vec2 resolution;
uniform float time;

float hash( float n ) {
    return fract(sin(n)*43758.5453123);
}

float noise( in vec2 x ) {
    vec2 p = floor(x);
    vec2 f = fract(x);

    f = f*f*(3.0-2.0*f);

    float n = p.x + p.y*57.0;

    return mix(mix( hash(n+  0.0), hash(n+  1.0),f.x), mix( hash(n+ 57.0), hash(n+ 58.0),f.x),f.y);
}

mat2 m = mat2(0.8, 0.6, -0.6, 0.8);

float fbm (vec2 p) {
  float f = 0.0;
  f += 0.5000*noise(p);p*=m*2.02;
  f += 0.2500*noise(p);p*=m*2.03;
  f += 0.1250*noise(p);p*=m*2.01;
  f += 0.0625*noise(p);p*=m*2.04;
  f /= 0.9375;
  return f;
}

void main() {
    vec2 q = gl_FragCoord.xy / resolution.xy;
    vec2 p = -1.0 + 2.*q;
    p.x *= resolution.x/resolution.y;

    float b = smoothstep(-1.5, 0.25, p.x);
    float r = sqrt(dot(p,p));
    float a = atan(p.y, p.x);
    vec3 col = vec3(0);

    float ss = 0.5 + 5.*sin(time*1.);
    float anim = 1.0 + 0.1*ss*clamp(1.0-r,0.0,1.0);
    //r *= anim;

    if (r< 0.8) {
      col = vec3(0.0, 0.3, 0.4);

      float f = fbm(5.0*p);
      col = mix(col, vec3(0.2,0.5,0.4), f);

      f = 1.0 - smoothstep(0.2, 0.5, r);
      col = mix(col, vec3(0.5,0, 0.5), f);

      a += 0.05*fbm(20.0*p);

      f = smoothstep(0.3, 1.0, fbm(vec2(6.0*r, 20.0*a)));
      col = mix(col, vec3(1.0), f);

      f = smoothstep(0.4, 0.9, fbm(vec2(10.0*r, 15.0*a)));
      col *= 1.0 - f;

      f = smoothstep(0.5, 0.8, r);
      col *= 1.0 - 0.5*f;

      f = smoothstep(0.2, 0.3, r);
      col *= f;

      f = 1.0 - smoothstep(0.0, 0.6, length(p - vec2(0.3, 0.3)));
          f *= anim;
      col += vec3(1.0, 0.9, 0.8)*f*0.9;

      f = smoothstep(0.7, 0.8, r);

      col = mix(col, vec3(0), f);
    }

    gl_FragColor = vec4(col*b, 1.0);
}
