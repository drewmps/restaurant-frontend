import { BrowserRouter, Route, Routes } from "react-router";
import DetailProduct from "./pages/DetailProduct";
import PublicLayout from "./layouts/PublicLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route path="/cuisines/:id" element={<DetailProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
