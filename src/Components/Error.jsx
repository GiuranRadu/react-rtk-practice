import React from "react";

const Error = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: "#c32929",
        color: "#ddd4d6",
        border: "4px solid #e0abb5",
        borderRadius: "6px",
        padding: "16px",
        margin: "16px 0",
        fontWeight: "bold",
      }}
      role="alert"
    >
      {message ?? "A apărut o eroare."}
      <p>Puteti oricand sa omiteti acest mesaj</p>
    </div>
  );
};

export default Error;