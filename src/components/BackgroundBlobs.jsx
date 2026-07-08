import React, { useEffect, useRef } from 'react';

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Blob */}
      <div
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl animate-blob-top"
        style={{ animation: 'blob-top 8s infinite' }}
      />

      {/* Bottom Right Blob */}
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-full blur-3xl animate-blob-bottom"
        style={{ animation: 'blob-bottom 8s infinite' }}
      />

      {/* Center Blob */}
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-full blur-3xl" />
    </div>
  );
};

export default BackgroundBlobs;
