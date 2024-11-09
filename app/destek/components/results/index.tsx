import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export type SearchResult = {
  id: number
  title: string
  description: string
}

export async function searchAPI(query: string): Promise<SearchResult[]> {
  // In a real application, this would be an actual API call
  // For demonstration, we're using a mock that works both client and server-side
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    { id: 1, title: `Result 1 for "${query}"`, description: "This is a description for result 1" },
    { id: 2, title: `Result 2 for "${query}"`, description: "This is a description for result 2" },
    { id: 3, title: `Result 3 for "${query}"`, description: "This is a description for result 3" },
  ]
}

export default function Results({ results, query }: { results: SearchResult[]; query: string }) {
  if (results.length === 0 && query) {
    return <p className="mt-4">`No results found for ${query}.`</p>
  }

  if (results.length === 0) {
    return null
  }

  return (
    <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {results.map((result) => (
        <Card key={result.id}>
          <CardHeader>
            <CardTitle>{result.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{result.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
