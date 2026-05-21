import Button from '../common/Button'
import iconChevronDown from '../../assets/icon-chevron-down.svg'

function FormField({ label, optional, value, placeholder, isSelect, name }) {
  const fieldId = `field-${name}`

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={fieldId} className="text-sm font-medium leading-5 text-label">
        {label}
        {optional && (
          <>
            {' '}
            <span className="text-optional">(Optional)</span>
          </>
        )}
      </label>
      {isSelect ? (
        <div className="relative">
          <select
            id={fieldId}
            name={name}
            defaultValue=""
            className="interactive-focus h-11 w-full cursor-pointer appearance-none rounded-input border border-border bg-input px-[17px] py-2.5 text-sm leading-6 text-muted hover:border-primary/40 focus:border-primary focus:text-heading"
          >
            <option value="" disabled>
              {placeholder}
            </option>
          </select>
          <img
            src={iconChevronDown}
            alt=""
            className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2"
          />
        </div>
      ) : (
        <input
          id={fieldId}
          name={name}
          type="text"
          defaultValue={value ?? undefined}
          placeholder={placeholder}
          className="interactive-focus h-11 w-full rounded-input border border-border bg-input px-[17px] py-2.5 text-sm leading-6 text-heading placeholder:text-placeholder hover:border-primary/40 focus:border-primary active:border-primary"
        />
      )}
    </div>
  )
}

export default function BillingInformation() {
  return (
    <section className="w-full rounded-card bg-white px-4 py-6 sm:px-6 sm:py-7 md:px-[22px] md:py-[26px]">
      <div className="mx-auto flex w-full max-w-[615px] flex-col gap-[15px]">
        <h1 className="text-xl font-semibold leading-8 tracking-[-0.9px] text-heading sm:pb-4 sm:text-[26px] sm:leading-10 md:pb-8">
          Review your details
        </h1>

        <div className="flex flex-col gap-6 pb-8 md:pb-12">
          <h2 className="text-lg font-bold leading-7 text-heading-muted md:text-xl">
            Billing Information
          </h2>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FormField label="Company Name" name="company" placeholder="Company name" />
            <FormField label="Email" name="email" placeholder="Email" />
            <FormField label="GST Number" name="gst" optional placeholder="GST Number" />
            <FormField label="PAN Number" name="pan" optional placeholder="PAN Number" />
            <FormField label="Premise/House no." name="premise" placeholder="Premise/House no." />
            <FormField label="Street" name="street" placeholder="Street" />
            <FormField label="State" name="state" placeholder="Select state" isSelect />
            <FormField label="City" name="city" placeholder="Select city" isSelect />
            <FormField label="Country" name="country" value="India" />
            <FormField label="Pin Code" name="pincode" placeholder="Pincode" />
          </div>

          <div className="flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end sm:gap-3 sm:pt-[25px]">
            <Button
              variant="ghost"
              className="w-full px-[25px] py-[11px] text-base sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              className="w-full px-6 py-[13px] text-base font-bold sm:w-auto"
            >
              Save Details
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
