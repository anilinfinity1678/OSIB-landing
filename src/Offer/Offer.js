import "./offer.css";
const Offer = () => (
    <>
        <main>
            <div className="special-page">
                <h2 className="special-page-heading">
                    Special offer of this week
                </h2>
                <p className="special-page-line">
                    100% sure delivery without contact there courier
                </p>

                <div className="time-box">
                    <button className="time">04</button>{" "}
                    <span className="deto"> : </span>
                    <button className="time">10</button>{" "}
                    <span className="deto"> : </span>
                    <button className="time">20</button>
                    <span className="deto"> : </span>
                    <button className="time">00</button>
                </div>
                <br />
                <br />

                <div className="offerss">
                    <div className="offer-box">
                        <h2 className="offer-box-h">
                            Enjoy the special offer upto 40% on dry fruits
                        </h2>
                        <p className="offer-box-h">at 24-30 feb 2023</p>
                    </div>
                    <div className="offer-box">
                        <h2 className="offer-box-h">
                            Enjoy the special offer upto 40% on chocolates
                        </h2>
                        <p className="offer-box-h">at 24-30 feb 2023</p>
                    </div>
                    <div className="offer-box">
                        <h2 className="offer-box-h">
                            Enjoy the special offer upto 30% on fruits
                        </h2>
                        <p className="offer-box-h">at 24-30 feb 2023</p>
                    </div>
                </div>
            </div>
        </main>
    </>
);
//
export default Offer;
