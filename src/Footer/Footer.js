import "./footer.css";

const Footer = () => (
    <>
        <main>
            <div className="footer">
                <div className="footerFirstRow">
                    <h2 className="orange">Orange</h2>

                    <p className="orangemotto">
                        we start with a discovery call to understand your
                        company. The problems you face.
                    </p>
                </div>

                <div className="FooterLeft">
                    <div className="footerSec">
                        <h2 className="fSecHeading">Product catalog</h2>
                        <ul className="fu">
                            <li>Packets</li>
                            <li>Web development</li>
                            <li>vegetables</li>
                            <li>Soft cheese</li>
                        </ul>
                    </div>
                    <div className="footerThird">
                        <h2 className="fThirdHeading">Sales</h2>
                        <ul className="fu">
                            <li>Coca-drinks</li>
                            <li>Cheese</li>
                            <li>Career</li>
                            <li>Management</li>
                        </ul>
                    </div>
                    <div className="footerFourth">
                        <h2 className="fFourthHeading">Company</h2>
                        <ul className="fu">
                            <li>Herbs & Seasoning</li>
                            <li>Party Trays</li>
                            <li>Veggies</li>
                            <li> Fresh Fruits</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </>
);

export default Footer;
