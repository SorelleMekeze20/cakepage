type Props = {
    steps: string[];
    title: string;
};

const Preparation = ({title, steps}: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {steps.map((step) => (
                    <li key={step.toString()}>{step}</li>
                ))}
            </ul>
        </div>
    )
}
export default Preparation;
