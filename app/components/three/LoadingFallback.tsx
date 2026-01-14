export default function LoadingFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-color-dark/50">
      <div className="relative">
        <div className="w-12 h-12 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-secondary-500/30 border-t-secondary-500 rounded-full animate-spin animate-reverse" />
        </div>
      </div>
    </div>
  );
}