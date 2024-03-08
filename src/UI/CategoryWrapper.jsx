import React from "react";

export default function CategoryWrapper({ children }) {
  return (
    <div style={{ display: "flex", columnGap: "5%", width: "100%" }}>
      {children}
    </div>
  );
}
