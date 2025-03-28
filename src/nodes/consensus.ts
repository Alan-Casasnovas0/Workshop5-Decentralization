import { BASE_NODE_PORT } from "../config";

export async function startConsensus(N: number) {
  // launch a node
  for (let index = 0; index < N; index++) {
    fetch(`http://localhost:${BASE_NODE_PORT + index}/start`);  // removed await as only the first node would start
  }
}

export async function stopConsensus(N: number) {
  // launch a node
  for (let index = 0; index < N; index++) {
    await fetch(`http://localhost:${BASE_NODE_PORT + index}/stop`);
  }
}
