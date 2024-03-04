import { ThemeProvider } from "@/components/theme-provider"
import { Route, Routes } from "react-router-dom"
// Layouts
import Header from "@/layouts/header"
// Pages
import Home from "@/pages/Home"
import NotFound from '@/pages/404'

function App() {

  return(
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Header />
      <Routes>
        <Route path='React-Project'>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}

export default App
