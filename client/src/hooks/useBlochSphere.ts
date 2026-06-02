import { useState, useCallback } from "react";

export interface BlochCoordinates {
  x: number;
  y: number;
  z: number;
}

export function useBlochSphere() {
  const [theta, setTheta] = useState(0);
  const [phi, setPhi] = useState(0);

  const getCoordinates = useCallback((): BlochCoordinates => {
    const x = Math.sin(theta) * Math.cos(phi);
    const y = Math.sin(theta) * Math.sin(phi);
    const z = Math.cos(theta);
    return { x, y, z };
  }, [theta, phi]);

  return { theta, phi, setTheta, setPhi, getCoordinates };
}
