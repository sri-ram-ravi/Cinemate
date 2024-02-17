import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./index.css"
import { BrowserRouter } from 'react-router-dom'
const app=ReactDOM.createRoot(document.getElementById("root"))
app.render(
    //basename='movie'
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
)