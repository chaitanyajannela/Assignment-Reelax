import headerImage from '../../assets/header.png'

export default function Header() {
  return (
    <header className="relative z-[2] w-full shrink-0">
      <div className="aspect-[1218/68] w-full overflow-hidden">
        <img
          src={headerImage}
          alt="Navigation with search, upgrade, and create campaign actions"
          className="h-full w-[105.09%] max-w-none object-cover object-left"
        />
      </div>
    </header>
  )
}
