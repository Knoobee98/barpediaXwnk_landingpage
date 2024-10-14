
export default function Landingpage() {

    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                {/* Hero Section */}
                <section className="bg-[#006241] text-white py-20">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Selamat Datang di Barber & Kopi</h1>
                        <p className="text-xl mb-8">Nikmati pengalaman memotong rambut dan menikmati kopi terbaik dalam satu tempat.</p>
                        <a href="#services" className="bg-white text-[#006241] px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition duration-300">Jelajahi Layanan Kami</a>
                    </div>
                </section>

                {/* Services Overview */}
                <section id="services" className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-12">Layanan Kami</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Barber Services */}
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold mb-4">Layanan Barbershop</h3>
                                <ul className="list-disc list-inside mb-4">
                                    <li>Potong rambut pria</li>
                                    <li>Styling rambut</li>
                                    <li>Perawatan jenggot</li>
                                    <li>Shaving</li>
                                </ul>
                                <p className="mb-4">Tim barber profesional kami siap memberikan gaya rambut terbaik untuk Anda.</p>
                                <a href="/services" className="text-[#006241] font-bold hover:underline">Lihat semua layanan barbershop</a>
                            </div>

                            {/* Coffee Services */}
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <h3 className="text-2xl font-bold mb-4">Layanan Kopi</h3>
                                <ul className="list-disc list-inside mb-4">
                                    <li>Espresso</li>
                                    <li>Cappuccino</li>
                                    <li>Latte</li>
                                    <li>Cold Brew</li>
                                </ul>
                                <p className="mb-4">Nikmati kopi berkualitas tinggi dari biji kopi pilihan terbaik.</p>
                                <a href="/services" className="text-[#006241] font-bold hover:underline">Lihat menu kopi lengkap</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="bg-gray-200 py-16">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">Siap untuk pengalaman unik?</h2>
                        <p className="text-xl mb-8">Kunjungi kami hari ini untuk mendapatkan potongan rambut stylish dan secangkir kopi nikmat.</p>
                        <a href="/order" className="bg-[#006241] text-white px-6 py-3 rounded-full font-bold hover:bg-[#00513A] transition duration-300">Pesan Sekarang</a>
                    </div>
                </section>
            </div>
        </>
    )
}