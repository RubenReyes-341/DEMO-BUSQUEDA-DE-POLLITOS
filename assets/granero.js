import * as THREE from "../js/three.module.js";

export default function Granero({ x, y, z }){

var loader = new THREE.TextureLoader();

//--BASE
var box6 = new THREE.BoxGeometry(25,15,20);
var redmetal = new THREE.MeshLambertMaterial({ map: loader.load("./assets/red.jpg"), side: THREE.DoubleSide });

var baseg = new THREE.Mesh(box6, redmetal);
baseg.position.set(0,8,0);

//--SEGUNDO PISO
var box6_2 = new THREE.BoxGeometry(20,8,16);
var gr2 = new THREE.Mesh(box6_2, redmetal);
gr2.position.set(0,18,0);

//--TECHO
var cone1 = new THREE.ConeGeometry(18,10,4);
var teja = new THREE.MeshLambertMaterial({ map: loader.load("./assets/teja.jpg"), side: THREE.DoubleSide });

var techog = new THREE.Mesh(cone1, teja);
techog.position.set(0,27,0);
techog.rotation.y = 0.785;

//--PUERTA
var plane3 = new THREE.PlaneGeometry(15,12);
var puerta = new THREE.Mesh(plane3, new THREE.MeshLambertMaterial({
map: loader.load("./assets/door.jpg"),
side: THREE.DoubleSide
}));
puerta.position.set(0,6,10.1);

//--VENTANAS
var windowM = new THREE.MeshLambertMaterial({ map: loader.load("./assets/window.jpg"), transparent:true });

var v1 = new THREE.Mesh(new THREE.PlaneGeometry(6,6), windowM);
v1.position.set(0,18.5,8.1);

var v2 = new THREE.Mesh(new THREE.PlaneGeometry(15,6), windowM);
v2.position.set(-12.6,10,0);
v2.rotation.y = 1.57;

var v3 = v2.clone();
v3.position.set(12.6,10,0);

//GRUPO
var granero = new THREE.Group();
granero.add(baseg);
granero.add(gr2);
granero.add(techog);
granero.add(puerta);
granero.add(v1);
granero.add(v2);
granero.add(v3);

granero.position.set(x,y,z);

return granero;
}