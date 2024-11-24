import { formSchema } from "@/components/contact-form/ContactForm"
import { z } from "zod"
import { fetchWithErrorHandling } from ".."

type FormData = z.infer<typeof formSchema>

export async function submitContactForm(
  formData: FormData,
  lang?: string
): Promise<{ message: string; success: boolean }> {
  // Validate the form data against the schema
  const validatedData = formSchema.parse(formData)

  // Create a new FormData object
  const formDataToSend = new FormData()

  // Add all validated fields to the FormData
  Object.entries(validatedData).forEach(([key, value]) => {
    formDataToSend.append(key, value as string)
  })

  // Add the lang parameter if provided
  if (lang) {
    formDataToSend.append("lang", lang)
  }

  return fetchWithErrorHandling<{ message: string; success: boolean }>("contact.php", {
    method: "POST",
    body: formDataToSend,
  })
}
