export default function CardCenter() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card text-center shadow">
        <div className="card-header">Non avrai informazioni</div>

        <div className="card-body">
          <p className="card-text">Non ti diremo assolutamente nulla</p>
        </div>

        <div className="card-footer d-flex justify-content-around">
          <span>Trasparenza</span>
          <span>Trasparenza</span>
          <span>Trasparenza</span>
        </div>
      </div>
    </div>
  );
}
