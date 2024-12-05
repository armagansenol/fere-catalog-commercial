"use server"

import apiClient from "@/lib/api/axios"
import { Sector } from "@/types"

export async function getChannels(lang?: string) {
  try {
    const response = await apiClient.post<Sector[]>("/channels.php", lang ? { lang } : undefined)
    return response.data
  } catch (error) {
    console.error("Error fetching sectors:", error)
    throw new Error("Failed to fetch sectors")
  }
}
