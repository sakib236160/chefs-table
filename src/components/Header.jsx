const Header = () => {
    return (
        <div className="flex flex-col md:flex-row md:justify-between items-center my-8 space-y-4">
            {/* Logo */}
            <h1 className="text-gray-800 font-bold text-3xl">Chef `s Table</h1>
            {/* menu start */}
            <ul className=" flex gap-6 text-gray-600 font-semibold text-base">
                <li>
                    <a href="">Home</a>
                </li>
                <li>
                    <a href="">Recipes</a>
                </li>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="Search"></a>
                </li>
            </ul>
            {/* menu end */}
            <div className="flex flex-row justify-between items-center gap-4">
                {/* search */}
                <div className="flex justify-between items-center relative">
                    <input className="py-4 px-10 bg-gray-100 rounded-full placeholder-gray-500 outline-none" type="text" placeholder="search"/>
                    <div className="absolute inset-y-0 -left-1 pl-4 flex items-center text-gray-800 text-center">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                {/* search */}
                <div className="bg-green-400 flex items-center justify-center rounded-full w-12 h-12">
                    <i className="fa-regular fa-user-circle text-3xl"></i>
                </div>
            </div>
        </div>
    );
};

export default Header;