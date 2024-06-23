import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Work from "./components/Work"

function App() {

  const job = {
    "companyName": "CCL Technologies",
    "skills": ["Active Directory", "Group Policy", "SCCM", "Microsoft 365", "SIS Management", "IBM Cognos", "JAMF", "Microsoft Intune"],
    "desc": "lorem ipsum"
  }

  return (
    <>
      <Header />
      <Hero />
      <Work job={job} />
      <Footer />
    </>
  )
}

export default App
