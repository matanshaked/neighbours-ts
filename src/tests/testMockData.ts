import { Matrix } from "../DataStructures";

export const mockOriginalMatrix: Matrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

export const mockTargetMatrix: string =
  '<tbody data-testid="results target table"><tr><td class="light-mode">0</td><td class="light-mode">0</td><td class="light-mode">0</td><td class="light-mode">0</td><td class="light-mode">0</td></tr><tr><td class="light-mode">0</td><td class="light-mode">0</td><td class="dark-mode">1</td><td class="light-mode">0</td><td class="light-mode">0</td></tr><tr><td class="light-mode">0</td><td class="light-mode">0</td><td class="dark-mode">1</td><td class="light-mode">0</td><td class="light-mode">0</td></tr><tr><td class="light-mode">0</td><td class="light-mode">0</td><td class="dark-mode">1</td><td class="light-mode">0</td><td class="light-mode">0</td></tr><tr><td class="light-mode">0</td><td class="light-mode">0</td><td class="light-mode">0</td><td class="light-mode">0</td><td class="light-mode">0</td></tr></tbody>';
