import React from "react";

const style: React.CSSProperties = {
  border: "var(--gap-s) solid var(--color-3)",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  borderRightColor: "var(--color-1)",
  animation: "spin 2s infinite",
};
const Loading = () => {
  return (
    <div style={style}>
      <style>{`@keyframes spin{to{transform:rotate(360deg);}}`}</style>
    </div>
  );
};

export default Loading;
