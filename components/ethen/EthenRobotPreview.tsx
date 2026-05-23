"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useProgress, Html } from "@react-three/drei";
import * as THREE from "three";

const ROBOT_PREVIEW_MODEL_PATH = "/models/ethen/humanoid-robot-ai.glb";
const ROBOT_PORTRAIT_HEIGHT = 1.2;
const ROBOT_HEAD_BIAS_FROM_TOP = 0.28;
const ROBOT_CAMERA_FOV = 17;
const ROBOT_CAMERA_POSITION: [number, number, number] = [0, 0.04, 2.0];
const ROBOT_CAMERA_TARGET: [number, number, number] = [0, 0, 0];
const ROBOT_MODEL_Y_ROTATION = 0;
const ROBOT_DEFAULT_DISTANCE = ROBOT_CAMERA_POSITION[2];
const ROBOT_MIN_DISTANCE = 1.82;
const ROBOT_MAX_DISTANCE = 2.08;
const ROBOT_ZOOM_STEP = 0.08;

function RobotModel() {
  const { scene } = useGLTF(ROBOT_PREVIEW_MODEL_PATH);
  const model = scene.clone();
  const hasLoggedDiagnostics = useRef(false);

  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const portraitCenter = new THREE.Vector3(
    center.x,
    box.max.y - size.y * ROBOT_HEAD_BIAS_FROM_TOP,
    center.z,
  );

  const scale = ROBOT_PORTRAIT_HEIGHT / size.y;

  useEffect(() => {
    if (
      process.env.NODE_ENV !== "development" ||
      hasLoggedDiagnostics.current
    ) {
      return;
    }

    const meshNames: string[] = [];
    model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        meshNames.push(child.name || "(unnamed mesh)");
      }
    });

    hasLoggedDiagnostics.current = true;
    console.info("[EthenRobotPreview] portrait diagnostics", {
      boxMin: box.min.toArray(),
      boxMax: box.max.toArray(),
      size: size.toArray(),
      fullCenter: center.toArray(),
      portraitCenter: portraitCenter.toArray(),
      normalizedScale: scale,
      yRotation: ROBOT_MODEL_Y_ROTATION,
      meshNames,
    });
  }, [box, center, model, portraitCenter, scale, size]);

  model.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = child.material.clone();
    }
  });

  return (
    <group scale={scale} rotation={[0, ROBOT_MODEL_Y_ROTATION, 0]}>
      <primitive
        object={model}
        position={[-portraitCenter.x, -portraitCenter.y, -portraitCenter.z]}
      />
    </group>
  );
}

function CameraDistanceSync({
  distance,
  controlsRef,
}: {
  distance: number;
  controlsRef: React.RefObject<any>;
}) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(
      ROBOT_CAMERA_POSITION[0],
      ROBOT_CAMERA_POSITION[1],
      distance,
    );
    camera.lookAt(...ROBOT_CAMERA_TARGET);
    controlsRef.current?.update();
  }, [camera, controlsRef, distance]);

  return null;
}

function RobotScene({ distance }: { distance: number }) {
  const controlsRef = useRef<any>(null);

  useEffect(() => {
    controlsRef.current?.saveState();
  }, []);

  return (
    <>
      <ambientLight intensity={0.18} />
      <hemisphereLight args={["#eef2ff", "#17191f", 0.48]} />
      <directionalLight position={[2.3, 3.1, 4.2]} intensity={1.08} />
      <directionalLight position={[-2.1, 1.9, 3.2]} intensity={0.42} />
      <directionalLight position={[0.9, 2.5, -3]} intensity={0.24} />
      <CameraDistanceSync controlsRef={controlsRef} distance={distance} />
      <RobotModel />
      <OrbitControls
        ref={controlsRef}
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={ROBOT_MIN_DISTANCE}
        maxDistance={ROBOT_MAX_DISTANCE}
        minAzimuthAngle={-Math.PI / 8}
        maxAzimuthAngle={Math.PI / 8}
        minPolarAngle={Math.PI / 2 - 0.18}
        maxPolarAngle={Math.PI / 2 + 0.12}
        zoomSpeed={0.7}
        rotateSpeed={0.55}
        target={ROBOT_CAMERA_TARGET}
      />
    </>
  );
}

function LoadingFallback() {
  const { progress } = useProgress();
  return (
    <div className="ethen-robot-preview__loading">
      <div className="ethen-robot-preview__spinner" />
      <span className="ethen-robot-preview__progress">
        {Math.round(progress)}%
      </span>
    </div>
  );
}

export function EthenRobotPreview() {
  const [cameraDistance, setCameraDistance] = useState(ROBOT_DEFAULT_DISTANCE);

  return (
    <div className="ethen-robot-preview">
      <div
        className="ethen-robot-preview__viewport"
        onDoubleClick={() => setCameraDistance(ROBOT_DEFAULT_DISTANCE)}
        onWheelCapture={(event) => {
          event.preventDefault();
          const direction = event.deltaY > 0 ? 1 : -1;
          setCameraDistance((current) =>
            THREE.MathUtils.clamp(
              current + direction * ROBOT_ZOOM_STEP,
              ROBOT_MIN_DISTANCE,
              ROBOT_MAX_DISTANCE,
            ),
          );
        }}
      >
        <Canvas
          camera={{
            fov: ROBOT_CAMERA_FOV,
            position: ROBOT_CAMERA_POSITION,
            near: 0.1,
            far: 10,
          }}
        >
          <Suspense
            fallback={
              <Html center>
                <LoadingFallback />
              </Html>
            }
          >
            <RobotScene distance={cameraDistance} />
          </Suspense>
        </Canvas>
      </div>
      <p className="ethen-robot-preview__hint">Drag to rotate</p>
    </div>
  );
}
