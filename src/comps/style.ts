import { CSSProperties } from "react";

export const messageStyle: CSSProperties = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  border: "1px solid blue",
  borderStyle: "dashed",
  padding: "10px",
  borderRadius: "20px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#002eff2b",
  color: "#3f3fff;",
};

export const messageStyleWithoutAnimation: CSSProperties = {
  ...messageStyle,
  top: "300px",
  opacity: 0,
};

export const messageStyleWithAnimation: CSSProperties = {
  ...messageStyle,
  top: "200px",
  transition: "top 0.4s ease-out, opacity 0.4s ease-out",
  opacity: 1,
};

export const messageStyleWithAnimationChild: CSSProperties = {
  ...messageStyle,
  top: "400px",
  transition: "top 0.4s ease-out, opacity 0.4s ease-out",
  opacity: 0,
};
