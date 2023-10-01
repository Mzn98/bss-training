import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout'
import HomePage from './pages/HomePage';
import AddressPage from './pages/Address';
import AccountPage from './pages/Account';

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/address" element={<AddressPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}