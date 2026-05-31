import * as THREE from "../js/three.module.js";

export default function E01({ x, y, z }) {

//-----------------------ÁRBOL--------------------------

 var box4 = new THREE.BoxGeometry(5,15,5);
    var texture5 = new THREE.TextureLoader().load("./assets/wood.jpg");
    var wood = new THREE.MeshLambertMaterial({map: texture5, side: THREE.DoubleSide});
    var tronco = new THREE.Mesh(box4, wood);    
    tronco.position.set(0,7.5,0);
    //scene.add(tronco);

 var box5 = new THREE.BoxGeometry(12,9,12);
    var texture6 = new THREE.TextureLoader().load("./assets/hojas.jpg");
    var hojas = new THREE.MeshLambertMaterial({map: texture6, side: THREE.DoubleSide});
    var arb = new THREE.Mesh(box5, hojas);    
    arb.position.set(0,14,0);
    //scene.add(arb);

const ARBOLITO = new THREE.Group();
ARBOLITO.add(tronco, arb);

ARBOLITO.position.set(x, y, z);

return ARBOLITO;
}