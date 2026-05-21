import LayoutWrapper from './components/layout/LayoutWrapper'
import BillingInformation from './components/dashboard/BillingInformation'
import Sidebar from './components/layout/Sidebar'

export default function App() {
  return (
    <LayoutWrapper>
      <main className="grid w-full grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-7">
          <BillingInformation />
        </div>
        <div className="min-w-0 lg:col-span-5">
          <Sidebar />
        </div>
      </main>
    </LayoutWrapper>
  )
}
