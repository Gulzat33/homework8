import React, { useState } from 'react';
import { logDOM } from '@testing-library/react';


const Form = () => {

    const [inputValue, setInputValue] = useState({
        name: '',
        age: 0
    })


    const changeInput = (event) => {
        console.log(event.target.name);
        setInputValue({
            ...inputValue, [event.target.name] : event.target.value
        })
    }

    const adduser = () => {
        if (inputValue.name === '') return alert('заполните имя')
        if (inputValue.age === 0) return alert('заполните возраст')
        console.log(inputValue);
    }

    return (
        <div>
            <input
                name='name'
                type="text"
                placeholder={'name'}
                onChange={changeInput}
            />
            <input
                name='age'
                type="number"
                placeholder={'age'}
                onChange={changeInput}
            />
            <button onClick={adduser}>отправить</button>
        </div>
    );
};

export default Form;