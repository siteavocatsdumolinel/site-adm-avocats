'use client'

import { ReactNode } from 'react'

export default function ClickStopPropagation({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span onClick={(e) => e.stopPropagation()} className={className} role="presentation">
      {children}
    </span>
  )
}
