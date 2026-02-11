export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-12 h-12 border-4 border-slate-200 border-t-accent rounded-full animate-spin"></div>
    </div>
  );
}
