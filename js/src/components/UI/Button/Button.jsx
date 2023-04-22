const Button = ({children, color, onClick}) => {

   const getTheme = ()=>{
    switch(color){
        case "red" : {
            return " border-red-600 text-red-600 transition hover:bg-red-600"
        }
        case "green" : {
            return "border-emerald-600 text-emerald-600 transition hover:bg-emerald-600"
        }

        default : {
            return "border-sky-600 text-sky-600 transition hover:bg-sky-600"
        }
    }

   }

    return (
        <button type="submit" className={`flex bg-transparent border-2 w-fit px-10 py-3 rounded-2xl font-semibold text-xl hover:text-white ${getTheme()}`} onClick={onClick}>
            {children}
        </button>
    );
}
 
export default Button;