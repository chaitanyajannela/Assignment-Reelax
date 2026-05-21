export default function SearchBar({
  placeholder = 'Find influencers to collaborate with',
  className = '',
}) {
  return (
    <div
      className={`flex h-10 flex-1 max-w-[420px] items-center rounded-input border border-border bg-white px-4 text-sm text-muted ${className}`}
      aria-hidden="true"
    >
      <span className="flex-1 truncate">{placeholder}</span>
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        className="shrink-0 text-muted"
        aria-hidden
      >
        <path
          d="M21 21l-4.35-4.35M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
