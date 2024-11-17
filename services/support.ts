import apiClient from "@/lib/api"
import { useMutation } from "@tanstack/react-query"

interface SupportArticle {
  id: number
  image: {
    src: string
    alt: string
  }
  title: string
  description: string
  url: string
}

interface SupportSearchParams {
  keyword: string
  lang?: string
}

interface SupportSearchParams {
  keyword: string
  lang?: string
}

const getSupportArticles = async (params: SupportSearchParams): Promise<SupportArticle[]> => {
  try {
    const response = await apiClient.post<SupportArticle[]>("/support.php", {
      ...params,
    })
    return response.data
  } catch (error) {
    console.error("Error fetching support articles:", error)
    throw error
  }
}

export const useSupportSearch = () => {
  return useMutation<SupportArticle[], Error, SupportSearchParams>({
    mutationFn: getSupportArticles,
    onError: (error) => {
      console.error("Support search error:", error)
    },
  })
}

export const useSearchSupport = () => {
  const { mutateAsync, isPending, error, data } = useSupportSearch()

  const searchArticles = async (keyword: string, lang?: string) => {
    // if (!keyword.trim()) {
    //   throw new Error("Keyword is required for searching.")
    // }

    return await mutateAsync({ keyword, lang })
  }

  return {
    searchArticles,
    isSearching: isPending,
    error,
    data,
  }
}
