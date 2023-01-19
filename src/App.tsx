import modal from "./lib";
import { TestModal } from "./test.modal";

function App() {
  const onClick = () => {
    modal.open(TestModal, { props: { abc: true } });
  };
  return (
    <div className="App">
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
