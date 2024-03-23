import React from "react";

const sections = [
  {
    title: "Introdução",
    items: ["Ferramentas Utilizadas", "Conectando com o esp32"],
  },
  {
    title: "Programação (C)",
    items: [
      "Introdução - Printf",
      "Variáveis",
      "Tipos",
      "Operadores",
      "Tamanho dos Tipos",
      "Condicionais If Else",
      "Switch Case",
      "While",
      "For",
      "Arrays",
      "Arrays Multidimensionais",
      "String",
      "Funções de String",
      "Endereço de Memória",
      "Ponteiro",
      "Ponteiro e Arrays",
      "Funções",
      "Parâmetros",
      "Parâmetros Ponteiros",
      "Declaração de Função",
      "Structs",
      "Struck como Parâmetro",
    ],
  },
  {
    title: "Introdução à programação ESP32",
    items: ["LOG", "Delay", "Acionando LED", "Exemplos IDF", "Bibliotecas"],
  },
  {
    title: "Acionando Atuadores com Eletrônica",
    items: [
      "Mosfet",
      "Optoacoplador",
      "Relay",
      "PWM introdução",
      "Funções PWM",
      "PWM no ESP32",
      "Controle de LED e Motor",
      "Servo Motor",
    ],
  },
  {
    title: "Comunicação pela Internet",
    items: [
      "Menu de Configurações",
      "Conectando o ESP32 à internet",
      "Organizando código em lib",
      "Introdução ao MQTT",
      "Exemplo de MQTT",
      "MQTT no ESP32",
      "MQTT em lib",
      "Exemplos do platformio",
      "Introdução ao HTTP",
      "HTTP no ESP32",
      "HTTP em lib",
      "Modo de Access Point",
      "Atuando como Servidor",
      "Sincronização de Relógio",
    ],
  },
  {
    title: "Sistema Operacional em Tempo Real",
    items: [
      "FreeRTOS Introdução",
      "Tasks (Tarefas)",
      "Notifications (Notificações)",
      "Queues (Filas)",
      "Timers (Temporizadores)",
      "Semaphores (Semáforos)",
      "Exemplo com MQTT Task Notification",
    ],
  },
  {
    title: "Projeto 3D",
    items: [
      "Introdução a Projeto 3D",
      "Sketch (Esboço)",
      "Objetos 3D (PartDesign)",
      "Operações Booleanas",
      "Exemplo de Modelagem 3D",
      "Exportar arquivo STL",
    ],
  },
  {
    title: "Interface de Aplicativos",
    items: [
      "HTML elementos",
      "HTML forms",
      "CSS - Formatação de Elementos",
      "Bootstrap",
      "Acionando função javascript",
      "Javascript - mqtt",
      "Trabalhando com JSON",
      "JSON com Queue",
      "Deploy",
    ],
  },
  {
    title: "Projeto Alimentador de Pet",
    items: [
      "Introdução ao Projeto",
      "Projeto 3D",
      "Programação Embarcada",
      "Eletrônica Embarcada",
      "Interface por Aplicativo",
      "Montagem Final",
    ],
  },
];

const AccordionItem = ({ sectionNumber, title, items }) => (
  <div className="accordion-item">
    <h2 className="accordion-header" id={`heading${sectionNumber}`}>
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse${sectionNumber}`}
        aria-expanded="false"
        aria-controls={`collapse${sectionNumber}`}
      >
        {title}
      </button>
    </h2>
    <div
      id={`collapse${sectionNumber}`}
      className="accordion-collapse collapse"
      aria-labelledby={`heading${sectionNumber}`}
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body">
        <div className="d-flex flex-row flex-wrap">
          {items.map((item, index) => (
            <li key={index} className="m-2">
              {item}
            </li>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Accordion = () => {
  return (
    <div className="accordion" id="accordionExample">
      {sections.map((section, index) => (
        <AccordionItem
          key={index}
          sectionNumber={`section${index + 1}`}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
};

export default Accordion;
