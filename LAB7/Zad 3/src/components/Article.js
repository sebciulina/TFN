import React from 'react';

function Article({ browsers }) {
  return (
    <article>
      {browsers.map((browser, i) => (
        <section key={i}>
          <h2>{browser.name}</h2>
          <img
            src={browser.img}
            alt={browser.name}
            width= "300"
            height= "300"
          />
          <p>{browser.desc}</p>
        </section>
      ))}
    </article>
  );

}

export default Article;