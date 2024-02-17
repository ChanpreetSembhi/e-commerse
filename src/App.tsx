import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
// 404 Error page
import Error from "./pages/404";
import Footer from "./component/Footer";
import WomenProducts from "./pages/WomenProducts";

function App() {
  return (
    <>
      <NavBar />
      <main className="max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/women" element={<WomenProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
