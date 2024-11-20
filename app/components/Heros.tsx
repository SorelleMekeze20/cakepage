import Image from "next/image";

type Props = {
    title1: string;
    title2: string;
};
const Hero = ({title1, title2}: Props) => {
    return (
        <header className="relative h-96 text-center" >
            <div className=" herosanimation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 whitespace-nowrap overflow-hidden box-border px-0 py-2   ">
                <h1>{title1}</h1>
                <p>{title2}</p>
            </div>
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/Photo Bleu.jpeg"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </header>


    )
}
export default Hero;
