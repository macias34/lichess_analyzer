import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button"
import { useRef } from "react";

const AddWorker = () => {
    
    const handleAddWorker = (e)=>{
        e.preventDefault();
    }

    return (
        <form onSubmit={handleAddWorker} className="flex flex-col items-center gap-10">
            <Input  label={"Wpisz nazwę pracownika"}/>
            <Button color="green">Dodaj pracownika</Button>
        </form>
    );
}
 
export default AddWorker;