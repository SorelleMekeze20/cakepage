type Props = {
    steps: string[];
    title: string;
};
const Preparation = ({title, steps}: Props) => {
    return (
        <div>
            <h2 className={"text-xl mt-8"}>{title}</h2>
            <ul className={"list-disc list-inside ml-3"}>
                {steps.map((step) => (
                    <li key={step.toString()}>{step}</li>
                ))}
            </ul>
        </div>
    )
}
export default Preparation;
