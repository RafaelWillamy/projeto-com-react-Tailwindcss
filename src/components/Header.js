
function Header(){
    return(
        <header className="flex items-center justify-between px-2 py-4 bg-[#040C18]">
            <div className="flex items-center space-x-2 md:space-x-10">
                <div>
                    <img className="w-10 cursor-pointer curso-gray-900 hover:textw-10 " src="https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_gpt3/e7534de011e207c98b60a1dec62f9048d38f374f/src/assets/logo.svg"></img>
                </div>
                <ul className="flex items-center justify-between space-x-10 font-semibold text-white ">
                    <li className="hover:text-gray-900"><a href="#">Home</a></li>
                    <li className="hover:text-gray-900"><a href="#">O que é GPT3?</a></li>
                    <li className="hover:text-gray-900"><a href="#">Aberta AI</a></li>
                    <li className="hover:text-gray-900"><a href="#">Cse Estudos</a></li>
                    <li className="hover:text-gray-900"><a href="#"> Biblioteca</a></li>
                </ul>
            </div>
            <div className="flex space-x-8 text-lg font-medium text-white capitalize cursor-pointer">
                <button className="border-[#FF4820] py-1 px-2 items-center rounded text-base hover:text-[#FF4820] "> Entrar </button>
                <button className="px-8 py-2 mb-2 text-lg bg-red-600 rounded cursor-pointer text-whitem font-mediu hover:text-gray-700 "> Inscreve-se</button>
            </div>
        </header>
    )
}

export default Header;