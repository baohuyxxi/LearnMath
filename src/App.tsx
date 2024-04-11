import { useState } from 'react';
import './App.css';
import Auth from './routers/Auth';

function App() {
    const [count, setCount] = useState(0);

    const handleRouteChange = (newPath) => {};

    return (
        <>
            <Auth />
        </>
    );
}

export default App;
