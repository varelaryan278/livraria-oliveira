export const site = {
  name: "Oliveira Livraria Cristã",
  shortName: "Oliveira",
  tagline: "Bíblias, livros e literatura cristã",
  description:
    "Bíblias, livros e literatura cristã com curadoria fiel às Escrituras. Atendimento pessoal pelo WhatsApp e envio para todo o Brasil.",
  whatsapp: "5500000000000",
  whatsappDisplay: "(00) 00000-0000",
  instagram: "https://www.instagram.com/oliveira_livraria_crista/",
  instagramHandle: "@oliveira_livraria_crista",
  email: "contato@oliveiralivraria.com.br",
  city: "Sua cidade — UF",
  hours: "Seg a Sáb · 9h às 18h",
}

export const waLink = (message = "Olá! Vim pelo site e gostaria de atendimento.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
