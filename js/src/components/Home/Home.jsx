import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-20 text-4xl">
            <Link className="text-emerald-600" to="/pracownicy">Pracownicy</Link>
            <Link className="text-sky-600" to="/etaty">Etaty</Link>
            <Link className="text-yellow-400" to="/zespoly">Zespoły</Link>
        </div>
    );
}
 
export default Home;