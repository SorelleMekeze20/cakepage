"use client";
import {useState} from 'react';
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Heros";
import Footer from "@/app/components/Footer";
import TextInput from "@/app/components/TextInput";

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({name, email, message});
    };


    return (
        <div >
            <Navbar selected={"contact"}/>
            <Hero title1={"Contact"} />
            <main className="max-w-2xl  m-auto bg-white p-10 bg-gray-100 ">
                <h1 className={"text-3xl font-semibold text-center mb-6 "}>Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4" >
                        <label htmlFor={"name"} className={"block mb-2 "}>
                            <span>Name</span>
                            < TextInput type={"Name"} name={"Name"}/>
                        </label>
                    </div>

                    <div className="mb-4">
                        <label htmlFor={"email"} className={"block mb-2 "}>
                            <span>Email</span>
                            < TextInput type={"email"} name={"Email"}/>
                        </label>
                    </div>

                    <div className="mb-6">
                        <label htmlFor={"message"} className={"block mb-2 "}>
                            <span>Message</span>
                            <textarea className={"w-full p-10 border-solid  rounded border-4 border-b-blue-800"}
                                name="message"
                                      required

                            />
                        </label>
                    </div>

                    <button type="submit" className={" w-full py-3 bg-blue-950 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"}>Send Message</button>

                </form>
            </main>
            <Footer/>
        </div>
    );
}
