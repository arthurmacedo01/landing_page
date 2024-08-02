import ReactPixel from "react-facebook-pixel";

import "../js/scripts.js";
import "../css/styles.css";
import "../css/custom.css";

import arthurImage from "../assets/img/team/arthur.png";
import closeImage from "../assets/img/close-icon.svg";
import FadeInOnScroll from "../components/FadeInOnScroll.js";
import React, { useState } from "react";

import ebook_cover from "../assets/img/ebook2_cover.png";
import classes from "./Ebook.module.css";

function Capture() {
  const ebook_pixel = "387730897082505";
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
  };
  ReactPixel.init(ebook_pixel, null, options);
  ReactPixel.pageView(); // For tracking page view
  const queryParameters = new URLSearchParams(window.location.search);

  var pixel_data = {
    placement_id: queryParameters.get("placement_id"),
    campaing_id: queryParameters.get("campaing_id"),
    adset_id: queryParameters.get("adset_id"),
    ad_id: queryParameters.get("ad_id"),
  };
  pixel_data.contents = [{ id: "eBook", quantity: 1 }];

  ReactPixel.trackSingle(ebook_pixel, "ViewContent", pixel_data);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here

    // Define the database URL and path where you want to insert the data
    const databaseUrl =
      "https://landingpage-6bf56-default-rtdb.firebaseio.com/email-list.json";

    const downloadUrl =
      "https://drive.google.com/uc?export=download&id=1tuS4v5PkBwTvF8U5k6-aW4nzlsynxpG9";

    // Data to insert
    const data = {
      name,
      email,
      phone,
      timestamp: Date.now(),
    };

    // Use fetch API to make a POST request to insert the data
    fetch(databaseUrl, {
      method: "POST", // Use POST to insert new records
      body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          // Verifica se o status da resposta não é 200
          throw new Error("Network response was not ok");
        }
        return response.json();
      }) // Parse the JSON response
      .then((data_received) => {
        // Inicia o download
        window.open(downloadUrl, "_blank");
        // ReactPixel.trackSingle(ebook_pixel, "Purchase", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="App" id="page-top">
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
            eBook: Internet das Coisas
          </h1>
          <h2 className="masthead-subheading">
            Desvendando a Conectividade do Futuro
          </h2>
          <div className="portfolio-item">
            <a
              className="animated btn btn-primary btn-xl text-uppercase"
              data-bs-toggle="modal"
              href="#checkout"
              onClick={() => {
                ReactPixel.trackSingle(ebook_pixel, "AddToCart", pixel_data);
              }}
            >
              Baixar agora
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
                Explore a Internet das Coisas (IoT). Escrito tanto para
                entusiastas curiosos quanto para profissionais, este guia
                oferece uma abordagem a tópicos da IoT.
                <br />A Internet das Coisas (IoT) refere-se a uma rede
                interconectada de dispositivos físicos incorporados com
                sensores, software e outras tecnologias que permitem a coleta e
                troca de dados. A IoT tem aplicações em diversas áreas, como
                saúde, agricultura, indústria, transporte e em casas
                inteligentes, contribuindo para a eficiência, automação e
                melhoria da tomada de decisões. <br />
                Serão apresentadas as tendências futuras, preparando-o para
                liderar na revolução desta tecnologia.
              </p>
            </div>
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
                Arthur Macêdo possui uma sólida formação, incluindo graduação em
                engenharia mecatrônica na UnB e mestrado em controle e automação
                na UFMA, atuamente cursando doutorado em engenharia eletrônica e
                computação no ITA. Ele possui mais de 7 anos de experiência como
                engenheiro eletrônico na Força Aérea Brasileira, com foco na
                área aeroespacial. Sua paixão é transformar ideias em realidade,
                e ele tem a expertise necessária para concretizar projetos
                desafiadores que envolvem eletrônica e programação.
              </p>
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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content my-auto">
            <div className="close-modal" data-bs-dismiss="modal">
              <img src={closeImage} alt="Close modal" />
            </div>
            {/* <!-- Embedded-Page--> */}
            <form onSubmit={handleSubmit}>
              {/* Name field */}
              <div className="mb-3 px-3">
                <label htmlFor="userName" className="form-label">
                  Nome
                </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  id="userName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Insira seu Nome"
                />
              </div>
              {/* Email field */}
              <div className="mb-3 px-3">
                <label htmlFor="userEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="form-control"
                  id="userEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Digite seu melhor email"
                />
              </div>
              {/* Email field */}
              <div className="mb-3 px-3">
                <label htmlFor="userPhone" className="form-label">
                  Telefone (Opcional)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userPhone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Telefone com DDD"
                />
              </div>
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-xl">
                Baixar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capture;
