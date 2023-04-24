import NoPortrait from "../../../js/src/components/UI/no-portrait";
import Search from "../Search/Search";

const Home = () => {
  return (
    <>
      <NoPortrait />
      <div className="w-screen max-[550px]:hidden h-screen flex items-center justify-center flex-col gap-10">
        <h1 className="text-emerald-400 text-3xl">lichess.org Analyser</h1>
        <Search />
      </div>
    </>
  );
};

export default Home;
