import { useState } from 'react';
import './../assets/css/soft-ui-dashboard.min.css';

const Input = ({ addPost, name }) => {
    const [data, setData] = useState("");

    const onChange = (e) => {
        setData(e.target.value);
    }

    const onBlur = (e) => {
        const newData = e.target.value;
        addPost(newData)
    }

    return (
        <form >
            <label>{name}</label>
            <div className="mb-3">
                <input type="text" className="form-control"
                    placeholder={name}
                    value={data}
                    onChange={onChange}
                    onBlur={onBlur} />
            </div>
        </form>
    )
}

export default Input;