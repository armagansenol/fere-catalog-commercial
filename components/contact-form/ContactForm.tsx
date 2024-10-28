"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const schema = z.object({
  name: z.string().min(1, { message: "Ad Soyad gereklidir" }),
  email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz" }),
  phone: z.string().min(10, { message: "Geçerli bir telefon numarası giriniz" }),
  message: z.string().min(1, { message: "Mesaj gereklidir" }),
  consent: z.boolean().refine((val) => val === true, { message: "Onay gereklidir" }),
})

type FormData = z.infer<typeof schema>

const countryCodes = ["+90", "+1", "+44", "+49"] // Add more as needed

export default function ContactForm() {
  const [countryCode, setCountryCode] = useState("+90")
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
    },
  })

  const mutation = useMutation({
    mutationFn: (data: FormData) => {
      return axios.post("/api/contact", data)
    },
  })

  const onSubmit = (data: FormData) => {
    mutation.mutate(data)
  }

  return (
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

          <div className="flex">
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Kod" />
              </SelectTrigger>
              <SelectContent>
                {countryCodes.map((code) => (
                  <SelectItem key={code} value={code}>
                    {code}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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

        <Button
          type="submit"
          className="w-80 bg-quarterdeck rounded-full h-16 text-18 mt-12"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Gönderiliyor..." : "Gönder"}
        </Button>

        {mutation.isSuccess && <p className="text-green-500">Mesajınız başarıyla gönderildi!</p>}

        {mutation.isError && <p className="text-red-500">Bir hata oluştu. Lütfen tekrar deneyin.</p>}
      </form>
    </Form>
  )
}
