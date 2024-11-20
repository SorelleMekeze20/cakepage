import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Heros";
import Footer from "@/app/components/Footer";


export default function aboutus() {

    return (
        <div className="aboutus-container">
            <Navbar/>
            <Hero title1={"About-us"} title2={"Your destination for the most delightful cake recipes."}/>
            <main >
                <h1 >hallo</h1>
                <p>cake</p>
                <p>cake</p>
                <p>cake</p>
                <p>cake</p>
                <p>cake</p>
            </main>

            <Footer/>
        </div>
    );
}
