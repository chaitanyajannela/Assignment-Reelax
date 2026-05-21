import Button from '../common/Button'
import iconChevronDown from '../../assets/icon-chevron-down.svg'

function FormField({ label, optional, value, placeholder, isSelect }) {
  const displayValue = value ?? placeholder
  const valueColor = value ? 'text-placeholder' : 'text-muted'

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium leading-5 text-label">
        {label}
        {optional && (
          <>
            {' '}
            <span className="text-optional">(Optional)</span>
          </>
        )}
      </label>
      <div
        className={`flex h-11 items-center rounded-input border border-border bg-input px-[17px] py-[13px] ${
          isSelect ? 'justify-between' : ''
        }`}
      >
        <span className={`text-sm leading-6 ${valueColor}`}>{displayValue}</span>
        {isSelect && <img src={iconChevronDown} alt="" className="size-4 shrink-0" />}
      </div>
    </div>
  )
}

export default function BillingInformation() {
  return (
    <section className="w-full rounded-card bg-white px-[22px] py-[26px] lg:max-w-[679px]">
      <div className="mx-auto flex max-w-[615px] flex-col gap-[15px]">
        <h1 className="pb-8 text-[26px] font-semibold leading-10 tracking-[-0.9px] text-heading">
          Review your details
        </h1>

        <div className="flex flex-col gap-6 pb-12">
          <h2 className="text-xl font-bold leading-7 text-heading-muted">Billing Information</h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField label="Company Name" value="abhigyan" />
            <FormField label="Email" value="abhigyan.pandey@getreelax.com" />
            <FormField label="GST Number" optional placeholder="GST Number" />
            <FormField label="PAN Number" optional placeholder="PAN Number" />
            <FormField label="Premise/House no." placeholder="Premise/House no." />
            <FormField label="Street" placeholder="Street" />
            <FormField label="State" placeholder="Select state" isSelect />
            <FormField label="City" placeholder="Select city" isSelect />
            <FormField label="Country" value="India" />
            <FormField label="Pin Code" placeholder="Pincode" />
          </div>

          <div className="flex flex-col gap-3 border-t border-border pt-[25px] sm:flex-row sm:justify-end">
            <Button variant="ghost" className="px-[25px] py-[11px] text-base">
              Cancel
            </Button>
            <Button variant="primary" className="px-6 py-[13px] text-base font-bold">
              Save Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
