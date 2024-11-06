import Image from "next/image";

type Props = {
    title1: string;
    title2: string;
};
const Hero = ({title1, title2}: Props) => {
    return (
        <header className="hero">
            <div className="hero-content">
                <h1>{title1}</h1>
                <p>{title2}</p>
            </div>
            <div className="hero-image">
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
