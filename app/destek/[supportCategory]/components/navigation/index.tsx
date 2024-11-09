"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLenisStore } from "@/lib/store/lenis"
import { SideNavigationProps } from "@/types"
import { ChevronRight } from "lucide-react"

export default function Navigation(props: SideNavigationProps) {
  const { title, items } = props
  const { lenis } = useLenisStore()

  return (
    <Card className="sticky top-10 max-w-xs">
      <CardHeader className="pt-0">
        <CardTitle className="text-18 font-mukta font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <nav className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between px-3 text-12 font-mukta cursor-pointer"
              onClick={() => lenis?.scrollTo(`#scroll-${item.id}`)}
            >
              <span className="flex-grow">{item.title}</span>
              <ChevronRight className="shrink-0 h-4 w-4 text-muted-foreground" />
            </div>
          ))}
        </nav>
      </CardContent>
    </Card>
  )
}
