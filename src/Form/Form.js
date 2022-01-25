import './../assets/css/soft-ui-dashboard.min.css';
import Input from '../Input/Input';
import { useState } from 'react';

const Button = () => {
    const [post, setPost] = useState([])

    const addPost = (data) => {
        const newPost = data
        setPost([newPost, ...post])
    }

    const handleClick = (data) => {
        console.log(post);

        setPost('')
    }

    return (
        <div>
            <Input type="text" name="กรอกชื่อ" label="name" addPost={addPost} />
            <Input type="text" name="นามสกุล" label="survey" addPost={addPost} />
            <Input type="number" name="รหัสนักศึกษา" label="stdcode" addPost={addPost} />
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