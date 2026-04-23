/** Número internacional sem símbolos: 55 + DDD + número */
export const WHATSAPP_E164 = "5519997285485";

const defaultMessage =
  "Olá! Vim pelo site e gostaria de falar sobre os serviços de tecnologia.";

export const whatsappHref = (message: string = defaultMessage) =>
  `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
