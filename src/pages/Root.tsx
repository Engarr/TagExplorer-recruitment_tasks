import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '@/components/Footer';

const RootLayout = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar />
      <main className='font-poppins '>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
