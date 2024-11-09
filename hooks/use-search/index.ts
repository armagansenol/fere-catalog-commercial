import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { z } from "zod"

// Define the search result type
export type SearchResult = {
  id: number
  title: string
  description: string
}

// Define the search schema
export const searchSchema = z.object({
  query: z.string().min(1, "Search query is required").max(100, "Search query is too long"),
})

// Infer the search form type from the schema
export type SearchFormValues = z.infer<typeof searchSchema>

// Mock API function (replace with actual API call)
const searchAPI = async (query: string): Promise<SearchResult[]> => {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock results
  return [
    { id: 1, title: `Result 1 for "${query}"`, description: "This is a description for result 1" },
    { id: 2, title: `Result 2 for "${query}"`, description: "This is a description for result 2" },
    { id: 3, title: `Result 3 for "${query}"`, description: "This is a description for result 3" },
  ]
}

export function useSearch() {
  const [searchQuery, setSearchQuery] = useState<string>("")

  const {
    data: searchResults,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["search", searchQuery],
    queryFn: () => searchAPI(searchQuery),
    enabled: !!searchQuery,
  })

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  return {
    searchQuery,
    searchResults,
    isLoading,
    isError,
    handleSearch,
  }
}
