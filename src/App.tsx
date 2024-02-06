import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
// 404 Error page
import Error from "./pages/404";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main className="xl:max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
