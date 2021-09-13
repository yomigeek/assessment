# Author Space

## Overview

This web app demonstrate the following features:

A responsive website with the following:

- Retrieve the data from the mock API.
- Output the data in a list, including properties from the data that
are appropriate for a list view.
- Implement a category filter - single select.
- Implement pagination -  using the "load more" process.
- Added a client-side routing to create a "detail" page; "/post/:id"
- Persist filter state in the query string using `/?category=categoryName`
- Include animated transitions between application states, e.g. added a loader
- Used a CSS-in-JS rather than plain CSS.
- Implemented a 404 page for non-existing routes

### Technologies

- NodeJS (LTS) [here.](https://nodejs.org/en/)
- A code editor (We recommend VS Code [here.](https://code.visualstudio.com/))
- React
- Styled Components
- HTML/CSS
- Moment
- Heroku for Deployment
- MirageJS

### Setup

1. Open the repository folder and install the dependencies using `yarn` or `npm install`.
2. Run the development server using `yarn start` or `npm start`.


The repository also contains an API endpoint mocked using MirageJS. This can be accessed when running the development server at the URL `/api/posts`.
