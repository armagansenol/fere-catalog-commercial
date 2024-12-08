"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import debounce from "lodash/debounce"
import { Search } from "lucide-react"
import { useEffect, useMemo } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const searchSchema = z.object({
  query: z.string().max(100, "Search query is too long"),
})

type SearchFormValues = z.infer<typeof searchSchema>

interface SearchbarProps {
  initialQuery?: string
  onSearch: (query: string) => void
}

export default function Searchbar({ initialQuery = "", onSearch }: SearchbarProps) {
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: initialQuery,
    },
  })

  // Use useMemo to create the debounced function and track dependencies correctly
  const debouncedSearch = useMemo(
    () =>
      debounce((query: string) => {
        onSearch(query)
      }, 300),
    [onSearch]
  )

  // Trigger search for the initial query on mount
  useEffect(() => {
    if (initialQuery) {
      debouncedSearch(initialQuery)
    }
    // Cleanup debounce when component unmounts
    return () => {
      debouncedSearch.cancel()
    }
  }, [initialQuery, debouncedSearch])

  // Watch form changes and trigger debounced search
  useEffect(() => {
    const subscription = form.watch((value, { name }) => {
      if (name === "query") {
        debouncedSearch(value.query as string)
      }
    })
    return () => subscription.unsubscribe()
  }, [form, debouncedSearch])

  return (
    <Form {...form}>
      <form className="w-full tablet:w-96">
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Arama" className="pl-10 rounded-full w-full" {...field} />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
