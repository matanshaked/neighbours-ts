import { MainView } from "./components/main-view/MainView.component";
import { Matrix } from "./DataStructures";
import { dim } from "./Config";

import "./App.css";

function App(): JSX.Element {
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
