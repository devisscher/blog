import React from 'react';

export default function CaretLeft(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M4 0l-4 4 4 4v-8z" transform="translate(2)" />
    </svg>
  );
}
