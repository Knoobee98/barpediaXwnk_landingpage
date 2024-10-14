
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implementasi logika pengiriman email di sini
        console.log('Form submitted:', formData);
        // Reset form setelah submit
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="bg-gray-100 min-h-screen py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Hubungi Kami</h1>
                
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Form Kontak */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-semibold mb-4">Kirim Pesan</h2>
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
                                <label htmlFor="message" className="block text-gray-700 mb-2">Pesan</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-lg"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="bg-[#006241] text-white px-6 py-2 rounded-full hover:bg-[#00513a] transition duration-300">
                                Kirim Pesan
                            </button>
                        </form>
                    </div>

                    {/* Informasi Kontak dan Media Sosial */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-semibold mb-4">Informasi Kontak</h2>
                        <p className="mb-4">Jl. Contoh No. 123, Kota Contoh, 12345</p>
                        <p className="mb-4">Email: info@barberkopi.com</p>
                        <p className="mb-4">Telepon: (021) 123-4567</p>

                        <h3 className="text-xl font-semibold mb-4">Media Sosial</h3>
                        <div className="flex space-x-4 mb-8">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-600 hover:text-blue-700">
                                <FaFacebook />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl text-pink-600 hover:text-pink-700">
                                <FaInstagram />
                            </a>
                        </div>

                        <h3 className="text-xl font-semibold mb-4">Pesan via WhatsApp</h3>
                        <a
                            href="https://wa.me/6281234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition duration-300"
                        >
                            <FaWhatsapp className="mr-2" />
                            Chat WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}