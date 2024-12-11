import * as React from 'react';
import TextInput from "@/app/components/TextInput";
type Props = {
    text: string;

};
const Checkbox = ({text}:Props) => {
    const [checked1, setChecked1] = React.useState(false);
 const handleChange1 = () => {
        setChecked1(!checked1);
    };

    return (
    <>
        <label className={"block mb-1"}>
            <TextInput type="checkbox" checked={checked1}  onChange={handleChange1} />
            {/*<input
                type="checkbox"
                checked={checked1}
                onChange={() => handleChange1()}
            />*/}
        </label>
        <p className={`flex-auto text-left ${checked1 ? "line-through text-gray-500 " : ""}`}>{text}</p>
    </>
    )
        ;
};

export default Checkbox;