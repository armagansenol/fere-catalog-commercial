"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"

import { IconLoading } from "@/components/icons"
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
import { useRouter } from "next/navigation"

export const formSchema = z
  .object({
    name: z.string().min(1, { message: "Ad boş bırakılamaz" }),
    surname: z.string().min(1, { message: "Soyad boş bırakılamaz" }),
    email: z.string().email({ message: "Geçerli bir e-posta adresi giriniz" }),
    countryCode: z.string().min(1, { message: "Ülke kodu seçiniz" }),
    phoneNumber: z.string().min(1, { message: "Geçerli bir telefon numarası giriniz" }),
    companyName: z.string().min(1, { message: "Firma ismi boş bırakılamaz" }),
    address: z.string().min(1, { message: "Adres boş bırakılamaz" }),
    city: z.string().min(1, { message: "Şehir boş bırakılamaz" }),
    country: z.string().min(1, { message: "Ülke boş bırakılamaz" }),
    sector: z.string().min(1, { message: "Sektör boş bırakılamaz" }),
    sectorOther: z.string().optional(),
    whereDidYouHear: z.string().min(1, { message: "Bu alan boş bırakılamaz" }),
    whereDidYouHearOther: z.string().optional(),
    taxOffice: z.string().min(1, { message: "Vergi dairesi boş bırakılamaz" }),
    taxNumber: z.string().min(1, { message: "Vergi numarası boş bırakılamaz" }),
    planId: z.string().min(1, { message: "Plan seçiniz." }),
    consent: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.sector === "other" && (!data.sectorOther || data.sectorOther.trim() === "")) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Diğer sektör belirtilmelidir",
        path: ["sectorOther"],
      })
    }

    if (data.whereDidYouHear === "other" && (!data.whereDidYouHearOther || data.whereDidYouHearOther.trim() === "")) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Diğer sektör belirtilmelidir",
        path: ["whereDidYouHearOther"],
      })
    }

    if (!data.consent) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "KVKK Onayı gereklidir",
        path: ["consent"],
      })
    }
  })

type FormValues = z.infer<typeof formSchema>

interface RegisterFormProps {
  planId: string
}

export default function RegisterForm(props: RegisterFormProps) {
  const [showMessage, setShowMessage] = useState(false)

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
      planId: props.planId,
      consent: false,
    },
  })

  const router = useRouter()

  const mutation = useMutation({
    mutationFn: submitRegisterForm,
    onSuccess: (response) => {
      if (response.success) {
        router.push("/tesekkurler")
        form.reset()
      }
    },
    onError: (error) => {
      console.error("Form submission error:", error)
    },
  })

  useEffect(() => {
    if (mutation.isSuccess || mutation.isError) {
      setShowMessage(true)
      const timer = setTimeout(() => {
        setShowMessage(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [mutation.isSuccess, mutation.isError])

  const onSubmit = (data: FormValues) => {
    let newData

    if (data.sector === "other") {
      newData = {
        ...data,
        sector: data.sectorOther,
      }
    } else {
      newData = { ...data }
    }

    delete (newData as Partial<FormValues>).sectorOther

    mutation.mutate(newData as FormValues)
  }

  const sector = form.watch("sector")
  const whereDidYouHear = form.watch("whereDidYouHear")

  return (
    <FormProvider {...form}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-stretch gap-3">
          <div className="flex flex-col tablet:flex-row gap-3">
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
                      {countryPhoneCodes.map((code) => (
                        <SelectItem key={`${code.code}-${code.name}`} value={code.code}>
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
                      sectors.map((item) => (
                        <SelectItem key={item.id} value={item.name}>
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
          {sector === "other" && (
            <FormField
              control={form.control}
              name="sectorOther"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Diğer sektör" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <div className="flex gap-3">
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
                      channels.map((item) => {
                        console.log("item", item)
                        return (
                          <SelectItem key={item.id} value={item.name}>
                            {item.name}
                          </SelectItem>
                        )
                      })}
                    <SelectItem value="other">Diğer</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {whereDidYouHear === "other" && (
            <FormField
              control={form.control}
              name="whereDidYouHearOther"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input placeholder="Diğer bizi nereden duydunuz" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem>
                <div className="flex flex-row items-start gap-3 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className="text-12 font-mukta font-light leading-tight text-muted-foreground">
                    Kişisel verilerimin işlenmesi ve tarafıma SMS, e-posta veya telefon yoluyla kampanya, duyuru ve
                    bilgilendirme yapılması amacıyla iletişime geçilmesine Açık Rıza Metni ve KVKK Aydınlatma Metni
                    kapsamında onay veriyorum.
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="mt-12 w-72 mx-auto tablet:mx-0"
            type="submit"
            size="md"
            padding="fat"
            // disabled={mutation.isPending || !isFormValid}
          >
            {mutation.isPending ? <IconLoading /> : "Gönder"}
          </Button>
          {showMessage && mutation.isSuccess && <p className="text-green-500">{mutation.data.message}</p>}
          {showMessage && mutation.isError && <p className="text-red-500">Bir hata oluştu. Lütfen tekrar deneyin.</p>}
        </form>
      </Form>
    </FormProvider>
  )
}
