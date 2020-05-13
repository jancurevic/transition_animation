import { visibleHeightAtZDepth, visibleWidthAtZDepth, lerp } from "./utils";
import { nextSlide, prevSlide } from "./main";

const raycaster = new THREE.Raycaster();
const objLoader = new THREE.OBJLoader();

let arrowBoxObjects = [];
let arrowBoxRotation = [0, 0];

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight
);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

document.body.append(renderer.domElement);

objLoader.load("models/cube.obj", ({ children }) => {
  const screenBorderRight = visibleWidthAtZDepth(-10, camera) / 2;
  const screenBottom = -visibleHeightAtZDepth(-10, camera) / 2;

  addCube(
    children[0],
    nextSlide,
    screenBorderRight - 1.2,
    screenBottom + 1,
    90,
    0,
    0
  );
  addCube(
    children[0],
    prevSlide,
    screenBorderRight - 2.3,
    screenBottom + 1,
    90,
    180,
    0
  );

  animate();
});

const addCube = (object, callbackFn, x, y, rotX, rotY, rotZ) => {
  const cubeMesh = object.clone();

  cubeMesh.scale.setScalar(0.3);
  cubeMesh.rotation.set(
    THREE.Math.degToRad(rotX),
    THREE.Math.degToRad(rotY),
    THREE.Math.degToRad(rotZ)
  );

  const boundingBox = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.7, 0.7),
    new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
  );

  boundingBox.position.x = x;
  boundingBox.position.y = y;
  boundingBox.position.z = -10;

  boundingBox.add(cubeMesh);

  boundingBox.callbackFn = callbackFn;

  arrowBoxObjects.push(boundingBox);
  scene.add(boundingBox);
};

const animate = () => {
  arrowBoxObjects.forEach((e, index) => {
    arrowBoxRotation[index] = lerp(arrowBoxRotation[index], 0, 0.07);
    e.rotation.set(THREE.Math.degToRad(arrowBoxRotation[index]), 0, 0);
  });

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

export const handleThreeAnimation = (i) => {
  i === 0
    ? arrowBoxRotation[0] = 360
    : arrowBoxRotation[1] = -360;
};

window.addEventListener("click", () => {
  const mousePosition = new THREE.Vector2();
  mousePosition.x = (event.clientX / window.innerWidth) * 2 - 1;
  mousePosition.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mousePosition, camera);

  const interesctedObjects = raycaster.intersectObjects(scene.children);
  interesctedObjects.length && interesctedObjects[0].object.callbackFn();
});
