import React from 'react';
import InputMask from 'react-input-mask';

const MaskedInputCPF = ({ value, onChange}) => {
   
    return (
        <InputMask
            mask="999.999.999-99"
            value={value}
            onChange={onChange}
            type="text" placeholder="CPF"
        />
    );
};

export default MaskedInputCPF; 