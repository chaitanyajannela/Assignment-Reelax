import Badge from '../common/Badge'
import Button from '../common/Button'
import iconUpgrade from '../../assets/icon-upgrade.svg'

export default function AnalyticsCard() {
  return (
    <section className="flex w-full flex-col gap-4 rounded-card border border-border bg-white p-5 sm:p-6 md:p-[33px]">
      <h3 className="text-xl font-bold leading-8 text-heading md:text-2xl">Order Summary</h3>

      <div className="relative overflow-hidden rounded-input border border-primary-border bg-white px-4 py-4 shadow-card sm:px-[25px] sm:py-[21px]">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:gap-x-[29px]">
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-extrabold leading-9 text-heading sm:text-[30px]">
              ₹4,999
            </span>
            <span className="text-sm font-medium leading-6 text-muted sm:text-base">/month</span>
          </div>
          <div className="sm:pb-2">
            <Badge>Selected Plan</Badge>
            <p className="text-lg font-bold leading-7 text-heading sm:text-xl">Startup</p>
          </div>
        </div>
        <p className="mt-2 text-sm font-medium leading-5 text-muted sm:mt-0">
          Includes 5,000 credits/mo.
        </p>
      </div>

      <Button variant="pill" className="w-full py-[11px] text-sm">
        <img src={iconUpgrade} alt="" className="size-[13.333px]" />
        Upgrade to Growth Plan
      </Button>
    </section>
  )
}
