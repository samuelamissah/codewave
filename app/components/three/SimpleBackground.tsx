'use client';

export default function SimpleBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {/* Main gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-primary-900/5 to-dark-900" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(to right, #3A8DFF 1px, transparent 1px),
                           linear-gradient(to bottom, #3A8DFF 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}