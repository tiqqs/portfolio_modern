
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import { Toaster } from "./components/ui/toaster";
import { AnimationProvider } from "./context/AnimationContext";

function App() {
  return (
    <AnimationProvider>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </AnimationProvider>
  );
}

export default App;
