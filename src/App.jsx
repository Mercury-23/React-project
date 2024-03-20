import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";
// Layouts
import Header from "@/layouts/header";
// Pages
import Home from "@/pages/Home";
import NotFound from "@/pages/404";
import Accordion from "@/pages/accordion/accordion";
import RandomColor from "@/pages/RandomColor";
import StarRating from "@/pages/StarRating";
import ImageSlider from "@/pages/ImageSlider"

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <Header />
      <Routes>
        <Route path="React-Project">
          <Route index element={<Home />} />
          {/* Accordion component */}
          <Route path="accordion" element={<Accordion />} />
          {/* Random color generator */}
          <Route path="color-generator" element={<RandomColor />} />
          {/* Star Rating */}
          <Route path="star-rating" element={<StarRating />} />
          {/* image Slider */}
          <Route path='image-slider' element={<ImageSlider url={'https://meme-api.com/gimme'} limit={'10'} />} />

          {/* Error Page */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
