import * as React from 'react';

const checkbox = () => {
    const [checked1, setChecked1] = React.useState(false);

    const handleChange1 = () => {
        setChecked1(!checked1);
    };

    ;

    return (

        <label>
            <input
                type="checkbox"
                checked={checked1}
                onChange={handleChange1}
            />
        </label>

    );
};

export default checkbox;