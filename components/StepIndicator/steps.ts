import React, { JSX } from "react";
import Hero from "../hero";
import ProductCalculator from "../product-calculator";
import Pricing from "../pricing";
import TechnicalGuide from "../technical-guide";
import ContactForm from "../contact-form";
import PaymentForm from "../PaymentForm/payment-form";

type Step = {
  id: number;
  title: string;
  component: (props?: any) => JSX.Element | null;
};

const STEPS: Step[] = [
  { id: 1, title: "Informações do Produto", component: Hero },
  { id: 2, title: "Cálculo de Dosagem", component: ProductCalculator },
  { id: 3, title: "Finalizar Compra", component: ContactForm },
  { id: 4, title: "Forma de Pagamento", component: PaymentForm }
];

export default STEPS;