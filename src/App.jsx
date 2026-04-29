import React, { useState } from 'react'
import { Navbar } from './components/navbar'
import { Home } from './pages/home'
import Welcome from './components/welcome'
import { About } from './pages/about'
import { Skills } from './pages/skills'
import { Contact } from './pages/contact'
import { Projects } from './pages/project'
import {Footer} from './components/footer'


export const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div>
      {showWelcome ? (
        <Welcome onFinish={() => setShowWelcome(false)} />
      ) : (
        <div>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
      )}
    </div>

  );
}