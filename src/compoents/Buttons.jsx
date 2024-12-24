import React from 'react';

export const Buttons = ({ disabled, type = "text", placeholder }) => {
  return (
    <div
      className={`rounded-2xl text-xl px-8 py-2 flex items-center justify-center ${
        disabled ? "bg-sky-200" : "bg-slate-400"
      }`}
    >
      <input
        className={`w-full bg-transparent text-center text-white outline-none placeholder-white ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};
