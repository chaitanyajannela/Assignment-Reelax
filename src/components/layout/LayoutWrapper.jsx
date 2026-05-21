import iconBack from '../../assets/icon-back.svg'
import Header from './Header'

export default function LayoutWrapper({ children }) {
  return (
    <div className="min-h-screen w-full bg-page">
      <Header />

      <div className="mx-auto w-full max-w-shell px-4 sm:px-6 md:px-10 lg:px-8 xl:px-20">
        <div className="mx-auto flex w-full max-w-content flex-col py-6 sm:py-8 md:py-10 lg:py-[46px]">
          <a
            href="#plans"
            className="interactive-focus mb-6 inline-flex w-fit items-center gap-2 rounded-nav px-1 text-sm font-medium leading-5 text-muted hover:text-heading active:text-primary"
          >
            <img src={iconBack} alt="" className="size-4 shrink-0" />
            Back to plans
          </a>

          {children}
        </div>
      </div>
    </div>
  )
}
