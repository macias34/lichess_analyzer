import Search from "../Search/Search";

const Home = () => {
  return (
    <div className="w-screen flex items-center justify-around flex-col gap-10">
      <h1 className="text-emerald-400 text-3xl">lichess.org Analyser</h1>
      <Search />
    </div>
  );
};

export default Home;
