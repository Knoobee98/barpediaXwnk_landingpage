
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Halaman Tidak Ditemukan</h1>
            <p className="text-xl text-gray-600 mb-8">Maaf, halaman yang Anda cari tidak dapat ditemukan.</p>
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Kembali ke Beranda
            </Link>
        </div>
    )
}

