"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/services/contact-form"
import { getSectors } from "@/services/form-field-sector"
import { Sector } from "@/types"

const countryCodes = [
  { value: "+1", label: "United States (+1)" },
  { value: "+44", label: "United Kingdom (+44)" },
  { value: "+91", label: "India (+91)" },
  { value: "+81", label: "Japan (+81)" },
  { value: "+86", label: "China (+86)" },
  { value: "+49", label: "Germany (+49)" },
  { value: "+33", label: "France (+33)" },
  { value: "+7", label: "Russia (+7)" },
  { value: "+55", label: "Brazil (+55)" },
  { value: "+61", label: "Australia (+61)" },
]

export const formSchema = z.object({
  name: z.string().min(1, { message: "Ad Soyad gereklidir" }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz" }),
  countryCode: z.string().min(1, { message: "Ülke kodu seçiniz" }),
  phone: z.string().min(1, { message: "Geçerli bir telefon numarası giriniz" }),
  message: z.string().min(1, { message: "Mesaj gereklidir" }),
  sector: z.string().min(1, { message: "Sektör gereklidir" }),
  consent: z.boolean().refine((val) => val === true, { message: "Onay gereklidir" }),
})

type FormData = z.infer<typeof formSchema>

export default function ContactForm() {
  const { data: sectors } = useQuery<Sector[], Error>({
    queryKey: ["sectors"],
    queryFn: () => getSectors(),
  })

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "",
      phone: "",
      sector: "",
      message: "",
      consent: false,
    },
  })

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      form.reset()
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const onSubmit = (data: FormData) => {
    console.log("form data", data)

    mutation.mutate(data)
  }

  // useEffect(() => {
  //   console.log(form.getValues())
  // }, [form.getValues()])

  const isFormValid = form.formState.isValid

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-3">
            <div className="flex space-x-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="Ad Soyad *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input placeholder="E-posta *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="sector"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select sector" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent data-lenis-prevent className="shadcn-select">
                        {sectors &&
                          sectors.length > 0 &&
                          sectors.map((item) => (
                            <SelectItem key={item.id} value={item.id}>
                              {item.name}
                            </SelectItem>
                          ))}
                        <SelectItem value={"diğer"} onClick={(e) => e.preventDefault()}>
                          <Input placeholder="diğer" />
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country code" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent data-lenis-prevent className="shadcn-select">
                        {countryCodes.map((code) => (
                          <SelectItem key={code.value} value={code.value}>
                            {code.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="flex-1 ml-2">
                    <FormControl>
                      <Input placeholder="Cep Telefonu *" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea placeholder="Mesaj*" className="h-32" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-12 font-mukta font-light">
                      Kişisel verilerimin işlenmesine ilişkin aydınlatma metnini okudum. Onaylıyorum.
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <Button className="mt-12" type="submit" size="lg" disabled={mutation.isPending || !isFormValid}>
            {mutation.isPending ? "Gönderiliyor..." : "Gönder"}
          </Button>
          {mutation.isSuccess && <p className="text-green-500">Mesajınız başarıyla gönderildi!</p>}
          {mutation.isError && <p className="text-red-500">Bir hata oluştu. Lütfen tekrar deneyin.</p>}
        </form>
      </Form>
    </FormProvider>
  )
}
