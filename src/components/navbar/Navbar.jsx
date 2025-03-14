import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="#" className="nav-link">
            <p className="link-text logo-text" style={{ fontSize: "inherit" }}>
              Top
            </p>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="house-user"
              className="svg-inline--fa fa-house-user fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M570.69,236.27,512,184.44V48a16,16,0,0,0-16-16H432a16,16,0,0,0-16,16V99.67L314.78,10.3C308.5,4.61,296.53,0,288,0s-20.46,4.61-26.74,10.3l-256,226A18.27,18.27,0,0,0,0,248.2a18.64,18.64,0,0,0,4.09,10.71L25.5,282.7a21.14,21.14,0,0,0,12,5.3,21.67,21.67,0,0,0,10.69-4.11l15.9-14V480a32,32,0,0,0,32,32H480a32,32,0,0,0,32-32V269.88l15.91,14A21.94,21.94,0,0,0,538.63,288a20.89,20.89,0,0,0,11.87-5.31l21.41-23.81A21.64,21.64,0,0,0,576,248.19,21,21,0,0,0,570.69,236.27ZM288,176a64,64,0,1,1-64,64A64,64,0,0,1,288,176ZM400,448H176a16,16,0,0,1-16-16,96,96,0,0,1,96-96h64a96,96,0,0,1,96,96A16,16,0,0,1,400,448Z"
              ></path>
            </svg>
          </a>
        </li>

        <li className="nav-item">
          <a href="#Skills" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="mouse"
              className="svg-inline--fa fa-mouse fa-w-12"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 450 500"
            >
              <path
                fill="currentColor"
                d="M0 352a160 160 0 0 0 160 160h64a160 160 0 0 0 160-160V224H0zM176 0h-16A160 160 0 0 0 0 160v32h176zm48 0h-16v192h176v-32A160 160 0 0 0 224 0z"
              ></path>
            </svg>
            <span className="link-text">Skills</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#Works" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="save"
              className="svg-inline--fa fa-save fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 450 500"
            >
              <path
                fill="currentColor"
                d="M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"
              ></path>
            </svg>
            <span className="link-text">Works</span>
          </a>
        </li>

        <li className="nav-item">
          <a href="#Jobs" className="nav-link">
          <svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path class="st0" d="M477.984,39.203H34.016C15.219,39.203,0,54.438,0,73.219v283.969c0,18.781,15.219,34.016,34.016,34.016H220 v7.578c0,18.781-15.219,34.016-34.016,34.016H136v40h73.188h93.625H376v-40h-49.984c-18.797,0-34.016-15.234-34.016-34.016v-7.578 h185.984c18.797,0,34.016-15.234,34.016-34.016V73.219C512,54.438,496.781,39.203,477.984,39.203z M464,315.859 c0,6.266-5.078,11.344-11.344,11.344H59.344c-6.266,0-11.344-5.078-11.344-11.344V98.547c0-6.266,5.078-11.344,11.344-11.344 h393.313c6.266,0,11.344,5.078,11.344,11.344V315.859z"></path> </g> </g></svg>            <span className="link-text">Jobs</span>
          </a>
        </li>

        <li className="nav-item" id="themeButton">
          <a href="#Footer" className="nav-link">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="sd-card"
              className="svg-inline--fa fa-sd-card fa-w-12"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 450 500"
            >
              <path
                fill="currentColor"
                d="M320 0H128L0 128v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM160 160h-48V64h48v96zm80 0h-48V64h48v96zm80 0h-48V64h48v96z"
              ></path>
            </svg>
            <span className="link-text">Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
