export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-primary">
      <div className="flex flex-col items-center gap-6">
        {/* Modern dual-ring spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-30" />
          <div className="absolute inset-0 rounded-full border-t-4 border-blue-500 animate-spin" />
        </div>
        <p className="text-lg font-medium tracking-wide">
        </p>
      </div>
    </div>
  );
}