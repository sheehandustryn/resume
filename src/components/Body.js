import React from 'react';

/**
 * Body section
 * @return {function}
 */
export default function Body() {
  return (
    <div className="resume-body">
      <div className="row">
        <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
          <section className="skills-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-4">
              Skills
            </h3>
            <div className="item">
              <div className="item-heading row">
                <h4 className="item-title col-6">CI/CD:</h4>
                <div className="item-content col-6 text-left text-md-left">
                  Gitlab, Jenkins
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-heading row">
                <h4 className="item-title col-6">Cloud Providers:</h4>
                <div className="item-content col-6 text-left text-md-left">
                  AWS, Azure, GCP
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-heading row">
                <h4 className="item-title col-6">
                  Containerization and Container Orchestration
                </h4>
                <div className="item-content col-6 text-left text-md-left">
                  AWS EKS, Docker Engine, Helm, Kubernetes
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-heading row">
                <h4 className="item-title col-6">Data</h4>
                <div className="item-content col-6 text-left text-md-left">
                  MSSQL, PostgreSQL, Redis, Snowflake
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-heading row">
                <h4 className="item-title col-6">Infrastructure as Code</h4>
                <div className="item-content col-6 text-left text-md-left">
                  HashiCorp Terraform, Redhat Ansible, Terragrunt
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-heading row">
                <h4 className="item-title col-6">Frontend and Design</h4>
                <div className="item-content col-6 text-left text-md-left">
                  Concepts App, CSS3, Figma, HTML5, JavaScript/TypeScript,
                  NextJS, ReactJS
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-heading row">
                <h4 className="item-title col-6">
                  Monitoring and Observability
                </h4>
                <div className="item-content col-6 text-left text-md-left">
                  ELK Stack, Prometheus
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-heading row">
                <h4 className="item-title col-6">Operating Systems</h4>
                <div className="item-content col-6 text-left text-md-left">
                  Linux (Debian-based, RHEL-based), MacOS, Windows (Client,
                  Server)
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-heading row">
                <h4 className="item-title col-6">
                  Programming and Scripting Languages
                </h4>
                <div className="item-content col-6 text-left text-md-left">
                  Bash, Go(lang), Powershell, Python 3, Scala 2/3
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-heading row">
                <h4 className="item-title col-6">
                  Security and Penetration Testing
                </h4>
                <div className="item-content col-6 text-left text-md-left">
                  Burp Suite, Ffuf, Hashcat, John the Ripper, Metasploit, NMap,
                  pfSense, TruffleHog
                </div>
              </div>
            </div>
          </section>
          <section className="work-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-4">
              Work Experience
            </h3>
            <div className="item mb-3">
              <div className="item-heading row align-items-center mb-2">
                <h4 className="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0">
                  DevOps Engineer
                </h4>
                <div className="item-meta col-12 col-md-6 col-lg-6 text-muted text-left text-md-right">
                  Caesars Digital | 2021 - Present
                </div>
              </div>
              <div className="item-content">
                <p></p>
                <ul className="resume-list">
                  <li>First member of MarTech DevOps Team</li>
                  <li>Created CI/CD Pipelines for all MarTech projects</li>
                  <li>
                    Created AWS EKS infrastructure for all MarTech services
                  </li>
                  <li>
                    Created and managed additional AWS infrastructure (e.g.
                    Cloudfront, RDS postgres and redis, S3, iam policies and
                    user, VPCs, EC2 instances, ALBs, NLBs, WAFs) using
                    Terraform.
                  </li>
                  <li>
                    Created Monitoring and Observability Platform utilizing ELK
                    and Prometheus using Terraform and Ansible.
                  </li>
                  <li>
                    Assisted with deployment/management of Snowflake,
                    PostgreSQL, and Kafka resources utilizing IaC consisting of
                    Terraform, Ansible, and python/bash scripts.
                  </li>
                </ul>
              </div>
            </div>
            <div className="item mb-3">
              <div className="item-heading row align-items-center mb-2">
                <h4 className="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0">
                  Senior DevOps Engineer
                </h4>
                <div className="item-meta col-12 col-md-6 col-lg-6 text-muted text-left text-md-right">
                  Kaseya | 2019 - 2021
                </div>
              </div>
              <div className="item-content">
                <p></p>
                <ul className="resume-list">
                  <li>
                    Created and managed CI/CD pipelines for flagship SaaS
                    offerings and self-hosted packages
                  </li>
                  <li>
                    Lead adoption of IaC by heading project to automate process
                    of VMWare resource deployment using Terraform and Ansible
                  </li>
                </ul>
              </div>
            </div>
            <div className="item mb-3">
              <div className="item-heading row align-items-center mb-2">
                <h4 className="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0">
                  Windows Deployment and Systems Engineer
                </h4>
                <div className="item-meta col-12 col-md-6 col-lg-6 text-muted text-left text-md-right">
                  Stadium Technology Group | 2018 to 2019
                </div>
              </div>
              <div className="item-content">
                <p></p>
                <ul className="resume-list">
                  <li>
                    Created IaC for infrastructure deployment of self-hosted
                    product offering using Chef
                  </li>
                </ul>
              </div>
            </div>
            <div className="item mb-3">
              <div className="item-heading row align-items-center mb-2">
                <h4 className="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0">
                  DevOps Engineer
                </h4>
                <div className="item-meta col-12 col-md-6 col-lg-6 text-muted text-left text-md-right">
                  Kaseya | 2016 - 2018
                </div>
              </div>
              <div className="item-content">
                <p></p>
                <ul className="resume-list">
                  <li>
                    Created and managed CI/CD pipelines for flagship SaaS
                    offerings and self-hosted packages
                  </li>
                </ul>
              </div>
            </div>
            <div className="item mb-3">
              <div className="item-heading row align-items-center mb-2">
                <h4 className="item-title col-12 col-md-6 col-lg-6 mb-2 mb-md-0">
                  Systems Administrator
                </h4>
                <div className="item-meta col-12 col-md-6 col-lg-6 text-muted text-left text-md-right">
                  Kareo | 2014 - 2016
                </div>
              </div>
              <div className="item-content">
                <p></p>
                <ul className="resume-list">
                  <li>
                    Supported all Active Directory, Office365, office
                    networking, and phone systems
                  </li>
                  <li>
                    Created PowerShell scripts to automate user onboarding
                    including: AD resource reation/management (users, groups,
                    group memberships, etc) and Exchange mailbox and
                    distribution group creation/management.
                  </li>
                  <li>
                    Created PowerShell scripts to automate migration from pure
                    on-prem AD and Exchange infrastructure to hybrid AD and
                    Office365 AD and Exchange.
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
          <section className="education-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-4">
              Education
            </h3>
            <ul className="list-unstyled resume-education-list">
              <li className="mb-3">
                <div className="resume-degree font-weight-bold">
                  BSc Informatics
                </div>
                <div className="resume-degree-org text-muted">
                  University of Nevada, Las Vegas
                </div>
                <div className="resume-degree-time text-muted"></div>
              </li>
            </ul>
          </section>
          <section className="education-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-4">
              Certifications
            </h3>
            <ul className="list-unstyled resume-awards-list">
              <li className="mb-3">
                <div className="font-weight-bold">
                  Certified Kubernetes Administrator
                </div>
              </li>
              <li className="mb-3">
                <div className="font-weight-bold">
                  In Progress: AWS Certified DevOps Engineer Professional
                </div>
              </li>
              <li className="mb-3">
                <div className="font-weight-bold">
                  In Progress: CompTIA PenTest&#43;
                </div>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
