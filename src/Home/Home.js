import "./home.css";

const Home = () => (
    <main>
        <div className="home">
            <div className="home-text">
                <h2 className="home-text-heading">
                    {" "}
                    A different kind of a grocery store
                </h2>
                <p className="home-text-matter">
                    <br />
                    Order any goods from our store and we deliver them to your
                    door at time convenient to you.Giving the fastest delivery
                    to the customer is our main motto.
                </p>
                <div className="home-button">
                    <button className="home-btn1">
                        {" "}
                        <b>Buy now</b>{" "}
                    </button>
                </div>
            </div>

            <div className="home-image">
                <img
                    src={require("../assets/hero.png")}
                    alt="hero"
                    class="hero-bg"
                />
            </div>
        </div>
    </main>
);

export default Home;
