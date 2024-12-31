import React from "react";

const InputField = ({ label, value, onChange, type = "text", placeholder, errorMessage }) => {
  return (
    <div style={{ marginBottom: "10px" }}>
      <label>
        {label}:
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            width: "100%",
            padding: "10px",
            border: errorMessage ? "1px solid red" : "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
      </label>
      {errorMessage && <p style={{ color: "red", fontSize: "12px" }}>{errorMessage}</p>}
    </div>
  );
};

export default InputField;
