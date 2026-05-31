import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

//CUERPO DE POLLITO (PUROS MESH)-----------
var geometry1= new THREE.BoxGeometry(4,4,4);
var material=new THREE.MeshLambertMaterial({color:0xFFDD00,side:THREE.DoubleSide});
var mesh1=new THREE.Mesh(geometry1,material);
mesh1.position.set(0,4.5,0);
//scene.add(mesh1);

var geometry2= new THREE.BoxGeometry(2,1,2);
var material2=new THREE.MeshLambertMaterial({color:0x694D29,side:THREE.DoubleSide});
var mesh2=new THREE.Mesh(geometry2,material2);
mesh2.position.set(0,4.5,2);
//scene.add(mesh2);

var geometry3= new THREE.BoxGeometry(1,0.5,2.5);
var material3=new THREE.MeshLambertMaterial({color:0xDD8C08,side:THREE.DoubleSide});
var mesh3=new THREE.Mesh(geometry3,material3);
mesh3.position.set(2.5,4.5,0);
//scene.add(mesh3);

var geometry4= new THREE.BoxGeometry(1,0.5,2.5);
var material4=new THREE.MeshLambertMaterial({color:0xDD8C08,side:THREE.DoubleSide});
var mesh4=new THREE.Mesh(geometry4,material4);
mesh4.position.set(-2.5,4.5,0);
//scene.add(mesh4);

var geometry5= new THREE.BoxGeometry(1,3,0.5);
var material5=new THREE.MeshLambertMaterial({color:0x412C13,side:THREE.DoubleSide});
var mesh5=new THREE.Mesh(geometry5,material5);
mesh5.position.set(-1,-2,0);
//scene.add(mesh5);

var geometry6= new THREE.BoxGeometry(1,0.5,1.5);
var mesh6=new THREE.Mesh(geometry6,material5);
mesh6.position.set(-1,-3.25,1);
//scene.add(mesh6);

var geometry7= new THREE.BoxGeometry(1,3,0.5);
var mesh7=new THREE.Mesh(geometry7,material5);
mesh7.position.set(1,-2,0);
//scene.add(mesh7);

var geometry8= new THREE.BoxGeometry(1,0.5,1.5);
var mesh8=new THREE.Mesh(geometry8,material5);
mesh8.position.set(1,-3.25,1);
//scene.add(mesh8);

var geometry9= new THREE.BoxGeometry(1,1,1.2);
var material6=new THREE.MeshLambertMaterial({color:0x221F25,side:THREE.DoubleSide});
var mesh9=new THREE.Mesh(geometry9,material6);
mesh9.position.set(1,5.5,1.5);
//scene.add(mesh9);

var geometry10= new THREE.BoxGeometry(1,1,1.2);
var mesh10=new THREE.Mesh(geometry10,material6);
mesh10.position.set(-1,5.5,1.5);
//scene.add(mesh10);

const pieIzq=new THREE.Group();
pieIzq.add(mesh5,mesh6);
pieIzq.position.set(0,4,0);
//scene.add(pieIzq);

const pieDer=new THREE.Group();
pieDer.add(mesh7,mesh8);
pieDer.position.set(0,4,0);
//scene.add(pieDer);

//TERMINA CUERPO DE POLLITO ---------

//GRUPO DE POLLITO COMPLETO --------
const gr0=new THREE.Group();
gr0.add(mesh1,mesh2,mesh3,mesh4,pieIzq,pieDer,mesh9,mesh10);
gr0.position.y=-3.5;
const gr1=new THREE.Group();
gr1.add(gr0);
//scene.add(gr1);

    const POLLITO = new THREE.Group();

    POLLITO.add(gr1);

    POLLITO.position.set(x,y,z);

    return POLLITO;
}