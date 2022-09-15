import { useState } from "react";

export default function Button({ title, state }) {
  return (
    <button
      onClick={() => {
        state(title);
      }}
    >
      {title}
    </button>
  );
}
