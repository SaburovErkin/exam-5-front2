import { Routes, Route } from "react-router-dom";
import './App.css';
import { Header } from './pages/header/header'
import HomePage from "./pages/home/home";
import { Products } from './pages/products/products'
import Addads from './pages/add-product/add-product'
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import NewAds from "./components/newAds/newAds";
import ProductId from "./pages/productId/productId";
import Obyav from "./components/obyav/obyav";

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/*" element={< HomePage />}>
                    <Route path='/*' element={<NewAds />} />
                </Route>
                <Route path='/profile' element={<Profile />} >
                    <Route path='' element={<Obyav />} />
                </Route>
                <Route path="/products" element={<Products />} />
                <Route path='/product/:productId' element={<ProductId />} />
                <Route path="/add-product" element={< Addads />} />
                <Route path="/login" element={< Login />} />
                <Route path="/profile" element={< Profile />} />
            </Routes>
        </>
    );
}

export default App;
