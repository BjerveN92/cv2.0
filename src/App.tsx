import {Routes,Route} from "react-router-dom";
import { Home } from "./pages/home";
import { Jobs } from "./pages/jobs";
import { Education } from "./pages/education";
import { Projects } from "./pages/projects";
import { ContactPage } from "./pages/contact";

import { Navbar } from "./components/navbar";
import { ProfilePicture } from "./components/profilePic";
import { Title } from "./components/title";

function App() {


  return (
    <>
    <Title>
    </Title>
    <Navbar>
    </Navbar>
    <ProfilePicture>
    </ProfilePicture>
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
