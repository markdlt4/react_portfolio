import React from "react";
import Mark from '../profile_pic.png'

export default function About() {
  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col">
            <div className="container mb-5">
              <div className="row">
                <div className="col-md-4 col-lg-3">
                  <img src={Mark} alt="Mark" width="100%" />
                </div>
                <div className="col-md-8 col-lg-9">
                  My name is Mark Toups, I'm originally from South Louisiana.
                  Upon High School graduation, I enlisted into the United States
                  Army as a Cav Scout. Not long after training I was deployed to
                  Iraq, where I served the next 15 months. After returning home
                  I finished my active duty contract and decide to leave the
                  military and enrolled in school. While I was in school I began
                  to work part time as a bartender. I quickly fell in love with
                  food and beverage, particularly cooking so much I decided to
                  go to culinary school. I graduated culinary school and started
                  cooking. After years of climbing the ranks in kitchens and
                  perfecting my craft I began to challenge myself more and
                  created my first business while holding a full time position
                  as Executive Chef for a restaurant group. While creating my
                  business, I took a liking to the creation of the digital side
                  of things. I really enjoyed working with developers and
                  desgining the website etc. In March of 2019 I sold the company
                  Id created and set my eyes on possibly leaving Food and
                  Beverage as a whole and trying to take on tech. Fast forward
                  to 2020, Covid-19 rolled in and that was the sign I needed. In
                  March of 2020 I officially resigned from my position and
                  enrolled at The University of Texas to learn how to code.
                </div>
              </div>
            </div>
            <h1 className="display-4 mb-5">My Experience</h1>
            <div className="card">
              <div className="card-header">
                <h4>Capital Food Company</h4>
              </div>
              <div className="card-body">
                <p>Owner/Operator</p>
                <ul>
                  <li>
                    Designed and Developed all business concepts, menus, design,
                    content and schematics of kitchen space.
                  </li>
                  <li>
                    Ran research and development as well as organized tastings
                    for potential partnerships at various bars/venues.
                  </li>
                  <li>Maintained all zones of social media and marketing.</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Edgewise Hospitality</h4>
              </div>
              <div className="card-body">
                <p>Executive Chef</p>
                <ul>
                  <li>Lead all back of house operations.</li>
                  <li>Created all menus throughout the restaurant group.</li>
                  <li>
                    Managed all purveyor relationships as well as ran and
                    operated cost to maximize profitability across every venue
                    throughout Edgewise Hospitality
                  </li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-header">
                <h4>Uchi Austin</h4>
              </div>
              <div className="card-body">
                <p>Chef</p>
                <ul>
                  <li>Lead all prep team operations.</li>
                  <li>
                    Worked to create and develop specials to cycle on weekly
                    menus.
                  </li>
                  <li>Cleaned all fish and prepped for maki stations.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
