import React from "react";
import Checkbox from "@/app/components/Checkbox";
type Props = {
    title: string;
    ingredients: string[];
};

const Ingredients = ({title, ingredients}: Props) => {

        return (
        <div>
            <h2 className={"text-xl mt-8"}>{title}</h2>
            <ul className="list-none list-inside">
                {ingredients.map((ingredient) => (
                    <li
                        key={ingredient} className={"flex items-center space-x-3 ml-2.5"}>
                        <Checkbox text={ingredient}/>
                    </li>
                ))}

            </ul>
        </div>

        )
}
export default Ingredients;

