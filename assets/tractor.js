import * as THREE from "../js/three.module.js";

export default function Tractor({ x, y, z }){

//----------TRACTOR---------------

var loader = new THREE.TextureLoader();

//--CABINA
var box1 = new THREE.BoxGeometry(13,15,12);
var texture1 = loader.load("./assets/red.jpg");
var redmetal = new THREE.MeshLambertMaterial({map: texture1, side: THREE.DoubleSide});
var cabina = new THREE.Mesh(box1, redmetal);    
cabina.position.set(-8,10,0);

//--BASE
var box2 = new THREE.BoxGeometry(14,8,12);
var base = new THREE.Mesh(box2, redmetal);
base.position.set(5.5,6.5,0);

//--TECHO
var box3 = new THREE.BoxGeometry(14,1,12);
var techo = new THREE.Mesh(box3, redmetal);
techo.position.set(-8,18,0);

//--VENTANAS
var plane1 = new THREE.PlaneGeometry(12,8,8);
var texture2 = loader.load("./assets/window.jpg");
var windowM = new THREE.MeshLambertMaterial({map: texture2, side: THREE.DoubleSide, transparent: true});

var ven1 = new THREE.Mesh(plane1, windowM);
ven1.position.set(-8,12,6.1);

var ven2 = new THREE.Mesh(plane1, windowM);
ven2.position.set(-8,12,-6.1);

var plane2 = new THREE.PlaneGeometry(11,8,8);

var ven3 = new THREE.Mesh(plane2, windowM);
ven3.position.set(-1.4,12,0);
ven3.rotation.y = 1.5708;

var ven4 = new THREE.Mesh(plane2, windowM);
ven4.position.set(-14.6,12,0);
ven4.rotation.y = 1.5708;

//--LLANTAS
var cyl1 = new THREE.CylinderGeometry(6, 6, 4, 32);
var texture3 = loader.load("./assets/llanta.jpg");
var caucho = new THREE.MeshLambertMaterial({map: texture3, side: THREE.DoubleSide, transparent: true});

var llanta1 = new THREE.Mesh(cyl1, caucho);
llanta1.position.set(-8,5,7);
llanta1.rotation.x = 1.5708;

var llanta2 = llanta1.clone();
llanta2.position.set(-8,5,-7);

//RINES
var cyl2 = new THREE.CylinderGeometry(5,5, 0.5, 32);
var texture4 = loader.load("./assets/rin.jpg");
var rin = new THREE.MeshLambertMaterial({map: texture4, side: THREE.DoubleSide, transparent: true});

var rin1 = new THREE.Mesh(cyl2, rin);
rin1.position.set(-8,5,9);
rin1.rotation.x = 1.5708;

var rin2 = new THREE.Mesh(cyl2, rin);
rin2.position.set(-8,5,-9);
rin2.rotation.x = 1.5708;

//DELANTERAS
var cyl3 = new THREE.CylinderGeometry(4, 4, 3, 32);

var llanta3 = new THREE.Mesh(cyl3, caucho);
llanta3.position.set(10, 3, 7);
llanta3.rotation.x = 1.5708;

var llanta4 = llanta3.clone();
llanta4.position.set(10, 3, -7);

//RINES
var cyl4 = new THREE.CylinderGeometry(3,3, 0.5, 32);

var rin3 = new THREE.Mesh(cyl4, rin);
rin3.position.set(10,3,8.5);
rin3.rotation.x = 1.5708;

var rin4 = new THREE.Mesh(cyl4, rin);
rin4.position.set(10,3,-8.5);
rin4.rotation.x = 1.5708;

//--ESCAPE
var cyl5 = new THREE.CylinderGeometry(0.8, 0.8,4, 32);
var plateado = new THREE.MeshLambertMaterial({ color: 0x444444,side: THREE.DoubleSide });

var escape = new THREE.Mesh(cyl5, plateado);
escape.position.set(6, 12, 0);

//--LUCES
var sph1= new THREE.SphereGeometry(1, 14, 14);

var luz = new THREE.MeshLambertMaterial({ color: 0xffff66, emissive: 0xffff33,side: THREE.DoubleSide});

var luzizq = new THREE.Mesh(sph1, luz);
luzizq.position.set(12.5, 8, 2.5);

var luzder = new THREE.Mesh(sph1, luz);
luzder.position.set(12.5, 8, -2.5);

//GRUPO LLANTAS
var llantas = new THREE.Group();
llantas.add(llanta1);
llantas.add(llanta2);
llantas.add(llanta3);
llantas.add(llanta4);
llantas.add(rin1);
llantas.add(rin2);
llantas.add(rin3);
llantas.add(rin4);

//GRUPO TRACTOR
var tractor0 = new THREE.Group();
tractor0.add(cabina);
tractor0.add(base);
tractor0.add(techo);
tractor0.add(ven1);
tractor0.add(ven2);
tractor0.add(ven3);
tractor0.add(ven4);
tractor0.add(escape);
tractor0.add(luzizq);
tractor0.add(luzder);
tractor0.add(llantas);

tractor0.rotation.set(0,-1.57,0);

var tractor = new THREE.Group();
tractor.add(tractor0);

tractor.position.set(x,y,z);

return tractor;
}