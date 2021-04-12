import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <h1 className="display-4 mb-5">My Contact</h1>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <table className="table">
                    <tr>
                      <th className="fas fa-signature"></th>
                      <td>Mark Toups</td>
                    </tr>
                    <tr>
                      <th className="fas fa-phone-volume"></th>
                      <td>
                        <a href="tel:+12145522330">(214)552-2330</a>
                      </td>
                    </tr>
                    <tr>
                      <th className="far fa-envelope"></th>
                      <td>
                        <a href="mailto:markdlt4@gmail.com">Markdlt4@gmail</a>
                      </td>
                    </tr>
                    <tr>
                      <th className="fab fa-instagram"></th>
                      <td>
                        <a href="linkto:markduce@instagram.com">Markducre</a>
                      </td>
                    </tr>

                    <tr>
                      <th className="fab fa-linkedin"></th>
                      <td>
                        <a href="linkto:linkedin.com/in/marktoups">LinkedIn</a>
                      </td>
                    </tr>
                  </table>
                </div>
                <div className="col-md-6 mt-5 mt-md-0">
                  <h4 className="mb-3">Message Me</h4>
                  <form>
                    <div className="form-group">
                      <label for="formGroupExampleInput">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        placeholder="Company/Person Name"
                      />
                    </div>
                    <div className="form-group">
                      <label for="formGroupExampleInput2">Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Please enter valid email address."
                      />
                    </div>
                    <div className="form-group">
                      <label for="exampleFormControlTextarea1">Message</label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <button className="submit btn btn-danger">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
