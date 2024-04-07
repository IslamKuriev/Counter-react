import React from 'react';

const Buttons = (props) => {
    return (
        <div className='btn-main'>
            <button className='btn-plus' onClick={props.clickPlus}>Увеличить</button>
            <button className='btn-minus' onClick={props.clickMin}>Уменьшить</button>
            <button className='btn-close' onClick={props.clickClose}>Сбросить</button>
        </div>
    );
};

export default Buttons;