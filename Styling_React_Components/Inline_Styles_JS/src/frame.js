import React from "react";
import frameStyle from "./frame-styles";
export default function Frame({ children }) {
  return <div style={frameStyle.root}>{children}</div>;
}
