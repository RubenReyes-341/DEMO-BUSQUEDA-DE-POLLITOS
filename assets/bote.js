import * as THREE from "../js/three.module.js";

export default function Bote({ x, y, z }){

var loader = new THREE.TextureLoader();

var madera = new THREE.MeshLambertMaterial({ map: loader.load("./assets/madc.png"), side: THREE.DoubleSide });

//BASE
var baseBote = new THREE.Mesh(new THREE.BoxGeometry(20,4,8), madera);
baseBote.position.set(0,2,0);

//BORDES
var lado1 = new THREE.Mesh(new THREE.BoxGeometry(20,4,1), madera);
lado1.position.set(0,4,4.5);

var lado2 = lado1.clone();
lado2.position.set(0,4,-4.5);

var frente = new THREE.Mesh(new THREE.BoxGeometry(1,4,8), madera);
frente.position.set(10.5,4,0);

var atras = frente.clone();
atras.position.set(-10.5,4,0);

//ASIENTO
var asiento = new THREE.Mesh(new THREE.BoxGeometry(6,1,6), madera);
asiento.position.set(0,5,0);

//REMOS
var remo1 = new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,10,16), madera);
remo1.position.set(0,6,6);
remo1.rotation.z = 1.2;

var pala1 = new THREE.Mesh(new THREE.BoxGeometry(2,0.5,3), madera);
pala1.position.set(3,4,6);

var remo2 = remo1.clone();
remo2.position.set(0,6,-6);
remo2.rotation.z = -1.2;

var pala2 = pala1.clone();
pala2.position.set(3,4,-6);

//GRUPO
var bote = new THREE.Group();
bote.add(baseBote);
bote.add(lado1);
bote.add(lado2);
bote.add(frente);
bote.add(atras);
bote.add(asiento);
bote.add(remo1);
bote.add(remo2);
bote.add(pala1);
bote.add(pala2);

bote.position.set(x,y,z);

return bote;
}