"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Ingredients from "@/app/components/Ingredients";
import Preparation from "@/app/components/Preparation";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Heros";
import Checkbox from "@/app/components/Checkbox";

const steps = [
    "Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
    "In a large bowl, cream together the softened butter and granulated sugar until light and fluffy, about 4-5 minutes.",
    "Add eggs one at a time, beating well after each addition. Stir in the vanilla extract.",
    "In a separate bowl, whisk together the all-purpose flour, baking powder, and salt.",
    "Gradually add the dry ingredients to the butter mixture, alternating with the milk. Start and end with the dry ingredients. Mix until just combined.",
    "Divide the batter evenly between the two prepared cake pans.",
    "Bake in the preheated oven for 25-30 minutes, or until a toothpick inserted into the center of the cake comes out clean.",
    "Allow the cakes to cool in the pans for 10 minutes, then remove them and let them cool completely on a wire rack.",
    "While the cakes cool, prepare the frosting by beating the softened butter and powdered sugar together. Add the vanilla extract and heavy cream, adjusting the consistency with more cream if needed.",
    "Once the cakes are completely cooled, frost the top of one cake layer, then add the second layer and frost the top and sides.",
    "Decorate the cake with sprinkles, fresh fruit, or candles as desired."
];

const ingredients = [
    "2 ½ cups all-purpose flour",
    "2 ½ teaspoons baking powder",
    "½ teaspoon salt",
    "1 cup unsalted butter, softened",
    "2 cups granulated sugar",
    "4 large eggs",
    "1 teaspoon vanilla extract",
    "1 cup whole milk",
    "1 cup unsalted butter, softened (for frosting)",
    "4 cups powdered sugar (for frosting)",
    "1 teaspoon vanilla extract (for frosting)",
    "2-4 tablespoons heavy cream (for frosting)",
    "A pinch of salt (for frosting)",
    "Optional: Sprinkles, candles, or fresh fruit for decoration"
];

export default function Page() {

    return (
        <div className="page-container">
            <Navbar/>
            <Hero />

            <main className="main-layout bg-gray-100">
                <section className="birthday-cake p-10 ">
                    <div className="flex">
                        <div className="flex-initial">
                            <h2>birthday-cake Recipe</h2>
                            <p>
                                Discover the recipe for birthday-cake, a delicious soft cake with fresh
                                strawberries and whipped cream. Perfect for any occasion!
                            </p>

                            <Ingredients title={"Ingredients"} ingredients={ingredients}/>
                            <Preparation title={"Preparation Stage"} steps={steps}/>


                            <p>
                                Enjoy your birthday-cake with a cup of tea or coffee! This cake is best enjoyed
                                fresh but can be stored in the refrigerator for up to 4 days.
                            </p>
                        </div>

                        <div className="flex-initial p-10">
                            <Image
                                src="/images/Cake Decorator Photo Shoot.jpeg"
                                alt="Japanaise Shortcake"
                                width={500}
                                height={500}
                            />
                        </div>
                    </div>

                </section>

            </main>

            <Footer/>
        </div>
    );
}
