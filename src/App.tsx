import {Routes,Route} from "react-router-dom";
import { Home } from "./pages/home";
import { Jobs } from "./pages/jobs";
import { Education } from "./pages/education";
import { Projects } from "./pages/projects";
import { ContactPage } from "./pages/contact";

import { Navbar } from "./components/navbar";

function App() {


  return (
    <>
    <Navbar>
    </Navbar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/jobs" element={<Jobs/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<ContactPage/>}/>
    </Routes>
    </>
  )
}

export default App
