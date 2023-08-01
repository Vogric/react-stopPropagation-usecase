import { CSSProperties, FC } from "react";
import Parent from "./comps/Parent";

const App: FC = (): JSX.Element => (
  <div style={container}>
    <Parent />
  </div>
);

export default App;

//styles
const container: CSSProperties = {
  alignItems: "center",
  backgroundColor: "#f0f0f0",
  display: "flex",
  fontFamily: "cursive",
  height: "100vh",
  justifyContent: "center",
};
