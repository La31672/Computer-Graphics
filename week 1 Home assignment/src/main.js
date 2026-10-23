import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('scene').appendChild(renderer.domElement);


const cube = new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new THREE.MeshStandardMaterial({ color: 0x00ff00 })
);
scene.add(cube);


const pyramid = new THREE.Mesh(
    new THREE.ConeGeometry(1.5, 1.5, 4),
    new THREE.MeshStandardMaterial({ color: 0xffff00 })
);
pyramid.rotation.y = Math.PI / 4;
pyramid.position.y = 1.75;
scene.add(pyramid);

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 0.6));
const pointLight = new THREE.PointLight(0xffffff, 3, 100);
pointLight.position.set(3, 3, 4);
scene.add(pointLight);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();