import "./review.css";

import React from "react";

const Card = (props) => {
    return (
        <main className="revi">
            <div className="reviews">
                <div className="reviewbody">
                    <img
                        src={`${props.image}`}
                        alt="JHKUJN"
                        className="reviewperson"
                    />
                    <h2 className="personName">{props.name}</h2>
                    <p className="personProffesion">{props.profession}</p>
                    <br />
                    <p className="reviewMatter">{props.description}</p>
                </div>
            </div>
        </main>
    );
};

const Review = () => {
    const cards = [
        {
            title: "card 1",
            image: require("../assets2/elsa.jpg"),
            name: "Emma watson",
            description: "Helo guys this go and buy is a great website",
        },
        {
            title: "Card 2",
            image: require("../assets2/henry2.jpg"),
            name: "John bush",
            description: "Helo guys this go and buy is a great website",
        },
        {
            title: "Card 3",
            image: require("../assets2/jenny.jpg"),
            name: "Else",
            description: "Helo guys this go and buy is a great website",
        },
    ];

    return (
        <div className="rev">
            <h2 className="reviewH2">Here what our customers has to say</h2>
            <div className="CardS">
                {cards.map((card) => (
                    <Card
                        key={card.title}
                        title={card.title}
                        image={card.image}
                        name={card.name}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default Review;
