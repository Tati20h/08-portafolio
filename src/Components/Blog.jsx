import React from "react";
import { Accordions } from "./layout/Accordions";
import PropertyCard from "./layout/PropertyCard";
import "../styles/Blog.css";

export const Blog = () => {
  return (
    <div className="page">
      <section className="gastronomy">
        <Accordions />
      </section>

      <section className="blog">
        <PropertyCard />
      </section>
    </div>
  );
};
