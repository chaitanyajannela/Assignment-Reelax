import AnalyticsCard from '../dashboard/AnalyticsCard'
import DataTable from '../dashboard/DataTable'
import Button from '../common/Button'
import iconWallet from '../../assets/icon-wallet.svg'
import iconCoupon from '../../assets/icon-coupon.svg'
import iconChevronUp from '../../assets/icon-chevron-up.svg'

function WalletBalance() {
  return (
    <div className="flex w-full items-center justify-between rounded-input border border-border bg-white p-[17px]">
      <div className="flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-2xl bg-wallet-bg">
          <img src={iconWallet} alt="" className="h-3 w-[12.667px]" />
        </div>
        <div>
          <p className="text-sm font-bold leading-5 text-heading">Wallet Balance</p>
          <p className="text-xs font-medium leading-4 text-muted">₹500.00 available</p>
        </div>
      </div>
      <Button variant="outline" className="px-[13px] py-[7px] text-sm">
        Apply
      </Button>
    </div>
  )
}

function CouponSection() {
  return (
    <div className="w-full overflow-hidden rounded-input border border-border bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-border px-4 pb-[17px] pt-4">
        <div className="flex items-center gap-3">
          <img src={iconCoupon} alt="" className="size-[15px]" />
          <span className="text-sm font-bold leading-5 text-heading">Apply Coupon</span>
        </div>
        <img src={iconChevronUp} alt="" className="size-4 rotate-180" />
      </div>
      <div className="flex flex-col gap-4 bg-coupon p-4">
        <div className="flex gap-2">
          <div className="flex flex-1 items-center rounded-input border border-border bg-white px-[13px] py-[9px]">
            <span className="text-sm leading-5 text-muted">Enter coupon code</span>
          </div>
          <Button variant="outline" className="shrink-0 px-[13px] py-[7px] text-sm">
            Apply
          </Button>
        </div>
        <div className="flex flex-col gap-3">
          <label className="flex cursor-pointer items-center justify-between rounded-input border border-primary bg-white p-[13px]">
            <div className="flex flex-1 items-center gap-2">
              <span className="w-[102px] shrink-0 text-sm font-bold leading-5 text-heading">
                WELCOME20
              </span>
              <span className="text-[10px] leading-4 text-muted">
                20% off on your first month
              </span>
            </div>
            <span className="size-4 shrink-0 rounded-full border-4 border-primary bg-white" />
          </label>
          <label className="flex cursor-pointer items-center justify-between rounded-input border border-border-light bg-white p-3">
            <div className="flex flex-1 items-center gap-2">
              <span className="w-[88px] shrink-0 text-sm font-bold leading-5 text-heading">
                ANNUAL50
              </span>
              <span className="text-[10px] leading-4 text-muted">50% off on annual plans</span>
            </div>
            <span className="size-4 shrink-0 rounded-full border border-primary bg-white" />
          </label>
        </div>
      </div>
    </div>
  )
}

export default function Sidebar() {
  return (
    <aside className="flex w-full max-w-[429px] flex-col gap-[15px] lg:max-w-none">
      <AnalyticsCard />
      <div className="flex flex-col gap-3 rounded-card border border-border bg-white px-[33px] pb-[33px] pt-[15px]">
        <div className="flex flex-col gap-3 pt-3">
          <WalletBalance />
          <CouponSection />
        </div>
        <DataTable />
        <Button variant="primary" className="mt-1 h-[43px] w-full py-4 text-base font-semibold">
          Proceed to Payment
        </Button>
      </div>
    </aside>
  )
}
