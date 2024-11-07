import React from "react";
type Props = {
    title: string;
    ingredients: string[];
};

const Ingredients = ({title, ingredients}: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <ul className="!list-none list-inside p-5 m-5">
                {ingredients.map((ingredient) => (
                    <li
                        key={ingredient} className={"flex items-center space-x-3"}>
                        <input type="checkbox" className={"flex-auto"}/>
                        <p className={"flex-auto"}>{ingredient} </p>
                    </li>
                ))}
            </ul>
        </div>

    ) // TODO UTILISER FLEX POUR METRE LES CHECKBOX DEVANT REEMPLACER LE PON PAR CHECKBOX

}
export default Ingredients;

