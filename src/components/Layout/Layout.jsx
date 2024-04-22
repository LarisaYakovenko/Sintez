// import React, { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import logo from '../../images/banner_tr.png';

// export const Layout = () => {
//   return (
//     <div>
//       <div>
//         <div>
//           <img src={logo} alt="logo" width={400} />
//         </div>
//         nav
//       </div>
//       <Suspense>
//         <Outlet />
//       </Suspense>
//     </div>
//   );
// };

import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Item,
  List,
  StyleNavLink,
  Section,
  Logo,
} from './Layout.styled';
import logo from '../../images/banner_tr.png';

export const Layout = () => {
  return (
    <Section>
      <Container>
        <Logo>
          <img src={logo} alt="logo" width={400} />
        </Logo>
        <List>
          <Item>
            <StyleNavLink to="/">головна</StyleNavLink>
          </Item>
          <Item>
            <StyleNavLink to="/services">послуги</StyleNavLink>
          </Item>
          <Item>
            <StyleNavLink to="/timetable">графік роботи</StyleNavLink>
          </Item>
          <Item>
            <StyleNavLink to="/contacts">контакти</StyleNavLink>
          </Item>
        </List>
      </Container>
      <Suspense>
        <Outlet />
      </Suspense>
    </Section>
  );
};

// export const Layout = () => {
//   return (
//     <>
//       <div>
//         <header>
//           <nav>
//             <ul>
//               <li>
//               <NavLink to="/">головна</NavLink>
//             </li>
//             <li>
//               <NavLink to="/catalog">послуги</NavLink>
//             </li>
//             <li>
//               <NavLink to="/favorites">графік роботи</NavLink>
//             </li>
//             <li>
//               <NavLink to="/favorites">контакти</NavLink>
//             </li>
//             </ul>
//           </nav>
//         </header>
//       </div>

//       <Suspense>
//         <Outlet />
//       </Suspense>
//     </>
//   );
// };

// import { Outlet } from 'react-router-dom';
// import React, { Suspense } from 'react';
// import Header from "../Header/Header";

// export const Layout = () => {
//   return (
//     <>
//       <Header />
//       <Suspense>
//         <Outlet />
//       </Suspense>
//     </>
//   )
// };
