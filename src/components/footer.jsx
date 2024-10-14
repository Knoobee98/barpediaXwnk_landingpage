
import { NavLink } from "react-router-dom";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Navigasi</h2>
                        <nav className="flex flex-col space-y-2">
                            <NavLink to="/" className="hover:text-gray-300">Beranda</NavLink>
                            <NavLink to="/about" className="hover:text-gray-300">Tentang Kami</NavLink>
                            <NavLink to="/services" className="hover:text-gray-300">Layanan</NavLink>
                            <NavLink to="/contact" className="hover:text-gray-300">Kontak</NavLink>
                            <NavLink to="/order" className="hover:text-gray-300">Pesan Sekarang</NavLink>
                        </nav>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
                        <p>Email: info@example.com</p>
                        <p>Telepon: +62 123 456 7890</p>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h2 className="text-2xl font-bold mb-4">Ikuti Kami</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-gray-300">Facebook</a>
                            <a href="#" className="hover:text-gray-300">Twitter</a>
                            <a href="#" className="hover:text-gray-300">Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-600 mt-8 pt-8 text-center">
                    <p>&copy; {currentYear} Nama Perusahaan. Hak Cipta Dilindungi.</p>
                </div>
            </div>
        </footer>
    );
}
