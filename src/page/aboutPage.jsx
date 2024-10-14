
export default function About() {

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Tentang Barber & Kopi</h1>
                
                <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Cerita Kami</h2>
                    <p className="text-gray-700 mb-4">
                        Barber & Kopi lahir dari mimpi dua sahabat, Andi dan Budi, yang memiliki passion dalam dunia barbershop dan kopi. Mereka percaya bahwa memotong rambut dan menikmati secangkir kopi adalah dua pengalaman yang bisa saling melengkapi.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Didirikan pada tahun 2018, Barber & Kopi telah menjadi tempat favorit bagi pria modern yang menghargai gaya rambut berkualitas dan kopi premium. Kami berkomitmen untuk memberikan pengalaman terbaik bagi setiap pelanggan yang datang.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-8">
                    <h2 className="text-2xl font-semibold mb-4">Tim Kami</h2>
                    <ul className="space-y-4">
                        <li>
                            <h3 className="text-xl font-medium">Andi Pratama - Pendiri & Kepala Barber</h3>
                            <p className="text-gray-600">Berpengalaman lebih dari 10 tahun dalam industri barbershop</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-medium">Budi Santoso - Pendiri & Ahli Kopi</h3>
                            <p className="text-gray-600">Barista bersertifikat dengan passion dalam menciptakan racikan kopi unik</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-medium">Citra Dewi - Manajer Operasional</h3>
                            <p className="text-gray-600">Mengawasi operasional harian dan memastikan kepuasan pelanggan</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-medium">Deni Kurniawan - Senior Barber</h3>
                            <p className="text-gray-600">Spesialis dalam potongan rambut klasik dan modern</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-medium">Eka Putra - Barista Senior</h3>
                            <p className="text-gray-600">Ahli dalam menciptakan latte art dan cold brew</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}