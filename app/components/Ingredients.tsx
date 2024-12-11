import React from "react";
import Checkbox from "@/app/components/Checkbox";
type Props = {
    title: string;
    ingredients: string[];
};

const Ingredients = ({title, ingredients}: Props) => {

        return (
        <div>
            <h2>{title}</h2>
            <ul className="list-none list-inside p-5 m-5">
                {ingredients.map((ingredient) => (
                    <li
                        key={ingredient} className={"flex items-center space-x-3"}>
                        <Checkbox text={ingredient}/>
                    </li>
                ))}

            </ul>
        </div>

        )
}
export default Ingredients;

