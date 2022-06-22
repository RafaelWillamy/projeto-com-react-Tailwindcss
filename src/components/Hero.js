

function Hero(){
    return(
        <div className="bg-[#040C18] flex flex-row">
            <div className="flex justify-center items-start flex-col mr-20">
                <h1 className="ml-8 font-semibold text-5xl text-white">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
                <p className="ml-8 font-normal text-xl mt-6 text-white">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <div className="flex flex-col mt-4 md:flex-row ml-8">
                    <input className="w-full font-normal text-x leading-7 flex-grow h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-500 rounded shadow-sm appearance-none md:mr-2 md:mb-0" type="email" placeholder="Email"></input>
                    <button className="w-full font-normal text-xl leading-7 bg-red-600 text-white cursor-pointer hover:bg-[#FF4820] rounded transition delay-150 duration-300 ease-in-out">Iniciar</button>
                </div>
                <div className="w-full items-center mt-8 flex-row">
                    <img className="ml-8 w-48 h-10" src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/people.png?raw=true"></img>
                    <p className="ml-8 mt-4 font-normal text-white">1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <img className="w-full h-full" src="https://github.com/adrianhajdin/project_modern_ui_ux_gpt3/blob/main/src/assets/ai.png?raw=true"></img>
            </div>

        </div>
    )}


export default Hero;
