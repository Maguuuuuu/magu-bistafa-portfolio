import { Routes, Route} from 'react-router-dom';
import { Inicial } from './pages/inicial';
import { Layout } from './layouts/Layout';
import { About } from './pages/About';
import { Cv } from './pages/Cv';
import { DrawingsAndPaintings } from './pages/DrawingsAndPaintings';
import { Colectives } from './pages/Colectives';
import { Works } from './pages/Works';
import { Error404 } from './pages/Error404';
import { Printmaking } from './pages/Printmaking';
import { Contact } from './pages/Contact';
import { Individual } from './pages/Individual';


const Router = () => {
    return (
        <Routes>
             <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Inicial />} />  
                <Route path="/sobre" element={<About />} />
                <Route path="/curriculo" element={<Cv />} />
                <Route path="/desenhos-e-pinturas" element={<DrawingsAndPaintings />} />
                <Route path="/coletivas" element={<Colectives />} />
                <Route path="/trabalhos" element={<Works />} />
                <Route path="*" element={<Error404 />} />
                <Route path="/gravuras" element={<Printmaking />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/indivudual" element={<Individual />} />
            </Route> 
        </Routes>
    );
};

export { Router };