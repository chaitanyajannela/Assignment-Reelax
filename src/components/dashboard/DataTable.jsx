import { formatCurrency } from '../../utils/currency'

const rows = [
  { label: 'Subtotal', value: formatCurrency(14999) },
  { label: 'Tax (18% GST)', value: formatCurrency(1079.64) },
]

export default function DataTable() {
  return (
    <div className="flex w-full flex-col gap-4 px-0 pb-4 pt-2">
      {rows.map((row) => (
        <div key={row.label} className="flex items-center justify-between gap-4">
          <span className="text-sm font-medium leading-5 text-muted">{row.label}</span>
          <span className="shrink-0 text-sm font-semibold leading-5 text-black">{row.value}</span>
        </div>
      ))}
      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border pt-[17px]">
        <span className="text-base font-bold leading-7 text-heading md:text-lg">
          Total due today
        </span>
        <span className="text-xl font-extrabold leading-8 text-primary md:text-2xl">
          16,078.64
        </span>
      </div>
    </div>
  )
}
