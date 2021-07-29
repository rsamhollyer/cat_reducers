/* eslint-disable react/prop-types */
import React from 'react';

export default function ActionButton({ tag, handleClick }) {
  return (
    <div>
      <button onClick={handleClick} type="button">
        {tag}
      </button>
    </div>
  );
}
