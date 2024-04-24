import React from 'react';
import cat from '../../assets/img/cat.jpg';
import desktop from '../../assets/img/desktop.jpeg';
import wine from '../../assets/img/wine.jpg';
import love from '../../assets/img/love.jpg';
import sports from '../../assets/img/sport.jpg';
import mont from '../../assets/img/Mont.jpg';
import './Gallery.css';


export function Gallery() {
  return (
    <>

      <div className="gallery">

        <article class="cardi">
          <figure>
            <img src={cat} alt="Puppy" />
            <figcaption>
              <h3>Puppy</h3>
            </figcaption>
          </figure>
        </article>

        <article className="cardi">
          <figure>
            <img src={desktop} alt="Desktop" />
            <figcaption>
              <h3>Desktop</h3>
            </figcaption>
          </figure>
        </article>
        <article className="cardi">
          <figure>
            <img
              src={wine}
              alt="Wine" />
            <figcaption>
              <h3>Wine</h3>
            </figcaption>
          </figure>
        </article>

        <article className="cardi">
          <figure>
            <img src={love} alt="Love" />
            <figcaption>
              <h3>Partner</h3>
            </figcaption>
          </figure>
        </article>

        <article class="cardi">
          <figure>
            <img src={sports} alt="Puppy" />
            <figcaption>
              <h3>Trekking</h3>
            </figcaption>
          </figure>
        </article>

        <article class="cardi">
          <figure>
            <img src={mont} alt="mont" />
            <figcaption>
              <h3>Canyoping</h3>
            </figcaption>
          </figure>
        </article>



      </div>

    </>
  )
}
