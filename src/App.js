import React from 'react'
import AllRoutes from './routes/AllRoutes'
import {Header} from "./componenets/index"
const App = () => {
  return (
    <>
    <Header/>
      <main>
        <div className='mainbody'>
          <AllRoutes/>
        </div>
      </main>
    </>
  )
}

export default App