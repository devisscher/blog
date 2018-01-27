import React from 'react';

export default function File(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M0 0v8h7v-4h-4v-4h-3zm4 0v3h3l-3-3z" />
    </svg>
  );
}