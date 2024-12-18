"use client";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Ingredients from "@/app/components/Ingredients";
import Preparation from "@/app/components/Preparation";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Heros";
import Checkbox from "@/app/components/Checkbox";

const ingredients = [
    "250g all-purpose flour",
    "150g sugar",
    "3 large eggs",
    "150g unsalted butter, softened",
    "1 teaspoon vanilla extract",
    "1 teaspoon baking powder",
    "500g apples, peeled and sliced",
    "Cinnamon for sprinkling"
];

const steps = [
    "Preheat the oven to 180°C (350°F).",
    "In a bowl, cream together the butter and sugar until light and fluffy.",
    "Add the eggs, one at a time, mixing well after each addition.",
    "Stir in the vanilla extract.",
    "In another bowl, mix together the flour and baking powder.",
    "Gradually add the dry ingredients to the wet mixture, mixing until just combined.",
    "Fold in the sliced apples.",
    "Pour the batter into a greased cake pan.",
    "Sprinkle with cinnamon.",
    "Bake for about 50-60 minutes or until a toothpick inserted comes out clean.",
    "Let cool before serving."
];
export default function Page() {


    return (
        <div className="page-container">
            <Navbar selected={"recipe"}/>

            <Hero title1={""} />
            <main className="main-layout bg-gray-100">
                <section className="japanaise-shortcake p-10">
                    <div className="flex">
                        <div className="  flex-initial">
                            <h2> Apfelkuchen Recipe</h2>


                            <p>
                                Discover the recipe for Apfelkuchen , a delicious soft cake with fresh
                                strawberries and whipped cream. Perfect for any occasion!
                            </p>

                            <Ingredients title={"Ingredients"} ingredients={ingredients}/>
                            <Preparation title={"Preparation Stage"} steps={steps}/>


                            <div className="items-1">
                                <p>
                                    Enjoy your Apfelkuchen with a cup of tea or coffee! This cake is best enjoyed
                                    fresh but can be stored in the refrigerator for up to 2 days.
                                </p>
                            </div>
                        </div>

                        <div className="flex-initial p-10">
                                <Image
                                    src="/images/Apfelkuchen-mit-Streusel-08-scaled.webp"
                                    alt="Apfelkuchen"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div>

                            </div>

                        </div>


                </section>

            </main>

            <Footer/>
        </div>
    );
}
