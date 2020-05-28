# MyDish App

🍽 A source-control cooking app built in React Native which allows users to quickly make and see changes to their recipe.
​
You can find the deployed project on the [Google Play Store](https://play.google.com/store/apps/details?id=com.lambdaschool.mydish) for Android devices or via [TestFlight](https://apps.apple.com/us/app/testflight/id899247664) for iOS devices.
​
**TestFlight Instructions**
​

- Search for TestFlight in the App Store.
- Once installed, follow [this link](https://apps.apple.com/us/app/testflight/id899247664).
  ​

# Table of Contents

- [Getting Started](#getting-started)
- [Contributors](#contributors)
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [APIs](#apis)
- [Contributing](#contributing)
  ​

## Getting Started

1. [Set up React Native.](https://facebook.github.io/react-native/docs/getting-started.html) Choose tab **Expo CLI Quickstart.**
2. Fork or directly clone this repository to your local machine and `cd` into the project directory.
3. Run `npm install` and once that is complete `expo start`.
4. If you want to test on a simulator, you may use either Android Studio for Android or XCode for iOS.
5. Run `a` for Android simulator or `i` for iOS simulator.
6. If you want to test on an actual device, first make sure you have installed the expo app. Then, use the barcode provided in your terminal or in the browser after running `expo start`.
7. To run tests in [tests directory](./__tests__) run this command in the root of this repo: `npm test`
   ​

## Contributors

|                                                             [Amos Rose](https://github.com/AmMiRo)                                                              |                                                           [Daniel Balluff](https://github.com/kaverndsp)                                                           |                                                           [Michael Walter](https://github.com/M-PAW)                                                           |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars1.githubusercontent.com/u/58370752?s=460&u=ef9686243ad7cc35318bcf5f7248f2d0eb7ec28c&v=4" width = "200" />](https://github.com/AmMiRo) | [<img src="https://avatars2.githubusercontent.com/u/42728069?s=460&u=187b6ede1969337f7ddc2ce56ab611a9a41b204c&v=4" width = "200" />](https://github.com/kaverndsp) | [<img src="https://avatars1.githubusercontent.com/u/40832145?s=460&u=384c33c70a7ef128b1e548555601d8510c3caafd&v=4" width = "200" />](https://github.com/M-PAW) |

<br>
<br>

|                                                       [Katie Embrey-Farquhar](https://github.com/kmcknight1)                                                        |                                                             [Dan Hauer](https://github.com/dlhauer)                                                              |                                                           [Tanner Hawkins](https://github.com/dournbrood)                                                           |                                                          [Indigo Richards](https://github.com/domesticdingo)                                                           |                                                            [Winnie Song](https://github.com/windixxie)                                                             |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars1.githubusercontent.com/u/47987809?s=460&u=16775e454c44054b8c7c88b4a2a899e78228df35&v=4" width = "200" />](https://github.com/kmcknight1) | [<img src="https://avatars0.githubusercontent.com/u/50860480?s=460&u=ab6997720219f59a214336ceb6088c308749c1f8&v=4" width = "200" />](https://github.com/dlhauer) | [<img src="https://avatars2.githubusercontent.com/u/19560915?s=460&u=9c3a07269ef4ab793a5f1029466e25d41d75ad49&v=4" width = "200" />](https://github.com/dournbrood) | [<img src="https://avatars2.githubusercontent.com/u/56006416?s=460&u=1e38c38a72eabbdb8ce8c596af3213ce58cbcc3b&v=4" width = "200" />](https://github.com/domesticdingo) | [<img src="https://avatars2.githubusercontent.com/u/48748065?s=460&u=8a2a5812b208c247367dba6f19736b44168e4782&v=4" width = "200" />](https://github.com/windixxie) |

​
​
| [Olympia Wojcik](https://github.com/olympiawoj) | [James Bishop](https://github.com/jambis) | [Devin Warrick](https://github.com/DevWarr) | [Dustin Snoap](https://github.com/dustinsnoap)  
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://avatars0.githubusercontent.com/u/41010759?s=460&u=297ec020c4231df1faeaa1bf92c88cfcb36e094d&v=4" width = "200" />](https://github.com/olympiawoj) | [<img src="https://avatars0.githubusercontent.com/u/4674568?s=460&u=35069fc6456a2be448962d1643462cac596c6828&v=4" width = "200" />](https://github.com/jambis) | [<img src="https://avatars2.githubusercontent.com/u/49497246?s=460&u=2a0231a3d8358559c3bc7eb6c5617b1549da7582&v=4" width = "200" />](https://github.com/DevWarr) | [<img src="https://avatars3.githubusercontent.com/u/45376430?s=460&u=2182ed52785e18d3044bd21a39bf7e3697cc9cf0&v=4" width = "200" />](https://github.com/dustinsnoap) |

​
<br>
<br>
​
![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
[![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)](https://github.com/facebook/react/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![Maintainability](https://api.codeclimate.com/v1/badges/19e8f274d642d4835355/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/mydish-fe/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/19e8f274d642d4835355/test_coverage)](https://codeclimate.com/github/Lambda-School-Labs/mydish-fe/test_coverage)
​

## Project Overview

​
[Trello Board](https://trello.com/b/Oy4rKTJw/labs21-mydish)
​
[Product Canvas](https://www.notion.so/MyDish-24149db37e5f434fa994cfb0de71fc9d)
​
[UX Design files](https://www.figma.com/file/WpfjmSHrOJycliSQ5V2342/MyDish%2C-Cornelius-%26-Ryan?node-id=1%3A4)
​
MyDish allows users to create their own recipes and keep track of different versions of those recipes as they change them over time. Users can also explore recipes created by others.
​

### Key Features

- Recipe creation
- Editing a recipe
- Version History
- Image upload
  ​

## Tech Stack

| Front End                                                | Back End                                                                  | Testing                                                            |
| -------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| [React Native](https://github.com/facebook/react-native) | [NodeJS](https://nodejs.org/en/)                                          | [Jest](https://jestjs.io/en/)                                      |
| [React Navigation](https://reactnavigation.org/)         | [ExpressJS](https://expressjs.com/)                                       | [React Test Renderer](https://reactjs.org/docs/test-renderer.html) |
| [Redux](https://redux.js.org/)                           | [Knex.js](http://knexjs.org/)                                             |
| [React-Redux](https://react-redux.js.org/)               | [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/Welcome.html) |

​

## APIs

### MyDish API

​
The MyDish API is used throughout this React Native front-end to do things such as creating an account, logging in, creating recipes, viewing recipes, editing recipes, etc.
​
Documentation on how to use the MyDish API can be found [here](https://github.com/Lambda-School-Labs/mydish-be/blob/master/README.md).
​

### Ingredient Prediction API

​
This API is a data science ingredient prediction model. Based on the request, it will respond with a list of suggested ingredients. It accepts a `POST` request formatted as such:
​

```json
{
  "1": "garlic",
  "2": "butter",
  "3": "chives"
}
```

​
Further documentation on how to use this API can be found [here](http://mydish-ingredientprediction.eba-wmm2grnv.us-east-2.elasticbeanstalk.com/).
​
The GitHub Repository can be found [here](https://github.com/Lambda-School-Labs/MyDish-DS/tree/master/slightfoot/baseline_pred_deploy).
​

# Contributing

​
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
​
Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.
​

## Issue/Bug Request

​
**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
​

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.
  ​

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.
​

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.
​
Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.
​

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).
