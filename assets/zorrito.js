import * as THREE from "../js/three.module.js";
export default function E01({x,y,z}){

// AQUI PONER OBJETOS
var geometry1= new THREE.BoxGeometry(4,3,3);
var material=new THREE.MeshLambertMaterial({color:0xf69945,side:THREE.DoubleSide});
var mesh1=new THREE.Mesh(geometry1,material);
mesh1.position.set(0,4.5,0.5);
//scene.add(mesh1);

var geometryC= new THREE.BoxGeometry(3,4,6);
var material=new THREE.MeshLambertMaterial({color:0xe27c21,side:THREE.DoubleSide});
var meshC=new THREE.Mesh(geometryC,material);
meshC.position.set(0,4.5,-4);
//scene.add(meshC);

var geometry2= new THREE.BoxGeometry(1,2.2,1);
var material2=new THREE.MeshLambertMaterial({color:0x412C13,side:THREE.DoubleSide});
var mesh2=new THREE.Mesh(geometry2,material2);
mesh2.position.set(-1,-2.4,0);
//scene.add(mesh2);

var geometry22= new THREE.BoxGeometry(1,0.4,1);
var material22=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
var mesh22=new THREE.Mesh(geometry22,material22);
mesh22.position.set(-1,-3.7,0);
//scene.add(mesh2);

    const pataDI=new THREE.Group();
    pataDI.add(mesh2,mesh22);
    //scene.add(pataDI);
    pataDI.position.set(0,3.8,-1.5);


var geometry3= new THREE.BoxGeometry(1,2.2,1);
var mesh3=new THREE.Mesh(geometry3,material2);
mesh3.position.set(1,-2.40);
//scene.add(mesh3);

var geometry321= new THREE.BoxGeometry(1,0.4,1);
var mesh321=new THREE.Mesh(geometry321,material22);
mesh321.position.set(1,-3.7,0);
//scene.add(mesh31);

    const pataDD=new THREE.Group();
    pataDD.add(mesh3,mesh321);
    //scene.add(pataDD);
    pataDD.position.set(0,3.8,-1.5);

var geometry21= new THREE.BoxGeometry(1,2.2,1);
var mesh21=new THREE.Mesh(geometry21,material2);
mesh21.position.set(-1,-2.4,0);
//scene.add(mesh21);

var geometry32= new THREE.BoxGeometry(1,0.4,1);
var mesh32=new THREE.Mesh(geometry32,material22);
mesh32.position.set(-1,-3.7,0);
//scene.add(mesh3);

    const pataTI=new THREE.Group();
    pataTI.add(mesh21,mesh32);
    //scene.add(pataTI);
    pataTI.position.set(0,3.8,-6);

var geometry31= new THREE.BoxGeometry(1,2.2,1);
var mesh31=new THREE.Mesh(geometry31,material2);
mesh31.position.set(1,-2.4,0);
//scene.add(mesh31);

var geometry221= new THREE.BoxGeometry(1,0.4,1);
var mesh221=new THREE.Mesh(geometry221,material22);
mesh221.position.set(1,-3.7,0);
//scene.add(mesh21);

    const pataTD=new THREE.Group();
    pataTD.add(mesh31,mesh221);
    //scene.add(pataTD);
    pataTD.position.set(0,3.8,-6);

var geometry4= new THREE.BoxGeometry(1,0.5,1.2);
var material4=new THREE.MeshLambertMaterial({color:0x221F25,side:THREE.DoubleSide});
var mesh4=new THREE.Mesh(geometry4,material4);
mesh4.position.set(1.4,4.5,1.5);
//scene.add(mesh4);

var geometry5= new THREE.BoxGeometry(1,0.5,1.2);
var mesh5=new THREE.Mesh(geometry5,material4);
mesh5.position.set(-1.4,4.5,1.5);
//scene.add(mesh5);

var geometry45= new THREE.BoxGeometry(1,1,0.5);
var material45=new THREE.MeshLambertMaterial({color:0x221F25,side:THREE.DoubleSide});
var mesh45=new THREE.Mesh(geometry45,material45);
mesh45.position.set(1.5,6.5,1.5);
//scene.add(mesh4);

var geometry55= new THREE.BoxGeometry(1,1,0.5);
var mesh55=new THREE.Mesh(geometry55,material45);
mesh55.position.set(-1.5,6.5,1.5);
//scene.add(mesh5);

var geometry6= new THREE.BoxGeometry(2,3,5);
var material6=new THREE.MeshLambertMaterial({color:0xe27c21,side:THREE.DoubleSide});
var mesh6=new THREE.Mesh(geometry6,material6);
mesh6.position.set(0,4.5,-9);
//scene.add(mesh6);

var geometry7= new THREE.BoxGeometry(2,1.2,1);
var material7=new THREE.MeshLambertMaterial({color:0xe27c21,side:THREE.DoubleSide});
var mesh7=new THREE.Mesh(geometry7,material7);
mesh7.position.set(0,3.6,2.5);
//scene.add(mesh7);

const gr1=new THREE.Group();
gr1.add(mesh1,mesh4,mesh5,mesh6,meshC,mesh45,mesh55,mesh7,pataDD,pataDI,pataTD,pataTI);
//scene.add(gr1);

    const ZORRITO = new THREE.Group();

    ZORRITO.add(gr1);

    ZORRITO.position.set(x,y,z);

    return ZORRITO;
}