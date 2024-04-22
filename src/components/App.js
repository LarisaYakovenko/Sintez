import {  Route, Routes } from 'react-router-dom';
import './App.css';
import  {Layout}  from './Layout/Layout.jsx';
// import Home from '../pages/Home/Home.jsx';
// import Services from '../pages/Services/Services.jsx';
// import Timetable from '../pages/Timetable/Timetable.jsx';
// import Contact from '../pages/Contact/Contact.jsx';
import { lazy } from 'react';


const Home = lazy(() => import('../pages/Home/Home.jsx'))
const Services = lazy(() => import('../pages/Services/Services.jsx'))

const Timetable = lazy(() => import('../pages/Timetable/Timetable.jsx'))
const Contact = lazy(() => import('../pages/Contact/Contact.jsx'))

function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="services" element={<Services />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="contacts" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>



  );
}

export default App;



// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route path="services" element={<Services />} />
//         <Route path="timetable" element={<Timetable />} />
//         <Route path="contacts" element={<Contacts />} />
//         {/* <Route path="*" element={<HomePage />} /> */}
//       </Route>
//     </Routes>
//   );
// }

// export default App;
