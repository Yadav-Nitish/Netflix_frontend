
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Appstore from './Context/Appstore.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <Appstore>
        <App />
    </Appstore>  
    </BrowserRouter>

)
