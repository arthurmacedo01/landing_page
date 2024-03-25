import ReactPixel from "react-facebook-pixel";
import "../js/scripts.js";
import "../css/styles.css";
import "../css/custom.css";

import arthurImage from "../assets/img/team/arthur.png";
import garantiaImage from "../assets/img/garantia.png";
import closeImage from "../assets/img/close-icon.svg";
import devicesImage from "../assets/img/dispositivos.png";
import esp32Image from "../assets/img/esp32.png";
import FadeInOnScroll from "../components/FadeInOnScroll.js";
import Coupon from "../components/Coupon.js";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";
import WhatsAppLink from "../components/WhatsAppLink.js";
import Accordion from "../components/Accordion.js";
import AutoPlayVideo from "../components/AutoPlayVideo.js";

function Course() {
  const course_pixel = "708655164529978";
  const [discountState, disountSet] = useState("");
  const videoURL = "https://www.youtube.com/embed/R8XDKeczBVg";
  var checkoutUrl = "https://pay.hotmart.com/Y88151795S?" + discountState;
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };
  ReactPixel.init(course_pixel, null, options);
  ReactPixel.pageView(); // For tracking page view
  const [cookies] = useCookies();
  const queryParameters = new URLSearchParams(window.location.search);
  var data = {};
  Object.keys(cookies).forEach(
    (cookieName) => (data[cookieName] = cookies[cookieName])
  );

  data = {
    placement_id: queryParameters.get("placement_id"),
    campaing_id: queryParameters.get("campaing_id"),
    adset_id: queryParameters.get("adset_id"),
    ad_id: queryParameters.get("ad_id"),
  };
  data.contents = [{ id: "course", quantity: 1 }];

  ReactPixel.trackSingle(course_pixel, "ViewContent", data);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="App" id="page-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        id="mainNav"
      >
        <WhatsAppLink />
        <Coupon disountSet={disountSet} />
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src={esp32Image} alt="esp32" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <NavLink to="free" className="nav-link" onClick={scrollToTop}>
                  eBook
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#modules">
                  Módulos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Instrutor
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#price">
                  Preço
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Masthead */}
      <header className="masthead fade-in">
        <div className="container">
          <h2 className="masthead-subheading">
            Curso de automação e eletrônia
          </h2>
          <h1 className="masthead-heading text-uppercase">
            Internet das Coisas com ESP32
          </h1>
          <h2 className="masthead-subheading">Da ideia à implementação!</h2>
          <div className="portfolio-item">
            <a
              className="animated btn btn-primary btn-xl text-uppercase"
              data-bs-toggle="modal"
              href="#checkout"
              onClick={() => {
                disountSet("");
                ReactPixel.trackSingle(course_pixel, "AddToCart", data);
              }}
            >
              Comprar agora
            </a>
          </div>
        </div>
      </header>
      {/* Sobre */}
      <FadeInOnScroll>
        <section className="page-section bg-light" id="about">
          <div className="container">
            <div className="mb-5 text-center">
              <h2 className="section-heading text-uppercase">
                Sobre o Conteúdo
              </h2>
            </div>
            <div className="text-center">
              <AutoPlayVideo videoURL={videoURL} />
              <p className="my-3 text-muted">
                Com o curso Internet das Coisas com ESP32, aprenda a programar o
                ESP32 para fazer projetos se comunicando pela internet e atuando
                no mundo real, com motores, sinalização LED, utilização de
                sensores e muito mais. Desenvolva habilidades em programação e
                eletrônica para trazer suas ideias à vida. Adquira o curso agora
                e comece a criar projetos inovadores de IoT.
              </p>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      {/* Módulos */}
      <section className="page-section" id="modules">
        <div className="container">
          <FadeInOnScroll>
            <div className="mb-5 text-center">
              <h2 className="section-heading text-uppercase">Módulos</h2>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-desktop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Programação (C)</h4>
                <p className="text-muted">
                  Conceitos básicos e essenciais de programação em C
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-microchip fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Introdução à programação ESP32</h4>
                <p className="text-muted">
                  Programação de algoritmos no microcontrolador ESP32. Conceitos
                  envolvendo LOG, Delay, Acionando LED, Exemplos IDF e
                  Utilização de Bibliotecas.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-gear fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Acionando Atuadores com Eletrônica</h4>
                <p className="text-muted">
                  Utilização de conceitos de eletrônica para interagir com o
                  mundo real. Conceitos envolvendo Mosfet, Optoacoplador, Relay,
                  PWM introdução, Funções PWM, PWM no ESP32, Controle de LED e
                  Motor e Servo Motor
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-wifi fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Comunicação pela Internet</h4>
                <p className="text-muted">
                  Como conectar o microcontrolador na rede de internet.
                  Conectando o ESP32 à internet, Introdução ao MQTT, MQTT no
                  ESP32, Introdução ao REST (HTTP) e REST no ESP32.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-clock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Sistema Operacional em Tempo Real</h4>
                <p className="text-muted">
                  Utilização do FreeRTOS. Aplicações com Tasks (Tarefas),
                  Notifications (Notificações), Queues (Filas), Timers
                  (Temporizadores) e Semaphores (Semáforos).
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-code fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Interface de Aplicativos</h4>
                <p className="text-muted">
                  Construindo interface através de aplicativo web. Aplicação com
                  HTML, CSS, Bootstrap, Javascript e Deploy
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-cube fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Projeto 3D</h4>
                <p className="text-muted">
                  Utilização da modelagem 3D para auxiliar nos projetos.
                  Introdução a Projeto 3D, utilização do FreeCAD, Sketch
                  (Esboço), Objetos 3D e Operações Booleanas.
                </p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className="fas fa-paw fa-stack-1x fa-inverse"></i>
                </span>
                <h4 className="my-3">Projeto Alimentador de Pet</h4>
                <p className="text-muted">
                  Aplicação dos conceitos em projeto de alimentador de ped
                  automático e conectado na internet. Projeto 3D, Eletrônica
                  Embarcada, Programação Embarcada e Interface por Aplicativo
                  web.
                </p>
              </div>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll>
            <Accordion />
          </FadeInOnScroll>
        </div>
      </section>
      {/* Team */}
      <FadeInOnScroll>
        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Instrutor</h2>
            </div>

            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src={arthurImage}
                alt="instructor"
                style={{
                  objectFit: "contain",
                }}
              />

              <h4>Arthur Macêdo</h4>
              <p className="text-muted">
                Arthur Macêdo é um instrutor qualificado que liderará o nosso
                curso. Com uma sólida formação, incluindo graduação em
                engenharia mecatrônica na UnB e mestrado em controle e automação
                na UFMA, doutorando no ITA, ele possui mais de 7 anos de
                experiência como engenheiro eletrônico na Força Aérea
                Brasileira, com foco na área aeroespacial. Sua paixão é
                transformar ideias em realidade, e ele tem a expertise
                necessária para concretizar projetos desafiadores que envolvem
                eletrônica e programação. Arthur Macêdo irá orientá-lo e
                ajudá-lo a atingir seus objetivos neste curso.
              </p>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      {/* Garantia */}
      <FadeInOnScroll>
        <section className="page-section" id="team">
          <div className="container text-center">
            <img
              className="mx-auto rounded-circle"
              src={garantiaImage}
              alt="garantia"
            />
            <div className="row my-3">
              <h2>
                Garantia de <strong>7 dias</strong>
              </h2>
              <p className="text-muted">
                Seu dinheiro de volta <strong>sem perguntas</strong> até 7 dias
                após a compra.
              </p>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      {/* Price */}
      <FadeInOnScroll>
        <section className="page-section bg-light" id="price">
          <div className="col-md-5 container text-white text-center">
            <div className="card-body card bg-dark ">
              <div></div>
              <div>
                <img src={devicesImage} alt="devices"></img>
                <span className="d-inline-block h5 mx-3">
                  Aproveite o conteúdo em qualquer dispositivo.
                </span>
              </div>
              <div>
                <div className="d-inline display-7 mx-3">12 x </div>
                <div className="d-inline display-5">49,60</div>
                <div className="my-3">ou 1 x 497</div>
                <p>Oferta por tempo limitado.</p>
              </div>
              <div className="my-3">
                <a
                  className="animated btn btn-primary btn-xl text-uppercase"
                  data-bs-toggle="modal"
                  href="#checkout"
                  onClick={() => {
                    disountSet("");
                    ReactPixel.trackSingle(course_pixel, "AddToCart", data);
                  }}
                >
                  Comprar Agora
                </a>
              </div>
              <p className="my-3">PAGAMENTO 100% SEGURO COM ACESSO IMEDIATO</p>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      {/* Price */}
      <FadeInOnScroll>
        <section className="page-section" id="faq">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="container">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Para quem é esse produto?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      <strong>Estudantes e Iniciantes em IoT:</strong> Aqueles
                      que desejam aprender os fundamentos da Internet das Coisas
                      e começar a criar projetos com ESP32.
                    </p>
                    <p>
                      <strong>
                        Profissionais de TI e Engenheiros Eletrônicos:
                      </strong>{" "}
                      Profissionais que desejam expandir seus conhecimentos na
                      área de IoT e adquirir habilidades práticas para
                      desenvolver projetos com ESP32.
                    </p>
                    <p>
                      <strong>Empreendedores e Inventores:</strong> Indivíduos
                      que desejam criar soluções inovadoras e dispositivos
                      conectados à IoT para suas próprias startups ou projetos
                      pessoais.{" "}
                    </p>
                    <p>
                      <strong>
                        Engenheiros de Software e Desenvolvedores:
                      </strong>{" "}
                      Desenvolvedores que desejam se especializar em programação
                      e desenvolvimento de software para dispositivos IoT
                      baseados em ESP32.{" "}
                    </p>
                    <strong>Hobbistas e Entusiastas:</strong> Amadores que têm
                    interesse em eletrônica e desejam explorar projetos de IoT
                    como passatempo ou para automação residencial.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Como funciona o 'Prazo de Garantia'?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    O Prazo de Garantia é o período que você tem para pedir o
                    reembolso integral do valor pago pela sua compra, caso o
                    produto não seja satisfatório.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    O que é e como funciona o Certificado de Conclusão digital?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Alunos podem emitir esse certificado ao final do curso ou
                    entrando em contato com o Autor. Esses certificados podem
                    ser compartilhados em redes sociais como o LinkedIn e
                    inseridos em informações curriculares.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Como acessar o produto?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Você receberá o acesso por email. O conteúdo será acessado
                    ou baixado através de um computador, celular, tablet ou
                    outro dispositivo digital. Você também pode acessar o
                    produto comprado nesta página:
                    <br />
                    01 - Faça login na Hotmart clicando em 'Entrar' <br />
                    02 - Acesse o menu lateral, clique em 'Minha conta'
                    <br />
                    03 - Clique em 'Minhas compras' e lá estarão todos os
                    produtos que você já comprou!
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Como faço para comprar?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Para comprar este curso, clique no botão “Comprar agora”.
                    Lembre-se de que nem todos os cursos estarão sempre
                    disponíveis para compra. É possível que o produtor esteja
                    preparando uma nova turma ainda sem inscrições abertas.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      {/* Footer*/}
      <footer className="footer py-4">
        <div className="container">
          <div className="text-center">
            Copyright &copy; Todos os direitos reservados.
          </div>
        </div>
      </footer>
      {/* <!-- Portfolio item 1 modal popup--> */}
      <div
        className="portfolio-modal modal fade w-100 h-100"
        id="checkout"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog h-100">
          <div className="modal-content p-1 h-100">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src={closeImage} alt="Close modal" />
            </div>
            {/* <!-- Embedded-Page--> */}
            <iframe
              title="checkout"
              src={checkoutUrl}
              width="100%"
              height="100%"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
