import * as React from 'react';

type Props = {
    type?: string;
    name?: string;
    checked?: boolean;
    onChange?: () => void;

};
const TextInput = ({type, name, checked, onChange}: Props) => {
    return (
        <>
            {name ? (<input className={"w-full border-2 border-b-blue-800"}
                            type={type} name={name} required/>) : (
                <input type={type} checked={checked} onChange={onChange}/>)
            }
        </>
    );
};
export default TextInput;