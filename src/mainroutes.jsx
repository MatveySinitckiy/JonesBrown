import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Adjust import paths as needed
import Services from './Services';
import Consult from './Consult';

export function MainRoutes() {
    return (
        <Router basename="/JonesBrown/">
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/services" element={<Services />} />
                <Route path="/consult" element={<Consult />} />
            </Routes>
        </Router>
    );
}