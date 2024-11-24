"use server"

import { MainSliderProps, Testimonial } from "@/types"
import { fetchWithErrorHandling } from ".."

export async function getMainSlider(): Promise<MainSliderProps[]> {
  return fetchWithErrorHandling<MainSliderProps[]>(`banner.php`, {
    next: { revalidate: 0 },
  })
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return fetchWithErrorHandling<Testimonial[]>(`comment.php`)
}
