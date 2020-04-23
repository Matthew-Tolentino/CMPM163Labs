uniform sampler2D texture3;
varying vec2 vUv;

void main() {
  gl_FragColor = texture2D(texture3, vUv);
}
