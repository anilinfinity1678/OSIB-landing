import "./feature.css";

const Feature = () => (
    <>
        <main>
            <div className="feature">
                <div className="feature-left">
                    <h2 className="feature-left-h">
                        A different kind of grocery store
                    </h2>

                    <p className="feature-left-p">
                        Order any goods from our store and we deliver them to
                        your door at time convenient to you.Giving the fastest
                        delivery to the customer is our main motto.
                    </p>

                    <button className="feature-left-button"> Buy now</button>
                </div>
                <div className="feature-right">
                    <div className="image-feature">
                        <img
                            src={require("../assets/shopcart.webp")}
                            alt=""
                            className="feature-img"
                        />
                        <div className="image-f">
                            <h2 className="f-h">your order receive</h2>
                            <p className="f-p">
                                you order your favorite products online
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="image-feature">
                        <img
                            src={require("../assets/box.png")}
                            alt=""
                            className="feature-img"
                        />
                        <div className="image-f">
                            <h2 className="f-h">Assistant Collects</h2>
                            <p className="f-p">
                                A personal assistant collect product from your
                                list
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="image-feature">
                        <img
                            src={require("../assets/delboy.png")}
                            alt=""
                            className="feature-img"
                        />
                        <div className="image-f">
                            <h2 className="f-h">Order delivery </h2>
                            <p className="f-p">
                                We deliver to the door at a time convenient for
                                you
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
);

export default Feature;
