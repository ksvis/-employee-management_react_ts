import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { PagesRouter } from './pages/PageRouter';
import { Header } from './components/Header/Header';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header/>
            <PagesRouter/>
        </BrowserRouter>
    )
}

export default App;
