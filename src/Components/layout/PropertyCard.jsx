import React from "react";
import "./PropertyCard.css";
import { cards } from "../../data/GastronomyBlog";

function PropertyCard() {
  return (
    <>
      <section className="blog">
        {cards.map((cards) => {
          return (
            <div key={cards.id} className="card1">
              <img src={cards.image} alt="Property" />
              <div>
                <span>{cards.id}</span>
                <h1>{cards.header}</h1>

                <h2>Ingredients:</h2>
                <ul>
                  {cards.ingredients.map((i) => {
                    return <li>{i}</li>;
                  })}
                </ul>
                <h2>Instructions:</h2>
                <ol >
                  {cards.instructions.map((i) => {
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
