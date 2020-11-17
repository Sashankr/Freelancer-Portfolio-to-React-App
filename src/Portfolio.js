import React from "react";
import ProjectCard from "./ProjectCard";
import cabin from "../src/images/portfolio/cabin.png";
import cake from "../src/images/portfolio/cake.png";
import circus from "../src/images/portfolio/circus.png";
import game from "../src/images/portfolio/game.png";
import safe from "../src/images/portfolio/safe.png";
import submarine from "../src/images/portfolio/submarine.png";

const Portfolio = () =>(
  <div data-spy="scroll" id="portfolio" className="p-5 container-fluid">
    <div className="row">
      <div className="col-12 col-md">
          <h2 className="text-lg-center">PORTFOLIO</h2>
          <p className="separator3"></p>
      </div>
    </div>
    <br/>
    <div className="row">
      <div className="col-12 col-md-4 mb-5">
      {/* card1 */}
      <ProjectCard cardImage={cabin} modalId="cabin" modalTarget="#cabin" cardAlt="cabin" modalHeading="LOG CABIN" modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." />
      </div>

      <div className="col-12 col-md-4 mb-5">
      {/* card2 */}
      <ProjectCard cardImage={cake} modalId="cake" modalTarget="#cake" cardAlt="cake" modalHeading="TASTY CAKE" modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." />
      </div>

      <div className="col-12 col-md-4 mb-5">
      {/* card3 */}
      <ProjectCard cardImage={circus} modalId="circus" modalTarget="#circus" cardAlt="circus" modalHeading="CIRCUS TENT" modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." />
      </div>

      <div className="col-12 col-md-4 mb-5">
      {/* card4 */}
      <ProjectCard cardImage={game} modalId="game" modalTarget="#game" cardAlt="game" modalHeading="CONTROLLER" modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." />

      </div>

      <div className="col-12 col-md-4 mb-5">
      {/* card5 */}
      <ProjectCard cardImage={safe} modalId="safe" modalTarget="#safe" cardAlt="safe" modalHeading="LOCKED SAFE" modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." />
      </div>


      <div className="col-12 col-md-4 mb-5">
      {/* card6 */}
      <ProjectCard cardImage={submarine} modalId="submarine" modalTarget="#submarine" cardAlt="submarine" modalHeading="SUBMARINE" modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." />
      </div>
    </div>

  </div>

)

export default Portfolio;