import iconSearch from '../../assets/icon-search.svg'

export default function SearchBar({
  placeholder = 'Find influencers to collaborate with',
  className = '',
  id = 'nav-search',
}) {
  return (
    <div className={`relative min-w-0 ${className}`}>
      <label htmlFor={id} className="sr-only">
        Search influencers
      </label>
      <input
        id={id}
        type="search"
        placeholder={placeholder}
        className="nav-input"
      />
      <img
        src={iconSearch}
        alt=""
        className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2"
        aria-hidden
      />
    </div>
  )
}
