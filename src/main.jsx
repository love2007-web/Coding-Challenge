import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { HelmetProvider } from 'react-helmet-async'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
    <HelmetProvider>
        <App />
        <ToastContainer />
    </HelmetProvider>
)
