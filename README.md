# Tailwind Intro

To get started with
[Tailwind in React](https://tailwindcss.com/docs/guides/create-react-app):

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Edit `tailwind.config.js` to include:

```json
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
```

Edit `index.css` to include:

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

If you are using Visual Studio Code, install the Tailwind CSS IntelliSense
extension.

## Useful Tailwind Resources

- [Tailwind UI](https://tailwindui.com/) has free example components
- [daisy UI](https://daisyui.com/) is a plugin for Tailwind that simplifies
  development
- [Refactoring UI](https://www.refactoringui.com/?ref=resources) is a design
  book by the Tailwind creators that provides design advice
- [Headless UI](https://headlessui.com/) provides unstyled React components
- [More resources](https://tailwindcss.com/resources)

## Running the code

This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best
performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.
