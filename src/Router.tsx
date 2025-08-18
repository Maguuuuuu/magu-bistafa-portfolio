import { Routes, Route} from 'react-router-dom';
import { Inicial } from './pages/inicial';
import { Layout } from './layouts/Layout';


const Router = () => {
    return (
        <Routes>
             <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Inicial />} />  
                </Route> 
        </Routes>
    );
};

export { Router };