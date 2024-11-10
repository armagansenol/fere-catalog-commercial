import { RegisterForm } from "@/components/auth/register-form"
import { Progress } from "../progress"

const steps = [
  { id: 1, name: "Paketler" },
  { id: 2, name: "Bilgiler" },
  { id: 3, name: "Ödeme" },
  { id: 4, name: "Tamamlandı" },
]

export default function Steps() {
  return (
    <>
      <Progress steps={steps} />
      <div className="max-w-lg">
        <RegisterForm />
      </div>
    </>
  )
}
