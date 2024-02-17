import React from 'react'
import AllRoutes from './routes/AllRoutes'
import {Header,Footer} from "./componenets/index"
const App = () => {
  return (
    <>
    <Header/>
      <AllRoutes/>
    <Footer/>
    </>
  )
}

export default App