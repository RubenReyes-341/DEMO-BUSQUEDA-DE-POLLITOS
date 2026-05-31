import * as THREE from "../js/three.module.js";

export default function gallina({ x, y, z }){

var loader = new THREE.TextureLoader();

//cuerpo
var geometry1= new THREE.BoxGeometry(4,4,5.5);
var material1=new THREE.MeshLambertMaterial({color:0xFFFFFF,side:THREE.DoubleSide});
var mesh1=new THREE.Mesh(geometry1,material1);
mesh1.position.set(0,4.5,0);
 
//patas
var geometry2= new THREE.BoxGeometry(1,4,1);
var material3=new THREE.MeshLambertMaterial({color:0xED891F,side:THREE.DoubleSide});
var mesh2=new THREE.Mesh(geometry2,material3);
mesh2.position.set(1,3,0);
 
var geometry3= new THREE.BoxGeometry(1,4,1);
var mesh3=new THREE.Mesh(geometry3,material3);
mesh3.position.set(-1,3,0);

var geometry7= new THREE.BoxGeometry(1.7,.7,2);
var mesh7=new THREE.Mesh(geometry7,material3);
mesh7.position.set(1,1,0.5);

var geometry7= new THREE.BoxGeometry(1.7,.7,2);
var mesh8=new THREE.Mesh(geometry7,material3);
mesh8.position.set(-1,1,0.5)

///manos
 
var geometry4= new THREE.BoxGeometry(1,3,4);
var mesh4=new THREE.Mesh(geometry4,material1);
mesh4.position.set(-2.5,4.9,0);
 
var geometry5= new THREE.BoxGeometry(1,3,4);
var mesh5=new THREE.Mesh(geometry5,material1);
mesh5.position.set(2.5,4.9,0);

//cabeza
var geometry6= new THREE.BoxGeometry(2.5,3.8,2);
var mesh6=new THREE.Mesh(geometry6,material1);
mesh6.position.set(0,7,2.5);
//pico 
var geometry8= new THREE.BoxGeometry(2.5,1,1);
var mesh9=new THREE.Mesh(geometry8,material3);
mesh9.position.set(0,7.3,4);

var geometry9= new THREE.BoxGeometry(1.5,1,0.7);
var material2=new THREE.MeshLambertMaterial({color:0xCC0C0C,side:THREE.DoubleSide});
var mesh10=new THREE.Mesh(geometry9,material2);
mesh10.position.set(0,6.5,3.7);

//ojos
var geometry10= new THREE.BoxGeometry(.5,.5,0.5);
var material4=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
var mesh11=new THREE.Mesh(geometry10,material4);
mesh11.position.set(0.8,8.2,3.5);



var mesh12=new THREE.Mesh(geometry10,material4);
mesh12.position.set(-0.8,8.2,3.5);

//cresta
var geometry11= new THREE.BoxGeometry(.5,.5,1);
var material4=new THREE.MeshLambertMaterial({color:0x000000,side:THREE.DoubleSide});
var mesh13=new THREE.Mesh(geometry11,material2);
mesh13.position.set(0.2,9,2);

var mesh14=new THREE.Mesh(geometry11,material2);
mesh14.position.set(-0.3,9,2);

var mesh15=new THREE.Mesh(geometry11,material2);
mesh15.position.set(0,9.5,2);

const gr2=new THREE.Group();
gr2.add(mesh3,mesh2,mesh7,mesh8);

const gr0=new THREE.Group();
gr0.add(mesh1,mesh4,mesh5,mesh6,mesh9,mesh10,mesh11,mesh12,mesh13,mesh14,mesh15,gr2);
gr0.position.y=-5;
const gr1=new THREE.Group();
gr1.add(gr0);


gr0.position.set(x,y,z);

return gr0;
}