import "./subscribe.css";

const Subscribe = () => (
    <>
        <main>
            <div className="subscribe">
                <h2 className="subscribeHeading">
                    Start selling online for free
                </h2>

                <p className="subscribep">
                    Subscribe to our newsletter to receive early discount offer,
                    update and new product info.
                </p>
                <br />
                <form className="subcriberform">
                    <input
                        type="text"
                        placeholder="Enter your email here"
                        className="subscribermail"
                    />
                    <button className="subscriebtn"> Subscribe </button>
                </form>
            </div>
        </main>
    </>
);

export default Subscribe;
