<template>
    <div class="app-container">
        <div class="background"></div>
        <div ref="canvasContainer" class="canvas-container"></div>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import BusModel from '@/assets/3dmodels/bus/bus.gltf';

export default {
    name: 'ThreeModelComponent',
    setup() {
        const canvasContainer = ref(null);
        let scene, camera, renderer, model, light;

        onMounted(() => {
            // Initialize Three.js
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            canvasContainer.value.appendChild(renderer.domElement);

            // Create a directional light
            light = new THREE.DirectionalLight(0xffffff, 1); // White light with intensity 1
            light.position.set(1, 1, 5); // Set light position

            scene.add(light); // Add light to the scene

            // Load model using GLTFLoader
            const loader = new GLTFLoader();
            loader.load(BusModel, (gltf) => {
                model = gltf.scene;
                scene.add(model);
                console.log('buss added', gltf)
            });

            // Position the camera
            camera.position.z = 7;

            // Animation
            const animate = () => {
                requestAnimationFrame(animate);
                if (model) {
                    // model.rotation.x += 0.01;
                    model.rotation.y += 0.01;
                }
                renderer.setClearColor(0xffffff, 0);

                renderer.render(scene, camera);
            };
            animate();
        });

        return {
            canvasContainer,
        };
    },
};
</script>
  
<style>
.app-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.canvas-container {
    width: 100%;
    height: 100%;
}
</style>
