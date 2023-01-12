import React from 'react';

/**
 * Intro section
 * @return {function}
 */
export default function Intro() {
  return (
    <div className="resume-intro py-3">
      <div className="media flex-column flex-md-row align-items-center">
        <div className="media-body text-left">
          <p className="mb-0">
            Spent 8 years using my skills to assist development teams in
            increasing their velocity without sacrificing code quality or
            service reliability and security. Deep experience with AWS and
            Kubernetes.
          </p>
        </div>
      </div>
    </div>
  );
}
