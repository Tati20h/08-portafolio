import { useState } from "react";
import "./Accordions.css";
import { cards } from "../../data/GastronomyBlog";


export const Accordions = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <section className="gastronomy">
      {cards.map((card, index) => {
        const isActive = active === index ? "active" : "";
        return (
          <article
            key={card.image}
            className={`${isActive} artGastronomy`}
            onClick={() => handleToggle(index)}
          >
            <img src={card.image} />
            <div className="content">
              <span className="material-symbols-outlined">LH</span>
              <div>
                <h3>{card.header}</h3>
               
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};