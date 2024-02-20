import React from 'react';

const ErrorPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center">
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"> <span className="text-danger">Opps!</span> Página não encontrada.</p>
            <p className="lead">
              A página que você está procurando não foi encontrada. É possível que o endereço esteja incorreto ou que a página tenha sido movida.
            </p>
            <a href="/" className="btn btn-primary">Voltar para a página inicial</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
