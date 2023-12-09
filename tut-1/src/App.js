import Profile from "./profile";
import Nav from "./Nav";
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider } from 'react-router-dom';

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Faq from "./Pages/Faq";
import Not from "./Pages/Error";
import Careers, { careerLoader } from "./Pages/Careers/Careers";  
import CareerDetails, { careerDetailsLoader } from "./Pages/Careers/CareerDetails"
import CareerError from "./Pages/Careers/CareerError";

import Layout from "./layouts/layout";
import HelpLayout from "./layouts/HelpLayout";
import CareerLayout from "./layouts/CareerLayout";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/About" element={<About />}/>

      <Route path="/help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="Contact" element={<Contact />}/>
      </Route>

      <Route path="careers" element={<CareerLayout />} errorElement={<CareerError/>}>
          <Route 
          index 
          element={<Careers/>}
          loader={careerLoader}
          
          />
          <Route
            path= ":id"
            element={<CareerDetails />}
            loader={careerDetailsLoader}
         
          />
      </Route>
      <Route path="*" element={<Not />} /> 
    </Route>

  )
)

function App(){

  return(
    <RouterProvider router={router} />
  );

  }
export default App;