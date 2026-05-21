import Badge from '../common/Badge'
import Button from '../common/Button'
import iconUpgrade from '../../assets/icon-upgrade.svg'

export default function AnalyticsCard() {
  return (
    <section className="flex w-full max-w-[429px] flex-col gap-4 rounded-card border border-border bg-white p-[33px] lg:max-w-none">
      <h3 className="text-2xl font-bold leading-8 text-heading">Order Summary</h3>

      <div className="relative overflow-hidden rounded-input border border-primary-border bg-white px-[25px] py-[21px] shadow-card">
        <div className="flex flex-wrap items-start gap-x-[29px] gap-y-2">
          <div className="flex items-baseline gap-1 pb-2">
            <span className="text-[30px] font-extrabold leading-9 text-heading">₹4,999</span>
            <span className="text-base font-medium leading-6 text-muted">/month</span>
          </div>
          <div className="pb-4">
            <Badge>Selected Plan</Badge>
            <p className="text-xl font-bold leading-7 text-heading">Startup</p>
          </div>
        </div>
        <p className="text-sm font-medium leading-5 text-muted">Includes 5,000 credits/mo.</p>
      </div>

      <Button variant="pill" className="w-full py-[11px] text-sm">
        <img src={iconUpgrade} alt="" className="size-[13.333px]" />
        Upgrade to Growth Plan
      </Button>
    </section>
  )
}
