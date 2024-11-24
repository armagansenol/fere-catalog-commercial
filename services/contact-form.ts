import { formSchema } from "@/components/contact-form/ContactForm"
import apiClient from "@/lib/api/axios"
import { z } from "zod"

type FormData = z.infer<typeof formSchema>

export const submitContactForm = async (data: FormData, lang?: string) => {
  const response = await apiClient.post<{ message: string; success: string }>(
    "/contact.php",
    lang ? { lang } : undefined
  )
  return response
}
