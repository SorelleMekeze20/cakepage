import Image from "next/image";

type Props = {
    title1: string;
    title2: string;
};
const Hero = ({title1, title2}: Props) => {
    return (
        <header className="relative h-96 text-center pt-20">
            <div className="absolute top-4 left-4 transform z-20 font-bold text-orange-300 text-4xl sm:text-5xl">
                <h1>Crazy Cakes</h1>
            </div>
            <div
                className="  text-3xl herosanimation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 whitespace-nowrap overflow-hidden box-border px-0 py-2   ">
                <h1>{title1}</h1>

            </div>
            <div className="absolute inset-0 z-0 ">
                <Image
                    src="/images/10 Restaurant Website Design Examples.jpeg"
                    alt="Hero Image"
                    layout="fill"  // Utilise tout l'espace du conteneur
                    objectFit="cover"  // Pour que l'image couvre le conteneur sans déformation
                    quality={90}
                    priority

                />
            </div>
        </header>
    )
}
export default Hero;
