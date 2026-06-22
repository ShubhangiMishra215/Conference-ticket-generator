# Frontend Mentor - Conference ticket generator solution

This is a solution to the [Conference ticket generator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/conference-ticket-generator-oq5gFIU12w).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form with their details
- Receive form validation messages if:
  - Any field is missed
  - The email address is not formatted correctly
  - The avatar upload is too large or the wrong image format
- Have their details displayed on the generated conference ticket
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [GitHub Repository](https://github.com/ShubhangiMishra215/Conference-ticket-generator.git)
- Live Site URL: [Live Demo](https://conference-ticket-generator-six-flame.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- [Tailwind CSS](https://tailwindcss.com/) - For styles
- [React](https://reactjs.org/) - JS library
- [React Router](https://reactrouter.com/) - For client-side routing
- [Vite](https://vitejs.dev/) - Build tool
- Mobile-first workflow

### What I learned

Working on this project helped me strengthen my understanding of controlled form components in React, including managing state for file uploads and generating object URLs for avatar previews. I also learned how to pass data between routes using React Router's `navigate` with `state`, and how to retrieve it on the next page using `useLocation`.

```jsx
// Passing form data to Success page
navigate("/success", {
  state: {
    firstName: formData.firstName,
    email: formData.email,
    github: formData.github,
    avatarPreview: formData.avatarPreview,
  },
});

// Retrieving on Success page
const { state } = useLocation();
const { firstName, email, github, avatarPreview } = state;
```

I also practiced overlaying content on an SVG ticket using absolute positioning with Tailwind:

```jsx
<div className="relative inline-block mt-15">
  <img src="/assets/images/pattern-ticket.svg" alt="" aria-hidden="true" />
  <div className="absolute inset-0 flex justify-between px-4 py-3">
    {/* ticket content */}
  </div>
</div>
```

### Continued development

In future projects I want to continue focusing on:

- Improving accessibility across form components, including better screen reader support
- Adding drag-and-drop file upload functionality
- Exploring more advanced form libraries like React Hook Form for cleaner validation logic
- Generating dynamic ticket numbers and making the ticket downloadable as an image

### Useful resources

- [React Router Docs](https://reactrouter.com/en/main) - Helped me understand the `useLocation` and `navigate` APIs for passing state between pages.
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Essential reference for utility classes, especially responsive breakpoints and gradient text.
- [MDN — URL.createObjectURL()](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) - Helped me understand how to handle file previews and why revoking object URLs matters.

## Author

- GitHub - [@ShubhangiMishra215](https://github.com/ShubhangiMishra215)
- Frontend Mentor - [@ShubhangiMishra215](https://www.frontendmentor.io/profile/ShubhangiMishra215)
