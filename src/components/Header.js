import React from 'react';

/**
 * Name, Title, and Personal Details
 * @return {component}
 */
export default function Header() {
  return (
    <div className="resume-header">
      <div className="row align-items-center">
        <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
          <h2 className="resume-name mb-0 text-uppercase">Robert Carlson</h2>
          <div className="resume-tagline mb-3 mb-md-0">DevOps Engineer</div>
        </div>

        <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <i className="fas fa-phone-square fa-fw fa-lg mr-2"></i>
              <a className="resume-link" href="tel:%3c1.207.405.8620%3e">
                1.207.405.8620
              </a>
            </li>
            <li className="mb-2">
              <i className="fas fa-envelope-square fa-fw fa-lg mr-2"></i>
              <a className="resume-link" href="mailto:jobs@sheehandustryn.com">
                jobs@sheehandustryn.com
              </a>
            </li>
            <li className="mb-2">
              <i className="fas fa-globe fa-fw fa-lg mr-2"></i>
              <a className="resume-link" href="https://sheehandustryn.com">
                https://sheehandustryn.com
              </a>
            </li>
            <li className="mb-0">
              <i className="fas fa-map-marker-alt fa-fw fa-lg mr-2"></i>
              Sebago, Maine
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
