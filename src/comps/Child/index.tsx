import { CSSProperties, FC, memo, useState } from "react";
import {
  messageStyleWithAnimation,
  messageStyleWithAnimationChild,
} from "../style";

const Child: FC = memo((): JSX.Element => {
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const handleChildClick = (): void => {
    console.log("Child clicked");
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 480);
  };

  return (
    <div style={childStyle} onClick={handleChildClick}>
      <p>Clickable Child Component</p>
      <p
        style={
          showMessage
            ? messageStyleWithAnimation
            : messageStyleWithAnimationChild
        }
      >
        Child clicked
      </p>
    </div>
  );
});

export default Child;

//styles
const childStyle: CSSProperties = {
  background: "linear-gradient(to right, rgb(0 46 255), rgb(0 194 255))",
  borderRadius: "4px",
  color: "#fff",
  cursor: "pointer",
  padding: "10px 20px",
};
