import React from 'react';

export default function Logo({ className = "h-6 w-auto" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 200 32" 
      className={className}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Z */}
      <path
        d="M16 4h24v6.4L24 21.6h16v6.4H16v-6.4l16-11.2H16V4z"
        className="fill-white"
      />
      {/* O */}
      <path
        d="M44 4h16c4.4 0 8 3.6 8 8v8c0 4.4-3.6 8-8 8H44c-4.4 0-8-3.6-8-8v-8c0-4.4 3.6-8 8-8zm0 6.4c-.88 0-1.6.72-1.6 1.6v8c0 .88.72 1.6 1.6 1.6h16c.88 0 1.6-.72 1.6-1.6v-8c0-.88-.72-1.6-1.6-1.6H44z"
        className="fill-white"
      />
      {/* L */}
      <path
        d="M72 4h8v17.6h16v6.4H72V4z"
        className="fill-white"
      />
      {/* I */}
      <path
        d="M100 4h8v24h-8V4z"
        className="fill-white"
      />
      {/* Q */}
      <path
        d="M112 4h16c4.4 0 8 3.6 8 8v8c0 4.4-3.6 8-8 8h-4l4 4h-9.6l-2.4-4c-4.4 0-8-3.6-8-8v-8c0-4.4 3.6-8 8-8zm0 6.4c-.88 0-1.6.72-1.6 1.6v8c0 .88.72 1.6 1.6 1.6h16c.88 0 1.6-.72 1.6-1.6v-8c0-.88-.72-1.6-1.6-1.6h-16z"
        className="fill-white"
      />
      {/* U */}
      <path
        d="M140 4h8v16c0 .88.72 1.6 1.6 1.6h4.8c.88 0 1.6-.72 1.6-1.6V4h8v16c0 4.4-3.6 8-8 8h-8c-4.4 0-8-3.6-8-8V4z"
        className="fill-white"
      />
      {/* A */}
      <path
        d="M168 4h8l12 24h-9.6l-1.6-3.2h-9.6L166 28h-9.6L168 4zm1.6 14.4h4.8L172 13.6l-2.4 4.8z"
        className="fill-white"
      />
    </svg>
  );
}