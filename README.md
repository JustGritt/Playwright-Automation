# Playwright-Automation

> This is a simple project to demonstrate how to use Playwright to automate browser tasks. In this project, we will automate the creation of new email addresses and test if they are flagged as spam by the Gmail service or not for other email services.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

**I do not endorse the use of this project for any illegal activities. This project is for educational purposes only. I am not responsible for any misuse of this project. Use at your own risk.**

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [NPM](https://www.npmjs.com/get-npm)
- [Playwright](https://playwright.dev/docs/intro)

### Installation

1. Clone the repo

```sh
git clone git@github.com:JustGritt/Playwright-Automation.git
```

2. Install NPM packages

```sh
npm install
```

3. Navigate to the project directory

```sh
cd Playwright-Automation
```

### Running the tests

There are two tests in this project. One is to create a new email address and the other is to test if the email address is flagged as spam by Gmail or any other email service. To run the tests, run the following command:

For headed mode:

```sh
// To create a new email address
npm run dev-c
```

```sh
// To test if the email address is flagged as spam
npm run dev-s
```

For headless mode:

```sh
// To create a new email address
npm run create
```

```sh
// To test if the email address is flagged as spam
npm run send
```

## Built With

- [Playwright](https://playwright.dev/docs/intro) - Node.js library to automate Chromium, Firefox and WebKit with a single API
- [Node.js](https://nodejs.org/en/download/) - JavaScript runtime built on Chrome's V8 JavaScript engine for building fast and scalable network applications

## Authors

- **Gritty** - _Initial work_ - [JustGritt](https://github.com/JustGritt)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

This README file was generated partially by using ChatGPT-3. Check it out [here](https://openai.com/blog/chatgpt/)
