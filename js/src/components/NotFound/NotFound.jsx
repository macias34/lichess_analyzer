import { Link } from "react-router-dom";
import  Button from "../UI/Button/Button";
const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center">
        <h1 className="text-red-500 text-5xl m-40">Page not found.</h1>
        <Button>
            <Link to="/">Return to Home</Link>
        </Button>
        </div>
    );
}
 
export default NotFound;