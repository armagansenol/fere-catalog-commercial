"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { FormProvider, useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { submitRegisterForm } from "@/lib/api/mutations"
import { countryPhoneCodes } from "@/lib/constants"
import { getChannels } from "@/services/form-field-channels"
import { getSectors } from "@/services/form-field-sector"
import { Sector } from "@/types"

export const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  surname: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Name is required" }),
  countryCode: z.string().min(1, { message: "Ülke kodu seçiniz" }),
  phoneNumber: z.string().min(1, { message: "Name is required" }),
  companyName: z.string().min(1, { message: "Name is required" }),
  address: z.string().min(1, { message: "Name is required" }),
  city: z.string().min(1, { message: "Name is required" }),
  country: z.string().min(1, { message: "Name is required" }),
  sector: z.string().min(1, { message: "Sektör gereklidir" }),
  whereDidYouHear: z.string(),
  taxOffice: z.string().min(1, { message: "Name is required" }),
  taxNumber: z.string().min(1, { message: "Name is required" }),
  consent: z.boolean().refine((val) => val === true, "You must accept the terms"),
})

type FormValues = z.infer<typeof formSchema>

export default function FormClient() {
  // const [otherSector, setOtherSector] = useState(false)
  // const [otherHeard, setOtherHeard] = useState(false)

  const { data: channels } = useQuery<Sector[], Error>({
    queryKey: ["channels"],
    queryFn: () => getChannels(),
  })

  const { data: sectors } = useQuery<Sector[], Error>({
    queryKey: ["sectors"],
    queryFn: () => getSectors(),
  })

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      companyName: "",
      address: "",
      city: "",
      sector: "",
      country: "",
      whereDidYouHear: "",
      taxOffice: "",
      taxNumber: "",
      consent: false,
    },
  })

  const mutation = useMutation({
    mutationFn: submitRegisterForm,
    onSuccess: () => {
      form.reset()
    },
    onError: (error) => {
      console.error("Form submission error:", error)
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log("form data", data)
    mutation.mutate(data)
  }

  const isFormValid = form.formState.isValid

  useEffect(() => {
    console.log("fff", form.getValues())
  }, [form])

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-stretch gap-3">
          <div className="flex gap-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Ad*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="surname"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Soyad*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input type="email" placeholder="E-posta*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-3">
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Ülke kodu" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent data-lenis-prevent className="shadcn-select">
                      {countryPhoneCodes.map((code, i) => (
                        <SelectItem key={i} value={code.code}>
                          {code.name} - {code.code}
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
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="flex-1">
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
            name="companyName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Firma Adı *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="sector"
            render={({ field }) => (
              <FormItem className="flex-1">
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Sektör seçin" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent data-lenis-prevent className="shadcn-select">
                    {sectors &&
                      sectors.length > 0 &&
                      sectors.map((item, i) => (
                        <SelectItem key={i} value={item.name}>
                          {item.name}
                        </SelectItem>
                      ))}
                    <SelectItem value="other">Diğer</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <FormField
              control={form.control}
              name="taxOffice"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Vergi Dairesi*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="taxNumber"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Vergi No*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-3">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Şehir*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Ülke*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Textarea placeholder="Adres*" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="whereDidYouHear"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Bizi nereden duydunuz" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent data-lenis-prevent className="shadcn-select">
                    {channels &&
                      channels.length > 0 &&
                      channels.map((item, i) => (
                        <SelectItem key={i} value={item.name}>
                          {item.name}
                        </SelectItem>
                      ))}
                    <SelectItem value="other">Diğer</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* {form.getValues("whereDidYouHear") && (
          <FormField
            control={form.control}
            name="whereDidYouHearOther"
            render={({ field }) => (
              <FormItem>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Bizi nereden duydunuz" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent data-lenis-prevent className="shadcn-select">
                    {whereDidYouHear &&
                      whereDidYouHear.length > 0 &&
                      whereDidYouHear.map((item, i) => (
                        <SelectItem key={i} value={item.name}>
                          {item.name}
                        </SelectItem>
                      ))}
                    <SelectItem value="other">Diğer</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )} */}
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
                    Kişisel verilerimin işlenmesi ve tarafıma SMS, e-posta veya telefon yoluyla kampanya, duyuru ve
                    bilgilendirme yapılması amacıyla iletişime geçilmesine Açık Rıza Metni ve KVKK Aydınlatma Metni
                    kapsamında onay veriyorum.
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Button className="mt-12" type="submit" size="md" padding="fat" disabled={mutation.isPending || !isFormValid}>
            {mutation.isPending ? "Gönderiliyor..." : "Gönder"}
          </Button>
          {mutation.isSuccess && <p className="text-green-500">{mutation.data.message}</p>}
          {mutation.isError && <p className="text-red-500">Bir hata oluştu. Lütfen tekrar deneyin.</p>}
        </form>
      </Form>
    </FormProvider>
  )
}
