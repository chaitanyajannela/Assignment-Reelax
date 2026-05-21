import { useState } from 'react'
import AnalyticsCard from '../dashboard/AnalyticsCard'
import DataTable from '../dashboard/DataTable'
import Button from '../common/Button'
import iconWallet from '../../assets/icon-wallet.svg'
import iconCoupon from '../../assets/icon-coupon.svg'
import iconChevronUp from '../../assets/icon-chevron-up.svg'

function WalletBalance() {
  return (
    <div className="flex w-full flex-col gap-3 rounded-input border border-border bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-[17px]">
      <div className="flex items-center gap-3">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-2xl bg-wallet-bg">
          <img src={iconWallet} alt="" className="h-3 w-[12.667px]" />
        </div>
        <div>
          <p className="text-sm font-bold leading-5 text-heading">Wallet Balance</p>
          <p className="text-xs font-medium leading-4 text-muted">₹500.00 available</p>
        </div>
      </div>
      <Button variant="outline" className="w-full px-[13px] py-[7px] text-sm sm:w-auto">
        Apply
      </Button>
    </div>
  )
}

const coupons = [
  { id: 'welcome20', code: 'WELCOME20', desc: '20% off on your first month' },
  { id: 'annual50', code: 'ANNUAL50', desc: '50% off on annual plans' },
]

function CouponSection() {
  const [selected, setSelected] = useState('welcome20')
  const [couponOpen, setCouponOpen] = useState(true)

  return (
    <div className="w-full overflow-hidden rounded-input border border-border bg-white shadow-card">
      <button
        type="button"
        onClick={() => setCouponOpen((open) => !open)}
        className="interactive-focus flex w-full items-center justify-between border-b border-border px-4 pb-[17px] pt-4 hover:bg-gray-50/80 active:bg-gray-100"
        aria-expanded={couponOpen}
      >
        <div className="flex items-center gap-3">
          <img src={iconCoupon} alt="" className="size-[15px]" />
          <span className="text-sm font-bold leading-5 text-heading">Apply Coupon</span>
        </div>
        <img
          src={iconChevronUp}
          alt=""
          className={`size-4 transition-transform duration-200 ${couponOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {couponOpen && (
        <div className="flex flex-col gap-4 bg-coupon p-4">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="text"
              placeholder="Enter coupon code"
              className="interactive-focus h-[38px] flex-1 rounded-input border border-border bg-white px-[13px] text-sm text-heading placeholder:text-muted hover:border-primary/40"
            />
            <Button variant="outline" className="w-full shrink-0 px-[13px] py-[7px] text-sm sm:w-auto">
              Apply
            </Button>
          </div>

          <div className="flex flex-col gap-3" role="radiogroup" aria-label="Available coupons">
            {coupons.map((coupon) => (
              <label
                key={coupon.id}
                className={`coupon-option ${
                  selected === coupon.id ? 'coupon-option-selected' : 'coupon-option-default'
                }`}
              >
                <div className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-2">
                  <span className="shrink-0 text-sm font-bold leading-5 text-heading">
                    {coupon.code}
                  </span>
                  <span className="text-[10px] leading-4 text-muted sm:text-xs">{coupon.desc}</span>
                </div>
                <input
                  type="radio"
                  name="coupon"
                  value={coupon.id}
                  checked={selected === coupon.id}
                  onChange={() => setSelected(coupon.id)}
                  className="sr-only"
                />
                <span
                  className={`size-4 shrink-0 rounded-full border bg-white ${
                    selected === coupon.id
                      ? 'border-4 border-primary'
                      : 'border border-primary'
                  }`}
                />
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Sidebar() {
  return (
    <aside className="flex w-full flex-col gap-[15px]">
      <AnalyticsCard />
      <div className="flex flex-col gap-3 rounded-card border border-border bg-white px-4 pb-6 pt-4 sm:px-6 md:px-[33px] md:pb-[33px] md:pt-[15px]">
        <div className="flex flex-col gap-3 md:pt-3">
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
