import { Route, Routes } from "react-router-dom";

import NavBar from "./components/navBar";
import Footer from "./components/footer";
import CategoriesRouting from "./pages/CategoriesRouting";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route exact path="*" element={ <CategoriesRouting />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
