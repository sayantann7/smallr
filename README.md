# Smallr - URL Shortener

Smallr is a URL shortener that makes it easy to create, share, and manage short links. Create your own custom short links with Smallr. It is created by Sayantan Nandi, a student of FY BTech CS at SIT Pune. Smallr is easy to use and free to use. Try it now!

## Deployed Link
https://smallr-links.vercel.app

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- Create custom short URLs
- Easy to use interface
- Free to use
- No sign-up required

## Installation

To get started with Smallr, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/sayantann7/smallr.git
    ```
2. Navigate to the project directory:
    ```bash
    cd smallr
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Create a `.env.local` file in the root directory and add your MongoDB URI:
    ```env
    MONGODB_URI=your_mongodb_uri
    NEXT_PUBLIC_HOST=http://localhost:3000
    ```
5. Run the development server:
    ```bash
    npm run dev
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the interface to create and manage your short URLs.

## Project Structure

```plaintext
smallr/
├── app/
│   ├── about/
│   │   └── page.js
│   ├── api/
│   │   └── generate/
│   │       └── route.js
│   ├── contact/
│   │   └── page.js
│   ├── [shorturl]/
│   │   └── page.js
│   ├── shorten/
│   │   └── page.js
│   ├── layout.js
│   ├── globals.css
│   └── page.js
├── components/
│   ├── Footer.js
│   └── Navbar.js
├── lib/
│   └── mongodb.js
├── public/
│   └── vector.png
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.mjs
└── README.md
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.