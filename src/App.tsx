import MainView from "./main-view/MainView.component";
import { Matrix } from "./dataStructure";

import "./App.css";

function App() {
  let dim = 50;

  let originalMatrix: Matrix;
  originalMatrix = new Array(dim);

  for (let i = 0; i < dim; i++) {
    originalMatrix[i] = Array.from({ length: dim }, () =>
      Math.floor(Math.random() * 2)
    );
  }

  return (
    <div className="App">
      <MainView originalMatrix={originalMatrix} />
    </div>
  );
}

export default App;
