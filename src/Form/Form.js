import './../assets/css/soft-ui-dashboard.min.css';
import Input from '../Input/Input';
import { useState } from 'react';
import axios from 'axios';

const Button = () => {
    const [post, setPost] = useState([])

    const addPost = (data) => {
        const newPost = data
        setPost([newPost, ...post])
    }

    const getApi = (data) => {
        axios.post('http://localhost:5100/api/insert', { data }).then(r => {
            console.log(r)
        })
    }

    const onClick = () => {
        console.log("dd");
    }

    const handleClick = () => {
        console.log(post);
        getApi(post)
        setPost('')
    }

    return (
        <div>
            <Input type="text" name="ชื่อ-นามสกุล" label="username" addPost={addPost} onClick={onClick} />
            <Input type="text" name="email" label="email" addPost={addPost} onClick={onClick} />
            <Input type="number" name="รหัสนักศึกษา" label="stdcode" addPost={addPost} onClick={onClick} />
            <div className="text-center">
                <button type="button"
                    className="btn bg-gradient-info mt-4 mb-0"
                    onClick={handleClick}>Sign in
                </button>
            </div>
        </div>
    )
}

export default Button;