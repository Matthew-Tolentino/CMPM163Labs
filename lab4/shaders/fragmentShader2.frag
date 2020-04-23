uniform sampler2D texture3;
varying vec2 vUv;

void main() {
  vec2 temp;

  //from 0 -> .5
  if (vUv.x < 0.5){
    temp.x = vUv.x + vUv.x;
  } else {
    temp.x = (vUv.x - 0.5) + (vUv.x - 0.5);
  }
  if (vUv.y < 0.5){
    temp.y = vUv.y + vUv.y;
  } else {
    temp.y = (vUv.y - 0.5) + (vUv.y - 0.5);
  }

  gl_FragColor = texture2D(texture3, temp);
}
