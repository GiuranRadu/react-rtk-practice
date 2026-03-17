import React from "react";

const Error = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffe6e6",
        color: "#b00020",
        border: "1px solid #b00020",
        borderRadius: "6px",
        padding: "16px",
        margin: "16px 0",
        fontWeight: "bold",
      }}
      role="alert"
    >
      {message ?? "A apărut o eroare."}
    </div>
  );
};

export default Error;