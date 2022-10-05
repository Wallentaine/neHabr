import './styles/App.css'
import {BrowserRouter} from "react-router-dom"
import Layout from "./components/layout/Layout"

const App = () => {



    return (
        <div className="App">
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </div>
    )
}

export default App
