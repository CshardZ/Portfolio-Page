import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import Main from "@/components/Main"


export default function PortfolioPage() {
  return (
    <main id='portfolio-page' className="bg-blue-400">
        <Header />
        <Sidebar />
        <Main />
        <Footer />
    </main>
  )
}
