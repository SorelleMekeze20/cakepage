"use client";
import {useState} from 'react';
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/heros";
import Footer from "@/app/components/footer";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name, email, message});
    };


    return (
        <div className="contact-container">
            <Navbar/>
            <Hero title1={"Contact"} title2={"Your destination for the most delightful cake recipes."}/>
            <main className="contact-form">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>
                            <span>Name</span>
                            <input
                                type="text"
                                name="name"
                                required
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            <span>Email</span>
                            <input
                                type="email"
                                name="email"
                                required
                            />
                        </label>
                    </div>

                    <div className="form-group">
                        <label>
                            <span>Message</span>
                            <textarea
                                name="message"
                                required
                            />
                        </label>
                    </div>

                    <button type="submit">Send Message</button>

                </form>
            </main>
            <Footer/>
        </div>
    );
}
