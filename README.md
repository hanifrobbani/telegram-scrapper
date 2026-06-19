<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a id="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/hanifrobbani/telegram-scrapper">
    <img src="public/telegram.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Telegram Scraper</h3>

  <p align="center">
    Automatically collect data from public Telegram groups and unlock AI-powered insights through smart search, summaries, trend analysis, and automated reporting in a single platform.
    <br />
    <a href="https://github.com/hanifrobbani/telegram-scrapper"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <!-- <a href="https://github.com/hanifrobbani/telegram-scrapper">View Demo</a> -->
    &middot;
    <a href="https://github.com/hanifrobbani/telegram-scrapper/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/hanifrobbani/telegram-scrapper/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
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
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Telegram Scraper is an AI-powered web application designed to collect, organize, and analyze data from public Telegram groups. It helps users monitor discussions, summarize conversations, discover trends, and generate actionable insights from large-scale Telegram communities.

You can run this project locally to explore its features and contribute to its development.

<br />

> **Project Status:** Work in Progress (WIP)
>
> This project is currently under active development. Some planned features, including AI-powered summarization, smart search and automated reporting, are not yet available.


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Next][Next.js]][Next-url]
* [![Tailwind][Tailwindcss]][Tailwind-url]
* [![Supabase][Supabase]][Supabase-url]
* [![Gram][Gram.js]][Gram-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To run this project locally, follow this instructions bellow

### Prerequisites

Make sure you have all this tools on your computer

* Node JS for runtime server
* npm/bun for package manager

### Installation

1. Open an terminal an make sure it pointed the exact path you want to save the project
2. Clone the repo
   ```sh
   git clone https://github.com/hanifrobbani/telegram-scrapper.git
   ```
3. Install the dependencies
   ```sh
   npm install
   ```
   or using bun

   ```sh
   bun install
   ```
4. Copy the .env.example file to .env
   ```js
   cp .env.example .env
   ```
5. Visit https://my.telegram.org/apps and sign in using your Telegram account. Telegram will send an OTP code for verification.

   Create a new application using the following example values:
   ```sh
   App title: Telegram Scraper

   Short name: telegram_scraper

   Platform: Desktop

   Description: Telegram data scraping application
   ```
   after you create, save the credentials on your .env file

6. Run this command to generate a session for gramjs 
   ```sh
   npx tsx src/lib/telegram/generateTelegramSession
   ```
   save the session in your .env file

7. Create JWT key for the JWT authentication
   You can create a secure random key manually or run:
   ```sh
   openssl rand -base64 32
   ```
8. If you do not have a Supabase account, sign up at:
   ```sh
   https://supabase.com/dashboard/sign-up
   ```
   create a new project & save supabase url & key on your .env file
   

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request for your suggestion.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
<!-- [contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username -->
[product-screenshot]: public/preview/main-dashboard-image.png
<!-- Shields.io badges. You can a comprehensive list with many more badges at: https://github.com/inttter/md-badges -->
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Tailwindcss]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com
[Gram.js]: https://img.shields.io/badge/Gram.js-24A1DE?style=for-the-badge&logo=telegram&logoColor=white
[Gram-url]: https://gram.js.org/
[Supabase]: https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white
[Supabase-url]: https://supabase.com/
