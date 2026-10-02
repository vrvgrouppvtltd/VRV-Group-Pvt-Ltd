import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Layout
import MainLayout from './layouts/MainLayout';

// Home Pages
import Home from './pages/Home/Home';
import About from './pages/Home/About';
import Contact from './pages/Home/Contact';

// Tours Pages - 
import ToursHome from './pages/Tours/Home';
import PackageDetails from './pages/Tours/PackageDetails';

// Real Estate Pages
import PropertiesPage from './pages/RealEstate/PropertiesPage';
import PropertyDetailsPage from './pages/RealEstate/PropertyDetailsPage';

// Car Rental Pages
import CarRentalHome from './pages/CarRental/CarRentalHome';
import ExploreCars from './pages/CarRental/ExploreCars';

// Preloader & Contexts
import Preloader from './components/common/Preloader';
import { LikedProvider } from './context/LikedContext';

export default function App() {
  return (
    <BrowserRouter>
      <LikedProvider>
        <Preloader />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Global Home */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            {/* Tours */}
            <Route path="tours" element={<ToursHome />} />
            <Route path="tours/:id" element={<PackageDetails />} />
            <Route path="package/:id" element={<PackageDetails />} />
            <Route path="packages/:id" element={<PackageDetails />} />
            <Route path="tour-and-travels" element={<Navigate to="/tours" replace />} />

            {/* Real Estate */}
            <Route path="real-estate" element={<PropertiesPage />} />
            <Route path="real-estate/:id" element={<PropertyDetailsPage />} />
            <Route path="properties" element={<Navigate to="/real-estate" replace />} />
            <Route path="properties/:id" element={<PropertyDetailsPage />} />
            <Route path="property/:id" element={<PropertyDetailsPage />} />

            {/* Car Rental */}
            <Route path="car-rental" element={<CarRentalHome />} />
            <Route path="car-rental/cars" element={<ExploreCars />} />
            <Route path="car-rental/fleet" element={<Navigate to="/car-rental/cars" replace />} />
            <Route path="car-rental/explore" element={<Navigate to="/car-rental/cars" replace />} />
            <Route path="car-rentals" element={<Navigate to="/car-rental" replace />} />

            {/* Catch all */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </LikedProvider>
    </BrowserRouter>
  );
}
