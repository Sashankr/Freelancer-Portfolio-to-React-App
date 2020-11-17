import React from "react";
import ProjectCard from "./ProjectCard";

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
      <ProjectCard cardImage="/assets/portfolio/cabin.png" modalId="cabin" modalTarget="#cabin" cardAlt="cabin" modalHeading="LOG CABIN" modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." />
      </div>

      <div className="col-12 col-md-4 mb-5">
      {/* card2 */}
      <ProjectCard cardImage="/assets/portfolio/cake.png" modalId="cake" modalTarget="#cake" cardAlt="cake" modalHeading="TASTY CAKE" modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." />
      </div>

      <div className="col-12 col-md-4 mb-5">
      {/* card3 */}
      <ProjectCard cardImage="/assets/portfolio/circus.png" modalId="circus" modalTarget="#circus" cardAlt="circus" modalHeading="CIRCUS TENT" modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." />
      </div>

      <div className="col-12 col-md-4 mb-5">
      {/* card4 */}
      <ProjectCard cardImage="/assets/portfolio/game.png" modalId="game" modalTarget="#game" cardAlt="game" modalHeading="CONTROLLER" modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." />

      </div>

      <div className="col-12 col-md-4 mb-5">
      {/* card5 */}
      <ProjectCard cardImage="/assets/portfolio/safe.png" modalId="safe" modalTarget="#safe" cardAlt="safe" modalHeading="LOCKED SAFE" modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." />
      </div>


      <div className="col-12 col-md-4 mb-5">
      {/* card6 */}
      <ProjectCard cardImage="/assets/portfolio/submarine.png" modalId="submarine" modalTarget="#submarine" cardAlt="submarine" modalHeading="SUBMARINE" modalText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam." />
      </div>
    </div>

  </div>

)

export default Portfolio;