import React, { useState } from "react";
import "../styles/Banner.scss";

const Banner = (props) => {
  if (props.show) {
    return (
      <section className="info-box">
        <div className="history">
          <h2>The Haiku</h2>
          <p>
            A haiku is traditionally a Japanese poem consisting of three short
            lines that do not rhyme. The origins of haiku poems can be traced
            back as far as the 9th century.
          </p>
          <h2>Traditional Haiku</h2>
          <p>
            In Japanese, there are five "moras" in the first and third line, and
            seven in the second, following the standard 5-7-5 structure of
            haiku. A mora is a sound unit, much like a syllable, but is not
            identical to it. This rhythm is often lost in translation, as not
            every English word has the same number of syllables, or moras, as
            its Japanese counterpart. For example, haiku has two syllables in
            English and in Japanese, it has three moras.
          </p>
          <h2>Modern Haiku</h2>
          <p>
            Many modern western poets do not subscribe to the 5-7-5 pattern. The
            Academy of American Poets recognizes this evolution, but maintains
            that several core principles remain woven into the tapestry of
            modern haiku. That is, a haiku still focuses on one brief moment in
            time, employs provocative, colorful imagery, and provides a sudden
            moment of illumination.
          </p>
          <h2>Structure of the Haiku</h2>
          <p>
            A haiku consists of three lines, with the first and last lines
            having five "moras," and the middle line having seven (referred to
            as the 5-7-5 structure). Since the moras do not translate well into
            English, the haiku has been adapted to where syllables are used as
            moras. <br />
            <br /> Haiku poems started out as a popular activity in the 9th-12th
            centuries in Japan called "tanka." A tanka was a progressive poem,
            where one person would write the first three lines with a 5-7-5
            structure, and the next person would add a section with a 7-7
            structure. The chain would continue in this fashion.
            <br />
            <br /> The first verse was called a "hokku" and set the mood for the
            rest of the verses. Sometimes there were hundreds of verses and
            authors of the hokku were often admired for their skill. In the 19th
            century, the hokku took on a life of its own and began to be written
            and read as an individual poem. The word haiku is derived from
            hokku.
          </p>
          <p className="references">
            <a
              href="https://examples.yourdictionary.com/examples-of-haiku-poems.html"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fas fa-link"></i> Source
            </a>
          </p>
        </div>
        <i
          onClick={() => props.setShow(false)}
          className="far fa-times-circle"
        ></i>
      </section>
    );
  } else {
    return <></>;
  }
};

export default Banner;
