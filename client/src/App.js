import './App.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Detail from './components/Detail';
import Update from './components/Update';

function App() {
    return (
        <BrowserRouter>
            <Link to={'/'}>Main</Link>
            <Routes>
                <Route index element={<Main />} />
                <Route path=':id' element={<Detail />} />
                <Route path=':id/edit' element={<Update />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
