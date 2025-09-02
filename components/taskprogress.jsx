"use client";

import { useRef, useMemo, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import dynamic from "next/dynamic";

function TaskProgress3DFallback() {
  return (
    <div className="w-full h-64 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Loading 3D visualization...
        </p>
      </div>
    </div>
  );
}

const CanvasDynamic = dynamic(
  () =>
    import("@react-three/fiber").then((mod) => ({
      default: mod.Canvas,
    })),
  {
    ssr: false,
    loading: () => <TaskProgress3DFallback />,
  }
);

const OrbitControlsDynamic = dynamic(
  () =>
    import("@react-three/drei").then((mod) => ({
      default: mod.OrbitControls,
    })),
  { ssr: false }
);

const TextDynamic = dynamic(
  () =>
    import("@react-three/drei").then((mod) => ({
      default: mod.Text,
    })),
  { ssr: false }
);

function ProgressBar3D({ completedTasks, totalTasks }) {
  console.log("[v0] ProgressBar3D rendering with:", {
    completedTasks,
    totalTasks,
  });

  const groupRef = useRef(null);
  const completionRatio = totalTasks > 0 ? completedTasks / totalTasks : 0;

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const bars = useMemo(() => {
    const barElements = [];
    const barWidth = 0.3;
    const barSpacing = 0.4;
    const totalWidth = (totalTasks - 1) * barSpacing;

    for (let i = 0; i < totalTasks; i++) {
      const isCompleted = i < completedTasks;
      const x = i * barSpacing - totalWidth / 2;
      const height = isCompleted ? 2 : 0.5;
      const color = isCompleted ? "#10b981" : "#e5e7eb";

      barElements.push(
        <mesh key={i} position={[x, height / 2, 0]}>
          <boxGeometry args={[barWidth, height, barWidth]} />
          <meshStandardMaterial color={color} />
        </mesh>
      );
    }

    return barElements;
  }, [completedTasks, totalTasks]);

  return (
    <group ref={groupRef}>
      {bars}
      <TextDynamic
        position={[0, -1, 0]}
        fontSize={0.3}
        color="#374151"
        anchorX="center"
        anchorY="middle"
        font="/fonts/Inter_Bold.json"
      >
        {Math.round(completionRatio * 100)}% Complete
      </TextDynamic>
    </group>
  );
}

function FloatingCubes({ completedTasks }) {
  console.log(
    "[v0] FloatingCubes rendering with completedTasks:",
    completedTasks
  );

  const cubesRef = useRef(null);

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  const cubes = useMemo(() => {
    const cubeElements = [];
    const radius = 3;

    for (let i = 0; i < completedTasks; i++) {
      const angle = (i / completedTasks) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = Math.sin(i * 0.5) * 0.5;

      cubeElements.push(
        <mesh key={i} position={[x, y, z]}>
          <boxGeometry args={[0.2, 0.2, 0.2]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
      );
    }

    return cubeElements;
  }, [completedTasks]);

  return <group ref={cubesRef}>{cubes}</group>;
}

export function TaskProgress3D({ completedTasks, totalTasks }) {
  {
    completedTasks, totalTasks;
  }
  // console.log("[v0] TaskProgress3D props:", { completedTasks, totalTasks });

  return (
    <div className="w-full h-64 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-lg overflow-hidden">
      <Suspense fallback={<TaskProgress3DFallback />}>
        <CanvasDynamic camera={{ position: [0, 2, 8], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.3} />

          <ProgressBar3D
            completedTasks={completedTasks}
            totalTasks={totalTasks}
          />
          <FloatingCubes completedTasks={completedTasks} />

          <OrbitControlsDynamic
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </CanvasDynamic>
      </Suspense>
    </div>
  );
}
