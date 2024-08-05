import Footer from "./components/Footer";
import Button from "./components/Button";
import Contact from "./components/Contact";
import SectionTitle from "./components/SectionTitle";
import SkillBox from "./components/SkillBox";
import DarkModeSwitch from "./components/DarkModeSwitch";

function App() {
  return (
    <div className="min-h-screen">
      <Button />
      <Contact />
      <SectionTitle title="ABOUT ME" desc="Who am I?" />
      <SkillBox />
      <Footer />
      <DarkModeSwitch />
    </div>
  );
}

export default App;
