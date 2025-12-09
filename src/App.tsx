import { Outlet } from "react-router";
import Nav from "./components/nav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
