import React from "react";
const InputTextField = ({name, placeholder, required, _handlechange }) => (
    <div>
        <Input
        type="text"
        name={name}
        required={required}
        autoComplete="off"
        placeholder={placeholder}
        onChange={_handlechange}
        />
    </div>
);

export default InputTextField;
