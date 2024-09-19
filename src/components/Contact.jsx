import React, { useState } from "react";
import './Contact.css';

const Contact = ({ toggleContact }) => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [pesan, setPesan] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!nama || !email || !status || !pesan) {
            alert('Isi semua kolomnya!');
            return;
        }
    
        const data = { nama, email, status, pesan };
    
        try {
            const response = await fetch('http://localhost:4000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (response.ok) {
                console.log('Pesan berhasil dikirim');
                alert('Pesan berhasil dikirim');
            } else {
                const errorMessage = await response.text(); // Ambil pesan error dari server
                console.error('Gagal mengirim pesan:', errorMessage);
                alert('Gagal mengirim pesan: ' + errorMessage);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Terjadi kesalahan saat mengirim pesan: ' + error.message);
        }
    
        setNama('');
        setEmail('');
        setStatus('');
        setPesan('');
        toggleContact();
    };
    
    
    return (
        <div className="container-contact">
            <div className="overlay-contact">
                <div className="content-contact">
                    <h2>Send me a message</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nama">Nama :</label>
                            <input
                                type="text"
                                id="nama"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email :</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="status">Status :</label>
                            <input
                                type="text"
                                id="status"
                                value={status}
                                onChange={(e) => setStatus(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pesan">Isi Pesan :</label>
                            <textarea
                                id="pesan"
                                value={pesan}
                                onChange={(e) => setPesan(e.target.value)}
                            />
                        </div>
                        <div className="btn-handler" style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
                            <button type="submit">Send</button>
                            <button type="button" onClick={toggleContact} style={{ marginTop: '10px' }}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
