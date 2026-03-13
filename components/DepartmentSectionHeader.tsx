import { getDepartmentIcon } from './DepartmentIcons'

export default function DepartmentSectionHeader({ title, iconKey = 'social' }: { title: string; iconKey?: string }) {
  return (
    <div className="flex flex-col items-center mb-12 lg:mb-16">
      <div className="w-20 h-20 rounded-2xl bg-[#E5493D] flex items-center justify-center mb-4 shadow-sm shadow-[#E5493D]/30">
        {getDepartmentIcon(iconKey)}
      </div>
      <p className="text-[#E5493D] text-xs font-semibold tracking-[0.25em] uppercase mb-2">Département</p>
      <h2 className="text-[#313E35] text-2xl md:text-3xl font-semibold uppercase tracking-wide text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
        {title}
      </h2>
    </div>
  )
}
