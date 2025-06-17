import React from "react";

export function Select({ children, className, ...props }) {
  return (
    <select
      className={`w-full p-2 border rounded-md bg-gray-700 text-white ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

export function SelectItem({ value, children }) {
  return <option value={value}>{children}</option>;
}
