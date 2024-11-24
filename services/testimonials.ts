"use server"

import apiClient from "@/lib/api/axios"
import { Testimonial } from "@/types"

export async function getTestimonials(lang?: string) {
  try {
    const response = await apiClient.post<Testimonial[]>("/comment.php", lang ? { lang } : undefined)
    return response.data
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    throw new Error("Failed to fetch testimonials")
  }
}
