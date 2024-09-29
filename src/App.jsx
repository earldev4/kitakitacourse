import {Routes, Route} from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import FooterComponent from './components/FooterComponent'
import HomePage from './pages/HomePage'
import ClassPage from './pages/ClassPage'
import FaqPage from './pages/FaqPage'
import TermsAndAgreePage from './pages/TermsAndAgreePage'
import TestiPage from './pages/TestiPage'



function App() {
  return (
    <>
      <NavbarComponent />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/class" Component={ClassPage} />
          <Route path="/faq" Component={FaqPage} />
          <Route path="/terms" Component={TermsAndAgreePage} />
          <Route path="/testi" Component={TestiPage} />
        </Routes>
      <FooterComponent />
    </>
  )
}

export default App
