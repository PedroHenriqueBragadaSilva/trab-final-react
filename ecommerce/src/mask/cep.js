import React from 'react';
import InputMask from 'react-input-mask';

const MaskedInputCEP = ({ value, onChange}) => {
   
    return (
        <InputMask
            mask="99.999-999"
            value={value}
            onChange={onChange}
            type="text" placeholder="CEP"
        />
    );
};

export default MaskedInputCEP; 