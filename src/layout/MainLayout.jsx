import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div className="font-space-grotesk">
            <header>
                <nav >
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='min-h-[calc(100vh-290px)]'>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
            <Toaster></Toaster>
        </div>
    );
};

export default MainLayout;