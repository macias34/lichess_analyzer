
const Input = ({type, label}) => {


    const handleEnter = (e)=> {
        if(e.key === "Enter"){
            e.preventDefault();
            return;
        }
    }  

    switch(type){
        default :{
            return (
                <div className="flex flex-col gap-1">
                    <label className="text-sky-600">{label}</label>
                    <input onKeyDown={handleEnter} type="text" className="px-2 py-2 text-lg  text-center border-2 border-sky-600 bg-transparent outline-none" placeholder={label}/>
                </div>
            )
        }
    }
    

}
 
export default Input;