import s from "./form-subscribe.module.scss"

import { zodResolver } from "@hookform/resolvers/zod"
import cx from "clsx"
import { countries } from "countries-list"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/utility/button"
import { Checkbox } from "@/components/utility/checkbox"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/utility/form"
import { Input } from "@/components/utility/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/utility/select"
import { Textarea } from "@/components/utility/textarea"

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Ad soyad bilgisi giriniz.",
  }),
  email: z.string().email({
    message: "Geçerli bir e-posta adresi giriniz.",
  }),
  countryCode: z.string().min(1, {
    message: "Ülke kodu seçiniz.",
  }),
  phone: z.string().min(1, {
    message: "Company must be at least 2 characters.",
  }),
  company: z.string().min(1, {
    message: "Firma adı giriniz.",
  }),
  address: z.string().min(2, {
    message: "Adres bilgisi giriniz.",
  }),
  personalData: z
    .boolean({
      message: "Must be selected.",
    })
    .nullable(),
  taxOffice: z.string().min(2, {
    message: "Vergi dairesi bilgisi giriniz.",
  }),
  taxNumber: z.string().min(2, {
    message: "Vergi numarası bilgisi giriniz.",
  }),
})

export function FormSubscribe() {
  const countryData = Object.entries(countries)
    .map(([key, value]) => {
      return {
        code: key,
        name: value.name,
        phone: value.phone[0],
      }
    })
    .sort((a, b) => a.name.localeCompare(b.name))

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "",
      phone: "",
      company: "",
      address: "",
      personalData: "indeterminate",
      taxOffice: "",
      taxNumber: "",
    },
  })

  console.log("errors", form.formState.errors)
  console.log("cc", form.watch("countryCode"))

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("form submitted", data)
  }

  return (
    <Form {...form}>
      <form className={s.form} onSubmit={form.handleSubmit(onSubmit)}>
        <div className={cx(s.row)}>
          <div
            className={cx(s.fieldC, {
              [s.error]: form.formState.errors.name,
            })}
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className={s.formItem}>
                  <FormControl>
                    <Input className={s.input} placeholder="Ad Soyad*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div
            className={cx(s.fieldC, {
              [s.error]: form.formState.errors.email,
            })}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className={s.formItem}>
                  <FormControl>
                    <Input className={s.input} placeholder="E-posta*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className={s.row}>
          <div
            className={cx(s.fieldC, s.countryCodeSelect, {
              [s.error]: form.formState.errors.countryCode,
            })}
          >
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem className={s.formItem}>
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className={s.input}>
                        <SelectValue placeholder="Ülke kodu" />
                      </SelectTrigger>
                      <SelectContent
                        data-lenis-prevent
                        data-lenis-prevent-wheel
                        data-lenis-prevent-touch
                        className={s.countryCodeContent}
                      >
                        <SelectGroup>
                          {countryData.map((country, i) => {
                            return (
                              <SelectItem
                                className={s.countryCodeItem}
                                key={`${country.name}-${country.code}-${i}`}
                                value={`${country.code}`}
                              >
                                {`${country.name} (+${country.phone})`}
                              </SelectItem>
                            )
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div
            className={cx(s.fieldC, {
              [s.error]: form.formState.errors.phone,
            })}
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className={s.formItem}>
                  <FormControl>
                    <Input className={s.input} placeholder="Cep Telefonu*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className={cx(s.row, "flex")}>
          <div
            className={cx(s.fieldC, {
              [s.error]: form.formState.errors.company,
            })}
          >
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className={s.formItem}>
                  <FormControl>
                    <Input className={s.input} placeholder="Firma Adı*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className={cx(s.row, "flex")}>
          <div
            className={cx(s.fieldC, s.textarea, {
              [s.error]: form.formState.errors.address,
            })}
          >
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem className={s.formItem}>
                  <FormControl>
                    <Textarea className={s.input} placeholder="Adres*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className={cx(s.row, "flex")}>
          <div
            className={cx(s.fieldC, {
              [s.error]: form.formState.errors.taxOffice,
            })}
          >
            <FormField
              control={form.control}
              name="taxOffice"
              render={({ field }) => (
                <FormItem className={s.formItem}>
                  <FormControl>
                    <Input className={s.input} placeholder="Vergi Dairesi*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div
            className={cx(s.fieldC, {
              [s.error]: form.formState.errors.taxNumber,
            })}
          >
            <FormField
              control={form.control}
              name="taxNumber"
              render={({ field }) => (
                <FormItem className={s.formItem}>
                  <FormControl>
                    <Input className={s.input} placeholder="Vergi Numarası*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className={cx(s.row, "flex")}>
          <div
            className={cx(s.fieldC, s.checkbox, {
              [s.error]: form.formState.errors.personalData,
            })}
          >
            <FormField
              control={form.control}
              name="personalData"
              render={({ field }) => (
                <FormItem className={cx(s.formItem, "flex items-center justify-start")}>
                  <FormControl>
                    {/* <Textarea className={cx(s.input, s.textarea)} placeholder="Adres*" {...field} /> */}
                    <Checkbox
                      className={s.box}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      id="personalData"
                    />
                  </FormControl>
                  <label className={s.label} htmlFor="personalData">
                    Use different settings for my mobile devices
                  </label>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button className={s.submitBtn} type="submit">
          <span>Gönder</span>
        </Button>
      </form>
    </Form>
  )
}
