import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Results  from "./Results";
import Breeds from "./Breeds";
import Favorites from "./Favorites";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  }
})

const App = () => {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
 <header>
  <Link to="/">Cat App</Link>
  <Link to="/favorites"> Favorites </Link>
  <Link to="/breeds"> Breeds </Link>
 </header>
  <Routes>
    <Route path="/" element={<Results />} />
    <Route path="/breeds" element={<Breeds />} />
    <Route path="/favorites" element={<Favorites />} />
  </Routes>
    </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

