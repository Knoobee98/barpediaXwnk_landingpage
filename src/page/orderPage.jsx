
import React, { useState } from 'react';

export default function OrderPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        orderType: '',
        service: '',
        coffeeType: '',
        date: '',
        time: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Implementasi logika pengiriman pesanan di sini
        // Reset form setelah submit
        setFormData({ name: '', email: '', orderType: '', service: '', coffeeType: '', date: '', time: '' });
    };

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Pesan Layanan</h1>
                <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 mb-2">Nama</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="orderType" className="block text-gray-700 mb-2">Jenis Pesanan</label>
                            <select
                                id="orderType"
                                name="orderType"
                                value={formData.orderType}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            >
                                <option value="">Pilih Jenis Pesanan</option>
                                <option value="barber">Layanan Barbershop</option>
                                <option value="coffee">Pesan Kopi</option>
                            </select>
                        </div>
                        {formData.orderType === 'barber' && (
                            <div className="mb-4">
                                <label htmlFor="service" className="block text-gray-700 mb-2">Layanan Barbershop</label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                >
                                    <option value="">Pilih Layanan</option>
                                    <option value="potong">Potong Rambut</option>
                                    <option value="styling">Styling Rambut</option>
                                    <option value="jenggot">Perawatan Jenggot</option>
                                    <option value="shaving">Shaving</option>
                                </select>
                            </div>
                        )}
                        {formData.orderType === 'coffee' && (
                            <div className="mb-4">
                                <label htmlFor="coffeeType" className="block text-gray-700 mb-2">Jenis Kopi</label>
                                <select
                                    id="coffeeType"
                                    name="coffeeType"
                                    value={formData.coffeeType}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    required
                                >
                                    <option value="">Pilih Jenis Kopi</option>
                                    <option value="espresso">Espresso</option>
                                    <option value="cappuccino">Cappuccino</option>
                                    <option value="latte">Latte</option>
                                    <option value="coldBrew">Cold Brew</option>
                                </select>
                            </div>
                        )}
                        <div className="mb-4">
                            <label htmlFor="date" className="block text-gray-700 mb-2">Tanggal</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="time" className="block text-gray-700 mb-2">Waktu</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                                required
                            />
                        </div>
                        <button type="submit" className="w-full bg-[#006241] text-white px-4 py-2 rounded-full hover:bg-[#00513a] transition duration-300">
                            Pesan Sekarang
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}