import LayoutWrapper from './components/layout/LayoutWrapper'
import BillingInformation from './components/dashboard/BillingInformation'
import Sidebar from './components/layout/Sidebar'

export default function App() {
  return (
    <LayoutWrapper>
      <main className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <BillingInformation />
        </div>
        <div className="lg:col-span-5 lg:justify-self-end">
          <Sidebar />
        </div>
      </main>
    </LayoutWrapper>
  )
}
