// let scene;
// let camera;
// let render;
//
// function init() {
//     let container = document.querySelector('.container');
//
//     //Scene
//     scene = new THREE.Scene()
//     // scene.background = new THREE.color(0xffffff);
//
//     //Camera
//     camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 3000)
//
//     //Render
//     render = new THREE.WebGL1Renderer({
//         antialias: true
//     })
//     render.setSize(window.innerWidth, window.innerHeight)
//     container.appendChild(render.domElement)
//
//      //Modal
//     const loader = new THREE.GLTFLoader();
//     loader.load('./modal/scene.gltf', gltf => {
//         scene.add(gltf.scene)
//     },
//         function (error) {
//             console.log('Error:' + error)
//         }
//     )
//
//     //Функція для плавної картинки
//     function animate() {
//         requestAnimationFrame(animate)
//         render.render(scene, camera)
//     }
//     animate()
// }
//
// init()

