window.addEventListener("load",()=>{

    gsap.to(".loader",{
        opacity:0,
        duration:1.5,
        delay:1
    });

    setTimeout(()=>{
        document.querySelector(".loader").style.display="none";
    },2500);

});

gsap.from(".hero-content h1",{
    y:80,
    opacity:0,
    duration:1.5
});

gsap.from(".hero-content p",{
    y:50,
    opacity:0,
    duration:1.5,
    delay:0.3
});

gsap.from(".hero-btn",{
    scale:0,
    opacity:0,
    duration:1,
    delay:0.6
});

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer({
    canvas:document.querySelector('#bg'),
    alpha:true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth,window.innerHeight);

camera.position.setZ(30);

const geometry = new THREE.TorusGeometry(10,3,16,100);

const material = new THREE.MeshStandardMaterial({
    color:0xd4af37
});

const torus = new THREE.Mesh(geometry,material);

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff);

pointLight.position.set(20,20,20);

scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0xffffff);

scene.add(ambientLight);

function animate(){

    requestAnimationFrame(animate);

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    renderer.render(scene,camera);

}

animate();

window.addEventListener('resize',()=>{

    camera.aspect = window.innerWidth/window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth,window.innerHeight);

});

document.querySelector(".booking-form")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Room Reserved Successfully!");

});