//Import del Context definito in BudgetContext.jsx
import BudgetContext from "./contexts/BudgetContext";

//Import dello stato budgetMode
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUS";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [budgetMode, setBudgetMode] = useState(false);
  return (
    <>
      <BudgetContext.Provider
        value={{
          budgetMode,
          setBudgetMode,
        }}
      >
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
      </BudgetContext.Provider>
    </>
  );
}

export default App;
