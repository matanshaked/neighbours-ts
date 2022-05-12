import MainView from "./components/main-view/MainView.component";
import { Matrix } from "./DataStructures";
import { Dim } from "./Consts";

import "./App.css";

function App() {
  let originalMatrix: Matrix;
  originalMatrix = new Array(Dim);

  for (let i = 0; i < Dim; i++) {
    originalMatrix[i] = Array.from({ length: Dim }, () =>
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
