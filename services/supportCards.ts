"use server"

import apiClient from "@/lib/api/axios"
import { SupportArticle } from "@/types"

export async function getSupportCards(lang?: string) {
  try {
    const response = await apiClient.get<SupportArticle[]>("/supportCards.php", {
      params: {
        lang,
      },
    })
    return response.data
  } catch (error) {
    console.error("Error fetching support cards:", error)
    throw new Error("Failed to fetch cards")
  }
}
