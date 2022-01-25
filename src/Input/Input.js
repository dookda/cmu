import { useState } from 'react';
import './../assets/css/soft-ui-dashboard.min.css';

const Input = ({ addPost, name, label, type }) => {
    const [input, setInput] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
    }

    const onBlur = (e) => {
        let obj = {};
        obj[label] = type === "number" ? Number(e.target.value) : e.target.value;
        addPost(obj);
        setInput('');
    }

    return (
        <form >
            <label>{name}</label>
            <div className="mb-3">
                <input type={type} className="form-control"
                    placeholder={name}
                    value={input}
                    onChange={onChange}
                    onBlur={onBlur} />
            </div>
        </form>
    )
}

export default Input;