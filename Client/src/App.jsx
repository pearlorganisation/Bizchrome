import React from 'react'
import Header from './components/layout/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/layout/Footer/Footer'

import { Toaster } from 'sonner'

const App = () => {

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Toaster richColors />
    </div>
  );
}

export default App