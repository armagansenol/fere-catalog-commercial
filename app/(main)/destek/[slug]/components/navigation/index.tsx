"use client"

import { ChevronRight } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLenisStore } from "@/lib/store/lenis"
import { TableOfContentEntry } from "@/types"

interface NavigationProps {
  items: TableOfContentEntry[]
}

export default function Navigation(props: NavigationProps) {
  const { items } = props
  const { lenis } = useLenisStore()

  return (
    <Card className="sticky top-10 max-w-xs">
      <CardHeader className="pt-0 px-0">
        <CardTitle className="text-lg font-mukta font-medium text-black">En çok merak edilenler</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <nav className="space-y-4">
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between text-12 font-mukta cursor-pointer"
                onClick={() => lenis?.scrollTo(`#scroll-${item.id}`)}
              >
                <span className="flex-grow">{item.question}</span>
                <ChevronRight className="shrink-0 h-4 w-4 text-muted-foreground" />
              </div>
            ))}
        </nav>
      </CardContent>
    </Card>
  )
}
