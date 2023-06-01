import { BACKGROUNDBLACK, BLACK } from "../Helpers/colors";

const AboutMe = ({aboutMe}) => {
    return(
      <div style={{backgroundColor:BACKGROUNDBLACK , padding:"80px"}} >
          <section className="view-contact mt-e" >
              <div
                className="container p-2"
                style={{ borderRadius: "1em", backgroundColor: "white" }}
              >
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <img
                      src={aboutMe.Photo}
                      alt=""
                      className="img-fluid rounded"
                      style={{ border: `1px solid ${BLACK}` }}
                    />
                  </div>
                  <div className="col-md-9">
                    <ul className="list-group">
                      <li className="list-group-item list-group-item-dark">
                        Name : {" "}
                        <span className="fw-bold">{aboutMe.Name}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        Mobile : {" "}
                        <span className="fw-bold">{aboutMe.Mobile}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        Email : {" "}<span className="fw-bold">{aboutMe.Email}</span>
                      </li>
                      <li className="list-group-item list-group-item-dark">
                        Job : {" "}<span className="fw-bold">{aboutMe.Job}</span>
                      </li>
                    </ul>
                  </div>
                </div>
                </div>
            </section>
      </div>
        
    );
};

export default AboutMe;