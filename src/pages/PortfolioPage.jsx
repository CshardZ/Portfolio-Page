import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import Main from "@/components/Main"


export default function PortfolioPage() {
  return (
    <article id='portfolio-page' 
      className="
        w-full h-full px-32 py-6 bg-[#fafcfa]
        grid grid-rows-[auto_1fr_auto]
      "
    >
      <Header />
    
      <section 
        className="
          w-full bg-red-300
          grid grid-cols-[auto_1fr]
        "
      >
        <Sidebar />
        <Main />
      </section>
    
      <Footer />
    </article>
  )
}
