import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Mainpage from './Mainpage';

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import './navbarfix.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Mainpage />
  </StrictMode>,
)
