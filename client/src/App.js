import './App.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from './components/Detail';

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<Main />} />
            <Route path=':id' element={<Detail />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;
