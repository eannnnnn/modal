import { ModalRoot } from "./lib";
export const TestModal: ModalRoot<{ abc: boolean }> = ({ id, abc }) => {
  return <div style={{ background: "red" }}>123123123</div>;
};
