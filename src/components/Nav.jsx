const Nav = () => {
  return (
    <header className="w-full h-[10vh] px-20 py-6 flex justify-between items-center">
      <a className="text-3xl font-bold text-orange-600 leading-normal" href="/">
        <span>calc</span>
        <span className="text-slate-900">.</span>
      </a>

      <button className="py-2 px-5 bg-orange-500 text-white text-lg font-semibold rounded-md hover:bg-orange-700 transition-colors">
        <a href="https://github.com/Netricc/calc-react-webapp">View Code</a>
      </button>
    </header>
  );
};

export default Nav;
