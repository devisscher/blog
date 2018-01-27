import React from 'react';

export default function Cloudy(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} viewBox="0 0 8 8" {...props}>
      <path d="M2.5 0c-1.38 0-2.5 1.12-2.5 2.5 0 .39.09.74.25 1.06.3-.21.64-.37 1-.47.55-1.25 1.82-2.09 3.25-2.09-.46-.6-1.18-1-2-1zm2 2c-1.21 0-2.27.86-2.5 2-1.1 0-2 .9-2 2s.9 2 2 2h4.5c.83 0 1.5-.67 1.5-1.5 0-.65-.42-1.29-1-1.5v-.5c0-1.38-1.12-2.5-2.5-2.5z" />
    </svg>
  );
}