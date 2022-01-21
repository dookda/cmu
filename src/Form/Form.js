import './../assets/css/soft-ui-dashboard.min.css';
import Input from '../Input/Input';

const Button = () => {
    const handleClick = (data) => {
        console.log(data);
    }
    return (
        <div>
            <Input name="ชื่อ" />
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