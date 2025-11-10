import { Banknote, Landmark, CreditCard } from "lucide-react";
import { CreditCardForm } from "./credit-form";
import { JSX } from "react";
import { BoletoForm } from "./boleto-form";
import { PixForm } from "./pix-form";

interface PaymenteFormData {
  id: string;
  label: string;
  description: string;
  icon: React.ElementType;
  component: (props?: any) => JSX.Element | null;
  highlight?: boolean;
}

export const paymentOptions: PaymenteFormData[] = [
  {
    id: "boleto",
    label: "Boleto Bancário (À Vista)",
    description: "Pagamento imediato. Confirmação em até 2 dias úteis.",
    icon: Banknote,
    component: BoletoForm
  },
  {
    id: "pix",
    label: "PIX",
    description: "Pagamento instantâneo. Confirmação imediata.",
    icon: Landmark,
    component: PixForm
  },
  {
    id: "cartao",
    label: "Cartão de Crédito (Em até 12x)",
    description: "Parcelamento com juros. Aceitamos todas as bandeiras.",
    icon: CreditCard,
    component: CreditCardForm,
    highlight: true,
  },
]