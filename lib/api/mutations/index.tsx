import { formSchema as contactFormSchema } from "@/components/contact-form/ContactForm"
import { z } from "zod"
import { fetchWithErrorHandling } from ".."

type ContactFormData = z.infer<typeof contactFormSchema>

export async function submitContactForm(
  formData: ContactFormData,
  lang?: string
): Promise<{ message: string; success: boolean }> {
  // Validate the form data against the schema
  const validatedData = contactFormSchema.parse(formData)

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

/////////////

import { formSchema as registerFormSchema } from "@/components/register-form/RegisterForm"

type RegisterFormData = z.infer<typeof registerFormSchema>

export async function submitRegisterForm(
  formData: RegisterFormData,
  lang?: string
): Promise<{ message: string; success: boolean }> {
  // Validate the form data against the schema
  const validatedData = registerFormSchema.parse(formData)

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

  return fetchWithErrorHandling<{ message: string; success: boolean }>("register.php", {
    method: "POST",
    body: formDataToSend,
  })
}
