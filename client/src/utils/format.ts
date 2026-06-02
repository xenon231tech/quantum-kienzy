export function formatProbability(prob: number): string {
  return (prob * 100).toFixed(2) + "%";
}

export function formatExecutionTime(ms: number): string {
  if (ms < 1000) return ms.toFixed(2) + "ms";
  return (ms / 1000).toFixed(2) + "s";
}

export function formatQuantumState(state: string): string {
  return "|" + state + "⟩";
}

export function formatBinary(num: number, bits: number): string {
  return num.toString(2).padStart(bits, "0");
}
