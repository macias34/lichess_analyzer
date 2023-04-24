import Search from "../Search/Search";
import NoPortrait from "../no-portrait";

const Home = () => {
  return (
    <>
      <NoPortrait />
      <div className="w-screen max-sm:hidden h-screen flex items-center justify-center flex-col gap-10">
        <h1 className="text-emerald-400 text-3xl">lichess.org Analyser</h1>
        <Search />
      </div>
    </>
  );
};

export default Home;
