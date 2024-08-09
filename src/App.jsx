import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SideSocials from "./components/SideSocials";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Header />
        <Main />
        <Footer />
        <SideSocials />
      </div>
    </ThemeProvider>
  );
}

export default App;
