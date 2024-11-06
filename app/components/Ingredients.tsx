type Props = {
    title: string;
    ingredients: string[];
};

const Ingredients = ({title, ingredients}: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul className="list-none list-inside p-20 m-20">
                {ingredients.map((ingredient) => (
                    <li
                        key={ingredient.toString()} className={"flex items-center"}>
                        <input type="checkbox"/>
                        <p className={"flex-auto"}>{ingredient} </p>
                    </li>
                ))}
            </ul>
        </div>

    ) // TODO UTILISER FLEX POUR METRE LES CHECKBOX DEVANT REEMPLACER LE PON PAR CHECKBOX

}
export default Ingredients;

