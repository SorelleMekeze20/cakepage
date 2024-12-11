import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Heros";
import Footer from "@/app/components/Footer";


export default function aboutus() {

    return (
        <div className="aboutus-container">
            <Navbar/>
            <Hero title1={"About-Us"}/>
            <main className={"p-10 bg-gray-100"}>
                <h1 className={"text-center text-3xl py-5 "}>Crazy Cake</h1>
                <p>Welcome to our bakery, where every cake is a labor of love, and every recipe tells a story! We are a passionate team of bakers and cake enthusiasts dedicated to creating delicious, memorable treats that bring joy to every celebration.

                    Our journey began with a love for baking that has been passed down through generations. What started as a small home kitchen experiment has blossomed into a bakery that strives to bring the same warmth, joy, and creativity to every cake we make.

                    At our bakery, we believe that a cake is more than just a dessert; it's the heart of any special occasion. Whether you're celebrating a birthday, anniversary, or simply indulging in a sweet moment, we craft each cake with the finest ingredients, attention to detail, and a sprinkle of creativity. From classic favorites to unique recipes, our creations are designed to satisfy every sweet craving.

                    We believe in using only the finest ingredients, sourced locally when possible, to ensure the highest quality in every bite. Our philosophy is simple: great cakes come from love, care, and the finest ingredients.

                    Meet Sarah, our head baker, who has been perfecting her craft for over 10 years. Together with our talented team of decorators and pastry chefs, we create everything from simple cakes to elaborate, custom designs. We also specialize in custom cakes tailored to your unique celebration. Whether you have a theme in mind or need a little inspiration, we’re here to create the perfect cake for your occasion!

                    We are proud to be a part of our local community, supporting charity events, festivals, and workshops. We believe in spreading sweetness, not just through our cakes, but by giving back to the people around us.

                    Join us in celebrating the joy of baking and the sweetness of life! Come visit us, indulge in our delicious cakes, or reach out to us for your next celebration. We’d love to make your event extra special!</p>

            </main>

            <Footer/>
        </div>
    );
}
