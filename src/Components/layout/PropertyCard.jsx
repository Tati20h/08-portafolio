import React from "react";
import "./PropertyCard.css";
import { cards } from "../../data/GastronomyBlog";

function PropertyCard() {
  return (
    <>
      <section className="blog">
        {cards.map((card) => {
          return (
            <div key={card.id} className="card1" id={`section${card.id}`}>
              <img src={card.image} alt="Property" />
              <div>
                <span>{card.id}</span>
                <h1>{card.header}</h1>

                <h2>Ingredients:</h2>
                <ul>
                  {card.ingredients.map((i) => {
                    return <li>{i}</li>;
                  })}
                </ul>
                <h2>Instructions:</h2>
                <ol>
                  {card.instructions.map((i) => {
                    return <li>{i}</li>;
                  })}
                </ol>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default PropertyCard;
