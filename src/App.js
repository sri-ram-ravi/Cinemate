import React from 'react'
import AllRoutes from './routes/AllRoutes'
import {Header,Footer} from "./componenets/index"
const App = () => {
  return (
    <>
    <Header/>
      <main>
        <AllRoutes/>
      </main>
    <Footer/>
    </>
  )
}

export default App