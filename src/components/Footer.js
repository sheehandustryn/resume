import React from 'react';

/**
 * Footer section
 * @return {function}
 */
export default function Footer() {
  return (
    <div className="resume-footer text-center">
      <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
        <li className="list-inline-item mb-lg-0 mr-3">
          <a
            className="  "
            href="https://github.com/sheehandustryn"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fab fa-github-square fa-2x mr-2"
              data-fa-transform="down-4"
            ></i>
            <span className="d-none d-lg-inline-block text-muted">
              https://github.com/sheehandustryn
            </span>
          </a>
        </li>
        <li className="list-inline-item mb-lg-0 mr-3">
          <a
            className="  "
            href="https://www.linkedin.com/in/robertjohncarlson"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className="fab fa-linkedin fa-2x mr-2"
              data-fa-transform="down-4"
            ></i>
            <span className="d-none d-lg-inline-block text-muted">
              https://www.linkedin.com/in/robertjohncarlson
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
