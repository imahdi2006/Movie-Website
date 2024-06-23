# Movie Website with React

## Introduction
This is a movie website built with React that integrates with an external API to fetch movie data. The application uses React Router for navigation between pages and leverages various React hooks for state management and side effects. The website consists of three main pages and includes a dark mode/light mode toggle for user convenience.

## Table of Contents
1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Project Structure](#project-structure)
5. [Contributing](#contributing)
6. [License](#license)
7. [Contact](#contact)
8. [Support](#support)

## Features
- **Movie Data**: Fetches movie data from an external API.
- **React Router**: Manages navigation between multiple pages.
- **Hooks**: Utilizes various React hooks for efficient state management and side effects.
  - `useState`
  - `useEffect`
  - `useContext`
  - Custom hooks
- **Dark Mode/Light Mode**: Users can toggle between dark and light themes.
- **Three Main Pages**: The application includes three main pages to demonstrate different functionalities.

## Installation
To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/imahdi2006/movie-website.git
Navigate to the project directory:
bash
Copy code
cd movie-website
Install the dependencies:
bash
Copy code
npm install
Start the development server:
bash
Copy code
npm start
Usage
Once the development server is running, you can open http://localhost:3000 in your browser to view the application. The application includes three main pages which you can navigate between using the React Router links. You can also toggle between dark mode and light mode using the provided switch.

Project Structure
Here is an overview of the project's structure:

java
Copy code
movie-website/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── DarkModeToggle.js
│   │   └── ...
│   ├── hooks/
│   │   ├── useCustomHook.js
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── MovieDetailPage.js
│   │   ├── AboutPage.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
Contributing
Contributions are welcome! If you want to contribute to this project, please fork the repository and create a pull request. You can also report issues or suggest new features.

License
This project is licensed under the MIT License. For more details, see the LICENSE file.

Contact
For any inquiries, you can contact me at mahdi.mahdi1385631@gmail.com .

Support
If you find this project helpful, please consider supporting me:

GitHub Sponsor: Sponsor me
Buy Me a Coffee: Buy me a coffee
And if you like this project, please give it a star on GitHub! Thank you for your support!
