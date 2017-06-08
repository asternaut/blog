import React from 'react';

const Portfolio = (props) => {
  return(
    <div>

      <div className="jubotron">
        <div className="jumbotronText">
          <p> je m'apelle sienna </p>
          <p> I'm a front end web designer and developer for hire </p>
        </div>
        <div className="jubotronSM">
        </div>
      </div>

      <div className="portfolioBody">

        <div className="pbDescription">
          <div className="pbHeader">
            <h1> is for sienna </h1>
          </div>
          <p>And for spontaneous, silly, sassy, and strong. She’s a fighter because her heart is super full of passion. Her style is simple and lovely, like coffee with a touch of sugar. More than anything, Sienna is a craftsgirl of the web.</p>
        </div>

        <hr/>
        <h1> portfolio </h1>

        <div className="portfolioShowcase">
          <figure className="portfolioCinema"></figure>

          <figcaption className="showcaseDescription">
            <h3> "Crud" Imiplimentation</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
          </figcaption>
        </div>

        <div className="portfolioLineup">
          <div><span>PHP</span><span>wordpress theme</span></div>
          <div><span>JS</span><span>FIZZBUZZ</span></div>
          <div><span>CSS</span><span>React practice</span></div>
        </div>

      </div>

    </div>
  )
}


export default Portfolio;
