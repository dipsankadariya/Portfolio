
function Header() {
  return (
    <nav className="bg-gray-800 p-10">
      <div className="flex flex-row items-center justify-between">
        <a href="#" className="text-white text-2xl hover:text-gray-400 ">About me</a>
        <a href="#" className="text-white text-2xl hover:text-gray-400">Projects</a>
        <a href="#" className="text-white text-2xl hover:text-gray-400">Resume</a>
      </div>
    </nav>
  );
}
export default Header;
