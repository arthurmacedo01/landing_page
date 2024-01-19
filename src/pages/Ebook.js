import ReactPixel from "react-facebook-pixel";

import "../js/scripts.js";
import "../css/styles.css";
import "../css/custom.css";

import arthurImage from "../assets/img/team/arthur.png";
import garantiaImage from "../assets/img/garantia.png";
import closeImage from "../assets/img/close-icon.svg";
import devicesImage from "../assets/img/dispositivos.png";
import FadeInOnScroll from "../components/FadeInOnScroll.js";

import ebook_cover from "../assets/img/ebook_cover.png";
import classes from "./Ebook.module.css";
import { NavLink } from "react-router-dom";
import { useCookies } from "react-cookie";

function Ebook() {
  const [cookies] = useCookies();
  const ebook_pixel = "387730897082505";
  var data = {};
  Object.keys(cookies).forEach(
    (cookieName) => (data[cookieName] = cookies[cookieName])
  );
  data.contents = [{ id: "eBook", quantity: 1 }];

  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };
  ReactPixel.init(ebook_pixel, null, options);
  ReactPixel.pageView(); // For tracking page view
  ReactPixel.trackSingle(ebook_pixel, "ViewContent", data);

  var checkoutUrl = "https://pay.hotmart.com/I89735973R";
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
        <div className="container">
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
                <a className="nav-link" href="#about">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#modules">
                  Capítulos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Arthur Macêdo
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
      <header className={`${classes.header_masthead} fade-in`}>
        <div className="container">
          <h1 className="masthead-heading text-uppercase">
            Prepare-se para a tecnologia
          </h1>
          <img
            className="w-25 my-3 border rounded"
            src={ebook_cover}
            alt="instructor"
            style={{
              objectFit: "contain",
            }}
          />
          <h1 className="masthead-heading text-uppercase">
            eBook: Explorando a Internet das Coisas
          </h1>
          <h2 className="masthead-subheading">Uma Visão Geral</h2>
          <div className="portfolio-item">
            <a
              className="animated btn btn-primary btn-xl text-uppercase"
              data-bs-toggle="modal"
              href="#checkout"
              onClick={() => {
                ReactPixel.trackSingle(ebook_pixel, "AddToCart", data);
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
              <p className="my-3 text-muted">
                Explore a Internet das Coisas (IoT). 73 páginas escritas tanto
                para entusiastas curiosos quanto para profissionais, este guia
                oferece uma abordagem aos tópicos fundamentais da IoT.
                <br />A Internet das Coisas (IoT) refere-se a uma rede
                interconectada de dispositivos físicos incorporados com
                sensores, software e outras tecnologias que permitem a coleta e
                troca de dados. A IoT tem aplicações em diversas áreas, como
                saúde, agricultura, indústria, transporte e em casas
                inteligentes, contribuindo para a eficiência, automação e
                melhoria da tomada de decisões. <br />
                Serão abordados os conceitos essenciais que formam a base da
                IoT, compreendendo sua evolução histórica e sua crescente
                influência em nossa sociedade moderna. Sensores, dispositivos e
                redes de comunicação e sua arquitetura que tornam a IoT uma
                realidade. Inspirando-se em estudos de caso, você terá uma
                compreensão sólida de como a IoT está transformando indústrias
                em todo o mundo. <br />
                Serão apresentadas as tendências futuras, preparando-o para
                liderar na revolução desta tecnologia.
              </p>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      {/* Módulos */}
      <FadeInOnScroll>
        <section className="page-section" id="modules">
          <div className="container">
            <div className="mb-5 text-center">
              <h2 className="section-heading text-uppercase">Capítulos</h2>
            </div>
            <ul className="list-group text-center">
              <li className="list-group-item">Introdução à IoT</li>
              <li className="list-group-item">Componentes Chave</li>
              <li className="list-group-item">Arquitetura da IoT</li>
              <li className="list-group-item">Aplicações da IoT</li>
              <li className="list-group-item">Desafios e Soluções</li>
              <li className="list-group-item">
                Desenvolvimento e Implementação da IoT
              </li>
              <li className="list-group-item">Estudos de Caso</li>
              <li className="list-group-item">Tendências Futuras</li>
            </ul>
          </div>
        </section>
      </FadeInOnScroll>
      {/* Team */}
      <FadeInOnScroll>
        <section className="page-section bg-light" id="team">
          <div className="container">
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
                na UFMA, ele possui mais de 7 anos de experiência exercendo o
                cargo como engenheiro eletrônico na Força Aérea Brasileira, com
                foco na área aeroespacial. Sua paixão é transformar ideias em
                realidade, e ele tem a expertise necessária para concretizar
                projetos desafiadores que envolvem eletrônica e programação.
                Arthur Macêdo irá orientá-lo e ajudá-lo a atingir seus objetivos
                neste curso.
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
          <div className="container text-white text-center">
            <div className="row">
              <div className="col my-2">
                <div className="card-body card bg-dark">
                  <div>
                    <img src={devicesImage} alt="devices"></img>
                    <span className="d-inline-block h5 mx-3">
                      Aproveite o conteúdo em qualquer dispositivo.
                    </span>
                  </div>
                  <div>
                    <div className="d-inline display-5">9,99</div>
                    <p>Oferta por tempo limitado.</p>
                  </div>
                  <div className="my-3">
                    <a
                      className="animated btn btn-primary btn-xl text-uppercase"
                      data-bs-toggle="modal"
                      href="#checkout"
                      onClick={() => {
                        ReactPixel.trackSingle(ebook_pixel, "AddToCart", data);
                      }}
                    >
                      Comprar Agora
                    </a>
                  </div>
                  <p className="my-3">
                    PAGAMENTO 100% SEGURO COM ACESSO IMEDIATO
                  </p>
                </div>{" "}
              </div>
              <div className="col my-2">
                <div className="card-body card bg-secondary">
                  <h2>Premium</h2>
                  <div className="masthead-heading d-inline-block h5 mx-3">
                    INTERNET DAS COISAS COM ESP32
                    <br />
                    Da ideia à implementação!
                  </div>
                  <div>
                    <div className="d-inline display-7 mx-3">12 x </div>
                    <div className="d-inline display-5">49,60</div>
                    <div className="my-3">ou 1 x 497</div>
                    <p>Oferta por tempo limitado.</p>
                  </div>
                  <div className="my-3">
                    <NavLink
                      to="/"
                      className="animated btn btn-danger btn-xl text-uppercase"
                      onClick={() => {
                        scrollToTop();
                        ReactPixel.trackSingleCustom(
                          ebook_pixel,
                          "LearnMore",
                          data
                        );
                      }}
                    >
                      Saiba Mais
                    </NavLink>
                  </div>
                  <p className="my-3">
                    PAGAMENTO 100% SEGURO COM ACESSO IMEDIATO
                  </p>
                </div>{" "}
              </div>
            </div>
          </div>
        </section>
      </FadeInOnScroll>
      {/* FAQ */}
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
                      que desejam aprender os fundamentos da Internet das
                      Coisas.
                    </p>
                    <p>
                      <strong>
                        Profissionais de TI e Engenheiros Eletrônicos:
                      </strong>{" "}
                      Profissionais que desejam expandir seus conhecimentos na
                      área de IoT.
                    </p>
                    <p>
                      <strong>Empreendedores e Inventores:</strong> Indivíduos
                      que desejam aprender sobre dispositivos conectados à IoT
                      para suas próprias startups ou projetos pessoais.{" "}
                    </p>
                    <p>
                      <strong>
                        Engenheiros de Software e Desenvolvedores:
                      </strong>{" "}
                      Desenvolvedores que desejam entender mais sobre
                      dispositivos IoT baseados.{" "}
                    </p>
                    <strong>Hobbistas e Entusiastas:</strong> Amadores que têm
                    interesse em eletrônica e desejam explorar a IoT.
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

export default Ebook;
