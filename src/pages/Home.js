import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Available datasets</h1>

      <section>
        <div className="card">
          <img className="preview" src="mgif.gif" alt="mgif" />
          <div className="card-body">
            <h2 className="header">cartoon</h2>
            <p className="card-p">
              Movements of different cartoon
              animals with simple background.
              Videos are about 5 seconds long.
            </p>

            <Link to="/Animate_mgif">
              <button className="button">Explore</button>
            </Link>
          </div>
        </div>

        <div className="card">
          <video className="preview" src="fashion.mp4" autoPlay loop muted />
          <div className="card-body">
            <h2 className="header"> Fashion</h2>
            <p className="card-p">
            Movements of different models poses with  simple background.
            Videos are about 20 seconds long.
            </p>
            <Link to="Animate">
              <button className="button">Explore</button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
