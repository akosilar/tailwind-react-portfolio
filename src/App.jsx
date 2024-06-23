import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Work from "./components/Work"
import jobs from "./data/jobs"
import { useEffect } from "react"

function App() {

  useEffect(() => {
    const updateList = () => {
      const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
        return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
      });

      document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));

      document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
    }

    updateList();
    window.addEventListener('scroll', updateList);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', updateList);
    };
  }, []);


  return (
    <>
      <Header />
      <Hero />
      <Work jobs={jobs} />
      <Footer />
    </>
  )
}

export default App
