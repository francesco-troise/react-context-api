import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/Homepage";
import AboutUs from "./pages/AboutUS";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/AboutUS" element={<AboutUs />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            {/*Percorso dinamico*/}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
