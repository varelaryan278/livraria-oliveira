export type Category = {
  id: string
  title: string
  description: string
}

export type Product = {
  id: string
  title: string
  author: string
  category: string
  price: number
  badge?: string
}

export type Testimonial = {
  name: string
  city: string
  text: string
}

export const categories: Category[] = [
  { id: "cat-biblias", title: "Bíblias", description: "Estudo, leitura diária, letra gigante e edições para presente." },
  { id: "cat-devocionais", title: "Devocionais", description: "Leituras para começar o dia na presença de Deus." },
  { id: "cat-teologia", title: "Teologia", description: "Obras sólidas para aprofundar a fé e a doutrina." },
  { id: "cat-vida-crista", title: "Vida cristã", description: "Família, casamento, oração e discipulado." },
  { id: "cat-infantil", title: "Infantil", description: "Histórias bíblicas para formar os pequenos na fé." },
  { id: "cat-presentes", title: "Presentes", description: "Kits e edições especiais para abençoar alguém." },
]

export const products: Product[] = [
  { id: "produto-1", title: "Bíblia de Estudo", author: "Edição capa luxo", category: "Bíblias", price: 189.9, badge: "Mais procurada" },
  { id: "produto-2", title: "Bíblia Letra Gigante", author: "Capa dura", category: "Bíblias", price: 129.9 },
  { id: "produto-3", title: "Devocional Diário", author: "365 meditações", category: "Devocionais", price: 59.9, badge: "Novidade" },
  { id: "produto-4", title: "Clássico da Fé Cristã", author: "Edição comentada", category: "Teologia", price: 74.9 },
  { id: "produto-5", title: "Casamento Segundo Deus", author: "Vida cristã", category: "Vida cristã", price: 49.9 },
  { id: "produto-6", title: "Minha Primeira Bíblia", author: "Ilustrada", category: "Infantil", price: 69.9 },
  { id: "produto-7", title: "Diário de Oração", author: "Capa tecido", category: "Presentes", price: 44.9 },
  { id: "produto-8", title: "Kit Presente Fé", author: "Bíblia + devocional", category: "Presentes", price: 229.9, badge: "Para presentear" },
]

export const testimonials: Testimonial[] = []

export const faqs = [
  {
    q: "Vocês enviam para todo o Brasil?",
    a: "Sim. Enviamos para qualquer cidade do país. O frete é calculado pelo CEP no atendimento do WhatsApp.",
  },
  {
    q: "Como faço meu pedido?",
    a: "Escolha o livro, toque em “Comprar pelo WhatsApp” e confirme com nossa equipe: disponibilidade, frete e forma de pagamento.",
  },
  {
    q: "Quais formas de pagamento aceitam?",
    a: "Pix, cartão de crédito e boleto. Confirmamos todas as opções no momento do pedido.",
  },
  {
    q: "Não encontrei o livro que procuro. E agora?",
    a: "Fale com a gente. Trabalhamos com diversas editoras cristãs e buscamos o título para você.",
  },
  {
    q: "Posso pedir para presente?",
    a: "Pode. Enviamos com cuidado e, se quiser, incluímos um cartão com a sua mensagem.",
  },
]

export const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
