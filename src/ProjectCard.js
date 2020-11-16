import React from "react";

const ProjectCard = ({cardImage,modalId,modalTarget,cardAlt,modalHeading,modalText}) =>(

  // Card

  <div className="row no-gutters">
  <div className="col-12 col-md image-container">
    <img className="img-fluid image" src={cardImage} alt={cardAlt} />
    <div className="overlay">
    <button href="#" className="icon" title="User Profile" data-toggle="modal" data-target={modalTarget}>
    <i className="fa fa-plus"></i>
    </button>
  </div>
  </div>

  {/* Modal */}

  <div className="modal fade bd-example-modal-lg" id={modalId} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header text-center">
        <h5 className="modal-title" id="exampleModalLongTitle">{modalHeading}</h5>
        <button type="button" className="close no-gutters" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <p id="separator2"></p>
      <img className="img-fluid" src={cardImage} alt={cardAlt} />
        <p className="mt-4 text-center modal-text">{modalText}</p>
      </div>
      <div className="modal-footer d-flex justify-content-center align-items-center">
        <button className="modal-button btn" type="button" data-dismiss="modal"><span aria-hidden="true" className="modal-cross pr-2">&times;</span>Close Window</button>
      </div>
    </div>
  </div>
</div>

</div>
  
)

export default ProjectCard;