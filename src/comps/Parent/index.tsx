import { CSSProperties, FC, useState } from "react";
import Child from "../Child";
import {
  messageStyleWithAnimation,
  messageStyleWithoutAnimation,
} from "../style";

const Parent: FC = (): JSX.Element => {
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const handleParentClick = (): void => {
    console.log("Parent clicked");
    setShowMessage(true);
    setTimeout((): void => {
      setShowMessage(false);
    }, 480);
  };

  return (
    <div style={parentStyle} onClick={handleParentClick}>
      <h1 style={{ fontSize: "24px" }}>Clickable parent component</h1>
      <p
        style={
          showMessage ? messageStyleWithAnimation : messageStyleWithoutAnimation
        }
      >
        Parent clicked
      </p>
      <Child />
    </div>
  );
};

export default Parent;

const parentStyle: CSSProperties = {
  backgroundColor: "rgb(255 255 255)",
  border: "2px solid #ccc",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  padding: "20px",
  position: "relative",
  textAlign: "center",
};
