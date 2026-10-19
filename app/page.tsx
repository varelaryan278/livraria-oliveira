import { Header } from "@/components/site/header"
import { Hero } from "@/components/site/hero"
import { TrustBar } from "@/components/site/trust-bar"
import { Categories } from "@/components/site/categories"
import { Products } from "@/components/site/products"
import { About } from "@/components/site/about"
import { Testimonials } from "@/components/site/testimonials"
import { Instagram } from "@/components/site/instagram"
import { Faq } from "@/components/site/faq"
import { FinalCta } from "@/components/site/final-cta"
import { Footer } from "@/components/site/footer"
import { WhatsAppFloat } from "@/components/site/whatsapp-float"

const Home = () => (
  <>
    <Header />
    <main className="flex-1">
      <Hero />
      <TrustBar />
      <Categories />
      <Products />
      <About />
      <Testimonials />
      <Instagram />
      <Faq />
      <FinalCta />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
)

export default Home
