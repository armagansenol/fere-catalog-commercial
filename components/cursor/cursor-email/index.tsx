"use client"

import { useCursorStore } from "@/lib/store/cursor"

export interface CursorEmailProps {
  children: React.ReactNode
}

export default function CursorEmail({ children }: CursorEmailProps) {
  const { events } = useCursorStore()
  return <div {...events.cursorEmail}>{children}</div>
}
