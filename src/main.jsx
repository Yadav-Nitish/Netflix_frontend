
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AppStore from './Context/Appstore.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <AppStore>
        <App />
    </AppStore>  
    </BrowserRouter>

)
