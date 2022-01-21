import { useState } from 'react';
import './../assets/css/soft-ui-dashboard.min.css';

const Input = (props) => {
    const [data, setData] = useState("");
    console.log(data);

    return (
        <form >
            <label>{props.name}</label>
            <div className="mb-3">
                <input type="text" className="form-control"
                    placeholder={props.name}
                    onChange={e => setData(e.target.value)} />
            </div>


        </form>
    )
}

export default Input;