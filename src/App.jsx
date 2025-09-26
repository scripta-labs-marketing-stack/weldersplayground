import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import CookieBanner from "@/components/CookieBanner"

function App() {
  return (
    <>
      <Pages />
      <Toaster />
      <CookieBanner />
    </>
  )
}

export default App 