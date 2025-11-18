import HeroImage from "../assets/hero.jpg";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section  */}
      <section className="bg-dark text-light py-5">
        <div className="container text-center">
          <img
            src={HeroImage}
            alt="Hero Banner"
            className=" rounded mb-4 w-50"
          />
          <h1 className="fw-bold">Lascia qui i tuoi soldi!</h1>
          <p>
            Scopri i nostri prodotti di alta qualità e la soddisfazione dei
            nostri clienti.(E lascia qui i tuoi soldi)
          </p>
        </div>
      </section>

      {/* Qualità Prodotti*/}

      <div className="container text-center py-5 bg-light">
        <h2 className="mb-4">Qualità Prodotti(vuol dire che devi spendere)</h2>
        <p className="mb-4">
          I nostri prodotti sono realizzati con i migliori materiali e con
          attenzione ai dettagli(costano un botto, più di una spada laser).
        </p>
        <div className="row g-4 justify-content-center">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  Materiali Premium(di quelli costosi)
                </h5>
                <p className="card-text">
                  Solo materiali selezionati per garantire durata e comfort.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Produzione Controllata</h5>
                <p className="card-text">
                  Ogni prodotto passa attraverso rigorosi controlli di qualità.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Soddisfazione Clientela*/}

      <div className="container text-center py-5">
        <h2 className="mb-4">Soddisfazione Clientela</h2>
        <p className="mb-5">
          I nostri clienti sono al centro del nostro lavoro.
        </p>
        <div className="row g-4 justify-content-center">
          <div className="col-md-3">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Assistenza 24/7</h5>
                <p className="card-text">
                  Sempre disponibili per prendere i tuoi soldi
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Clienti Soddisfatti</h5>
                <p className="card-text">
                  La maggior parte dei nostri clienti ci raccomanda.(o almeno
                  noi diciamo così)
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card h-100 text-center">
              <div className="card-body">
                <h5 className="card-title">Recensioni Positive</h5>
                <p className="card-text">
                  Raccolte in tutte le piattaforme, sempre ottime
                  valutazioni.(non sono assolutamente fake...)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
