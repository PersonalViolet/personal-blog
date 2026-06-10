export default function Loading() {
  return (
    <div className="mx-auto flex max-w-3xl items-center justify-center px-6 py-32">
      <div className="flex items-center gap-3 text-text-tertiary">
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
        <span className="text-sm">加载中...</span>
      </div>
    </div>
  );
}
