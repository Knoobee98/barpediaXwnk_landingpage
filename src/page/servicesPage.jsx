
export default function Services() {
    const barberServices = [
        { name: "Potong Rambut Pria", price: 50000 },
        { name: "Styling Rambut", price: 75000 },
        { name: "Perawatan Jenggot", price: 40000 },
        { name: "Shaving", price: 35000 }
    ];

    const coffeeMenu = [
        { name: "Espresso", price: 20000 },
        { name: "Cappuccino", price: 25000 },
        { name: "Latte", price: 25000 },
        { name: "Cold Brew", price: 30000 }
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12">Layanan Kami</h1>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Barber Services */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold mb-6">Layanan Barbershop</h2>
                        <ul className="space-y-4">
                            {barberServices.map((service, index) => (
                                <li key={index} className="flex justify-between items-center">
                                    <span>{service.name}</span>
                                    <span className="font-semibold">Rp {service.price.toLocaleString()}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-8 bg-[#006241] text-white px-6 py-2 rounded-full hover:bg-[#00513a] transition duration-300">
                            Pesan Sekarang
                        </button>
                    </div>

                    {/* Coffee Menu */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-3xl font-bold mb-6">Menu Kopi</h2>
                        <ul className="space-y-4">
                            {coffeeMenu.map((item, index) => (
                                <li key={index} className="flex justify-between items-center">
                                    <span>{item.name}</span>
                                    <span className="font-semibold">Rp {item.price.toLocaleString()}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="mt-8 bg-[#006241] text-white px-6 py-2 rounded-full hover:bg-[#00513a] transition duration-300">
                            Pesan Sekarang
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}