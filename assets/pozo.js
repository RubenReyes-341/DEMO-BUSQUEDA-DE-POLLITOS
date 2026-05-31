import * as THREE from "../js/three.module.js";

export default function Pozo({ x, y, z }){

var loader = new THREE.TextureLoader();

//--BASE
var basePozo = new THREE.Mesh(
new THREE.CylinderGeometry(6, 6, 8, 32),
new THREE.MeshLambertMaterial({ map: loader.load("./assets/stone.jpg"), side: THREE.DoubleSide })
);
basePozo.position.set(0,4,0);

//--AGUA
var agua = new THREE.Mesh(
new THREE.CylinderGeometry(5, 5, 2, 32),
new THREE.MeshLambertMaterial({ color: 0x3399ff })
);
agua.position.set(0,7.2,0);

//--TECHO
var techoPozo = new THREE.Mesh(
new THREE.ConeGeometry(10,4,4),
new THREE.MeshLambertMaterial({ map: loader.load("./assets/teja.jpg"), side: THREE.DoubleSide })
);
techoPozo.position.set(0,17.4,0);
techoPozo.rotation.y = 0.785;

//--AGARRADERAS
var wood = new THREE.MeshLambertMaterial({ map: loader.load("./assets/wood.jpg") });

var ag1 = new THREE.Mesh(new THREE.BoxGeometry(0.5,8,0.5), wood);
ag1.position.set(5.5,12,0);

var ag2 = ag1.clone();
ag2.position.set(-5.5,12,0);

//GRUPO
var pozo = new THREE.Group();
pozo.add(basePozo);
pozo.add(agua);
pozo.add(techoPozo);
pozo.add(ag1);
pozo.add(ag2);

pozo.position.set(x,y,z);

return pozo;
}