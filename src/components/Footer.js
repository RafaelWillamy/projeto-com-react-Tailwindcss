

        function Footer(){
            return(
                    <div className="flex flex-col justify-center items-center bg-[#031B34]">
                      <div className=" w-full text-center mb-12">
                        <h1 className="font-semibold text-4xl text-white">Você quer entrar no futuro antes dos outros ?</h1>
                      </div>
                  
                      <div className="justify-center items-center p-4 text-center mb-20 cursor-pointer">
                        <p className="text-lg leading-5 text-white">Solicitar acesso Antecipado </p>
                        <form class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16 mt-6">
        <input
          placeholder="Email"
          required=""
          type="text"
          class="flex-grow h-10 w-50 px-4 mb-3 text-white transition duration-200 bg-transparent border-2 border-gray-400 rounded appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-200 focus:outline-none focus:shadow-outline"
        />
     <button className="w-full py-2 px-8 font-normal text-xl leading-7 bg-red-600 text-white cursor-pointer hover:bg-[#FF4820] rounded transition delay-150 duration-300 ease-in-out"> Enviar</button>
      </form>

                      </div>
                      <div className="flex justify-between items-start flex-row flex-wrap w-full text-left mt-2">
                        <div className="w-40 m-4">
                          <img className="flex flex-col w-32 h-10 mb-4" src="https://raw.githubusercontent.com/adrianhajdin/project_modern_ui_ux_gpt3/e7534de011e207c98b60a1dec62f9048d38f374f/src/assets/logo.svg" />
                          <p className="tetxt-xs leading-4 text-white">Projeto Inicial com React e Tailwindcss, <br /> Todos od direitos reservados.</p>
                        </div>
                        <div className="flex justify-start flex-col text-white cursor-pointer tetxt-lg tracking-normal leading-loose ">
                          <h4 className=" leading-4 text-white mb-4 text-lg underline decoration-[#FF4820] hover:text-[#FF4820]">Links</h4>
                          <p >Overs</p>
                          <p>Social Media</p>
                          <p>Conteudo</p>
                          <p>Contato</p>
                        </div>
                        <div className="flex justify-start flex-col text-lg text-white cursor-pointer leading-loose ">
                          <h4 className="text-lg leading-4 text-white mb-4 underline decoration-[#FF4820] hover:text-[#FF4820]">Companhia</h4>
                          <p>Termos & Condições</p>
                          <p>Politica Privacidade</p>
                          <p>Contato</p>
                        </div>
                        <div className="text-white cursor-pointer flex flex-col mr-6 text-lg leading-loose ">
                          <h4 className="underline decoration-[#FF4820] hover:text-[#FF4820]">Entre em contato </h4>
                          <p>Rafael willamy </p>
                          <p>+55 88996435039</p>
                          <p>rafaelwillamy@gmail.com</p>
                        </div>
                      </div>
                  
                      <div className="text-center items-center justify-center">
                        <p className="mt-8 text-center leading-4 text-white">@2021 Rafael Dev Web Jr. Todos os direitos reservados</p>
                      </div>
                    </div>
                  );
            }
                  
                  export default Footer;

    