import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

const Model = () => {
  const modelRef = useRef();
  const selectedObjectRef = useRef(null);
  const { scene, camera, gl } = useThree();
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "/assets/models/human_body.glb",
      (gltf) => {
        modelRef.current = gltf.scene;
        scene.add(gltf.scene);
      },
      undefined,
      (error) => {
        console.error("An error happened while loading the model", error);
      }
    );

    const handleClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children, true);
      if (intersects.length > 0) {
        const selectedObject = intersects[0].object;

        if (selectedObjectRef.current) {
          // Reset the color of the previously selected object
          selectedObjectRef.current.material.color.set(0xffffff); // Original color
        }

        // Set the color of the newly selected object
        selectedObject.material.color.set(0xff0000);

        // Update the reference to the currently selected object
        selectedObjectRef.current = selectedObject;

        console.log("Clicked object:", selectedObject.name);
      }
    };

    gl.domElement.addEventListener("click", handleClick);

    return () => {
      gl.domElement.removeEventListener("click", handleClick);
      if (modelRef.current) {
        scene.remove(modelRef.current);
      }
    };
  }, [scene, camera, gl]);

  return null;
};

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  useFrame(() => camera.updateMatrixWorld());

  return (
    <OrbitControls
      enableZoom={true}
      args={[camera, domElement]}
      maxPolarAngle={Math.PI / 2} // Adjust this value to lock the x-axis rotation
      minPolarAngle={Math.PI / 2} // Set to the same value as maxPolarAngle
    />
  );
};

const ThreeDViewer = () => {
  return (
    <Canvas camera={{ position: [0, 0, 70] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model />
      <CameraControls />
    </Canvas>
  );
};

export default ThreeDViewer;
