import React from "react";
import Mark from '../profile_pic.png'


export default function Portfolio() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h1 className="display-4 mb-5">My Portfolio</h1>
            <div className="card-deck">
              <div className="card mb-3">
                <img
                  src={Mark}
                  className="card-img-top"
                  alt="./profile_pic.png"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#!">Github</a>
                  </small>
                </div>
              </div>
              <div className="card mb-3">
                <img
                  src={Mark}
                  className="card-img-top"
                  alt="./profile_pic.png"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#!">Github</a>
                  </small>
                </div>
              </div>
              <div className="card mb-3">
                <img
                  src={Mark}
                  className="card-img-top"
                  alt="./profile_pic.png"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#!">Github</a>
                  </small>
                </div>
              </div>
            </div>
            <div className="card-deck">
              <div className="card mb-3">
                <img
                  src={Mark}
                  className="card-img-top"
                  alt="./profile_pic.png"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#!">Github</a>
                  </small>
                </div>
              </div>
              <div className="card mb-3">
                <img
                  src={Mark}
                  className="card-img-top"
                  alt="./profile_pic.png"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#!">Github</a>
                  </small>
                </div>
              </div>
              <div className="card mb-3">
                <img
                  src={Mark}
                  className="card-img-top"
                  alt="./profile_pic.png"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <a href="#!">Github</a>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
