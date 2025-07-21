import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);

    // Fecha dropdown se clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Toggle apenas no mobile
    const toggleDropdown = () => {
        if (window.innerWidth < 1024) {
            setIsDropdownOpen(!isDropdownOpen);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        window.location.href = '/';
    };

    const menuLinks = (
        <>
            <a href="/" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-serif">Home</a>
            <a href="/about" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-serif">Sobre</a>
            <a href="/service" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-serif">Serviços</a>
            <a href="/contact" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-serif">Contato</a>

            {isAuthenticated ? (
                <div
                    className="relative group"
                    ref={dropdownRef}
                    onClick={toggleDropdown}
                >
                    <button className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-bold focus:outline-none">
                        Conta ▾
                    </button>

                    {/* Dropdown - hover no desktop, click no mobile */}
                    <div
                        className={`absolute bg-white text-black mt-2 rounded shadow-lg right-0 z-50 min-w-[120px]
                        ${isDropdownOpen ? 'block' : 'hidden'} 
                        lg:group-hover:block`}
                    >
                        <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">Perfil</a>
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                        >
                            Sair
                        </button>
                    </div>
                </div>
            ) : (
                <a href="/login" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-serif">Login</a>
            )}
        </>
    );

    return (
        <nav className="w-full bg-gradient-to-r from-yellow-900 to-red-700 text-gray-800 py-0 px-2 shadow-black fixed top-0 left-0 z-30">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <a href="/" className="ml-[7.5px] text-2xl font-serif text-white hover:text-red-200 transition-colors duration-300">
                        Novo Horizonte
                    </a>
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex space-x-8 items-center">
                    {menuLinks}
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden bg-gradient-to-r from-green-200 to-green-600 p-4 transition-all duration-300 ${isMenuOpen ? 'block' : 'hidden'}`}>
                {menuLinks}
            </div>
        </nav>
    );
};

export default Navbar;
