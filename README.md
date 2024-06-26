<!-- Improved compatibility of back to top link: :  -->
<a name="readme-top"></a>


<!-- PROJECT SHIELDS -->
<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>

<br />
<div align="center">
  <h3 align="center">rESPonder v.2</h3>
 <h5>An IoT application for disaster rescue scenarios</h5>
  <p align="center">
    <a href="#e">View the live Demo</a> (under construction)
      ·
    <a href="https://www.youtube.com/watch?v=HHvTUP_yY_8&list=PLxXfXAgRtgEk2D5dS9H7aLmjYhCL_8AUJ">Check out the presentation (GR)</a>
    ·
    <a href="https://github.com/dimikmps/rESPonder-v2/issues/new?labels=bug">Report Bug</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation--deployment">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


rESPonder is the client-facing segment of a multi-tier Internet of Things (IoT) application aimed at assisting emergency services in organizing and managing disaster relief situations.

As the name suggests, the platform benefits from the use of ESP32 microcontrollers (i.e., r-ESP-onder) as the basis of data acquisition. A network of autonomous ESP32 microcontrollers is programmed to detect Wi-Fi devices within their vicinity, gathering various metrics such as RSSI, which are transmitted via LoRa to a custom ESP32-based centralized node. From there, the data is relayed via MQTT to AWS, where it is processed and stored using IoT Core and DynamoDB, respectively.In the cloud domain, Lambda functions are employed to calculate distances from deployed ESP nodes using RSSI-based proximity calculation formulas. An API serves this information to the rESPonder front-end client, originally hosted on S3.

The current (v2) implementation is an updated version of the original front-end, designed to demonstrate the final product and enhance user-friendliness. Key features of this implementation include:

- Implementation of Mock Service Worker to periodically fetch randomized sensor data, simulating data retrieval from the original deployment of ESP sensors and AWS infrastructure (which is no longer active).
- Utilization of React Router for routing and re-rendering only the content element, maintaining consistency across foundational elements such as the header and sidebar.
- Integration of the Context API to manage information such as the selected sensor throughout various sections of the application. Secondary logic relies on efficient context handling for data flow and state management.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![Vite][Vite]][Vite-url]
* [![MUI][MUI]][MUI-url]
* [![REACTROUTER][REACTROUTER]][REACTROUTER-url]
* [![MSWWorker][MSW]][MSW-url]
* [![REACTLEAFLET][REACTLEAFLET]][REACTLEAFLET-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local deployment up and running, please follow these simple example steps.

### Prerequisites

A latest version of npm is needed to install all necessary packages and run the project.

  ```sh
  npm install npm@latest -g
  ```

It is recommended to use node v.20.13.1 .


### Installation & deployment

Follow the steps below to get the project up and running:

1. Clone the repo
   ```sh
   git clone https://github.com/dimikmps/rESPonder-v2.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Serve locally
   ```js
   npm run start
   ```



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

*under construction*



<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] App layout
  - [x] Add Main content component 
  - [x] Add Header component
  - [x] Add Footer component
  - [x] Add Routing
  - [x] Add Error boundary component
- [x] Linting/formatting
  - [x] Add formatting configuration
  - [x] Add pre-commit linting and formatting
- [x] Sensor Data
  - [x] Create mock/randomized sensor data to be used for the purpose of the live demo
  - [x] Create mock API to fetch sensor data
- [ ] App sections
  - [x] Homepage view
  - [x] Latest sensor readings view
  - [x] Map view
  - [x] Indoor positioning view
  - [x] Contact view
  - [x] About view
- [x] Multiple sensors handling
  - [x] Extend API
  - [x] Create Context 
  - [x] Refactor pages to acommodate changes
- [ ] Demo Deployment

See the [open issues](https://github.com/dimikmps/rESPonder-v2/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Dimitris Kampas - [LinkedIn][linkedin-url]

Project Link: [https://github.com/dimikmps/rESPonder-v2](https://github.com/dimikmps/rESPonder-v2)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Best-README-file](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- PROJECT SHIELDS -->

[contributors-shield]: https://img.shields.io/github/contributors/dimikmps/rESPonder-v2.svg?style=for-the-badge
[contributors-url]: https://github.com/dimikmps/rESPonder-v2/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/dimikmps/rESPonder-v2.svg?style=for-the-badge
[forks-url]: https://github.com/dimikmps/rESPonder-v2/network/members

[stars-shield]: https://img.shields.io/github/stars/dimikmps/rESPonder-v2.svg?style=for-the-badge
[stars-url]: https://github.com//dimikmps/rESPonder-v2/stargazers

[issues-shield]: https://img.shields.io/github/issues/dimikmps/rESPonder-v2.svg?style=for-the-badge
[issues-url]: https://github.com/dimikmps/rESPonder-v2/issues

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/dkampas


<!-- MARKDOWN LINKS & IMAGES -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[Vite]: https://img.shields.io/badge/-vite-js?style=for-the-badge&logo=vite&logoColor=white&color=%23646CFF
[Vite-url]: https://vitejs.dev/

[MUI]: https://img.shields.io/badge/-mui-js?style=for-the-badge&logo=mui&logoColor=white&color=%23007FFF
[MUI-url]: https://mui.com/

[MSW]: https://img.shields.io/badge/-msw-js?style=for-the-badge&logo=mockserviceworker&logoColor=white&color=%23FF6A33
[MSW-url]: https://mswjs.io/

[REACTROUTER]: https://img.shields.io/badge/-reactrouter-js?style=for-the-badge&logo=reactrouter&logoColor=white&color=%23CA4245
[REACTROUTER-url]: https://reactrouter.com

[REACTLEAFLET]: https://img.shields.io/badge/-leaflet-js?style=for-the-badge&logo=leaflet&logoColor=white&color=199900
[REACTLEAFLET-url]: https://react-leaflet.js.org/
