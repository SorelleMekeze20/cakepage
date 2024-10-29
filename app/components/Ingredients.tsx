type Props = {
    title: string;
    ingredients: string[];
};

const Ingredients = ({title, ingredients}: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient.toString()}>{ingredient}</li>
                ))}
            </ul>
        </div>

    )
}
export default Ingredients;

