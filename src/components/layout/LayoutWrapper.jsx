import iconBack from '../../assets/icon-back.svg'
import Header from './Header'

export default function LayoutWrapper({ children }) {
  return (
    <div className="relative isolate flex min-h-screen w-full flex-col items-center bg-page">
      <Header />
      <div className="relative z-[1] w-full max-w-content px-4 py-[46px] sm:px-6 lg:px-0">
        <a
          href="#plans"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium leading-5 text-muted hover:text-heading"
        >
          <img src={iconBack} alt="" className="size-4" />
          Back to plans
        </a>
        {children}
      </div>
    </div>
  )
}
