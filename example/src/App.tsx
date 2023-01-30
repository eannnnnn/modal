import modal, { ModalContainer, ModalRoot } from "@dev.waca/modal";
import "@dev.waca/modal/dist/style.css";

const Modal: ModalRoot = () => {
  return <div>modal</div>;
};

function App() {
  const onModalOpenClick = () => {
    modal.open(Modal, { backgroundCloseable: true });
  };

  return (
    <div>
      <div>
        <button onClick={onModalOpenClick}>open modal</button>
      </div>
      <ModalContainer />
    </div>
  );
}

export default App;
