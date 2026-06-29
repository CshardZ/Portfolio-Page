import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import Main from "@/components/Main"


export default function PortfolioPage() {
  return (
    <article id='portfolio-page' 
      className="
        w-full h-full bg-[#F1F1F0]
        grid grid-rows-[auto_1fr_auto]
        shadow-lg
      "
    > 
    {/* // shadow-[0_0_12px_rgba(0,0,0,0.2)] */}
      <Header />
    
      <section  
        className="
          w-full
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
