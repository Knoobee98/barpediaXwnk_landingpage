import { NavLink } from "react-router-dom"

export default function Navbar() {

    return (
        <>
        <nav className="bg-[#006241] text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold">Logo</div>
                    <div className="flex space-x-6">
                        <NavLink to="/" className="hover:text-gray-300">Beranda</NavLink>
                        <NavLink to="/about" className="hover:text-gray-300">Tentang Kami</NavLink>
                        <NavLink to="/services" className="hover:text-gray-300">Layanan</NavLink>
                        <NavLink to="/contact" className="hover:text-gray-300">Kontak</NavLink>
                        <NavLink to="/order" className="bg-white text-[#006241] px-4 py-2 rounded-full hover:bg-gray-200">Pesan Sekarang</NavLink>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}