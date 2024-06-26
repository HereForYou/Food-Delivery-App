import React, { useState } from 'react';
import PropTypes from 'prop-types'

const TextField = (props) => {
    const { name, type, placeholder, value, onChange } = props;

    return (
        <div className='relative'>
            <input
                name = { name }
                type={ type }
                className='w-[333px] bg-[#f2f2f2] rounded-full text-sm    h-[56px] text-primary'
                placeholder={placeholder}
                value = { value }
                onChange={(e) => onChange(e.target.value)}
            />
            {/* <label className='absolute left-[34px] text-[10px] top-5 text-secondary'>{ placeholder }</label> */}
        </div>
    );
}

TextField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

TextField.defaultProps = {
    type: "text",
    placeholder: "Text Field"
}

export default TextField;