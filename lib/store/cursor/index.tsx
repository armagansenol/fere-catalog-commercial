import { CursorType } from "@/types"
import { create } from "zustand"
import { MouseEventHandler } from "react"

interface CursorEvents {
  cursorEmail: {
    onMouseEnter: MouseEventHandler
    onMouseLeave: MouseEventHandler
  }
  cursorView: {
    onMouseEnter: MouseEventHandler
    onMouseLeave: MouseEventHandler
  }
}

interface State {
  type: CursorType
  visible: boolean
  toggleVisibility: () => void
  setCursor: (type: CursorType) => void
  events: CursorEvents
  reset: () => void
}

const useStore = create<State>((set, get) => ({
  type: CursorType.default,
  visible: false,
  toggleVisibility: () => set({ visible: !get().visible }),
  setCursor: (type) => set({ type }),
  reset: () => {
    get().setCursor(CursorType.default)
  },
  events: {
    cursorEmail: {
      onMouseEnter: () => get().setCursor(CursorType.email),
      onMouseLeave: () => get().reset(),
    },
    cursorView: {
      onMouseEnter: () => get().setCursor(CursorType.view),
      onMouseLeave: () => get().reset(),
    },
  },
}))

export const useCursorStore = useStore
