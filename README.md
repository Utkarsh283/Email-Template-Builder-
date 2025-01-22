# Email Builder

The **Email Builder** is a straightforward application designed for crafting emails with ease. Built using React, it leverages the powerful [react-email-editor](https://github.com/jasonmraz/react-email-editor) library, which provides a drag-and-drop interface for creating professional and customizable email templates.

---

## Features

- **User-Friendly Interface**: The app allows users to design emails without any prior coding knowledge using a simple drag-and-drop editor.
- **Highly Customizable**: Tailored with React and styled using TailwindCSS for a sleek, modern appearance.
- **Fast Development**: Powered by Vite for an efficient and speedy development experience.

---

## Packages Used

1. **[react-email-editor](https://github.com/jasonmraz/react-email-editor)**: A robust drag-and-drop email editor built with React, simplifying email design and layout creation.  
2. **[tailwindcss](https://tailwindcss.com/)**: A utility-first CSS framework that ensures a clean and responsive design for the application.  
3. **[vite](https://vitejs.dev/)**: A fast development server that accelerates the development process by offering a smooth and efficient developer experience.

---

## Development Guide

### Steps to Run Locally:
1. **Clone the Repository**:  
   Clone the project using the following command:  
   ```bash
   gh repo clone Utkarsh283/Email-Template-Builder-
   ```

2. **Install Dependencies**:  
   Navigate to the project directory and install the required dependencies:  
   ```bash
   npm install
   ```

3. **Start the Development Server**:  
   Launch the development environment with:  
   ```bash
   npm run dev
   ```
   Open your browser and go to [http://localhost:3000](http://localhost:3000) to view the app.

---

## Deployment Process

### Deployment Highlights:
- The app is deployed to **GitHub Pages** using the [Repo](https://github.com/Utkarsh283/Email-Template-Builder-) GitHub Action.  
- A CI/CD workflow automates the deployment process through the configuration file located at `.github/workflows/deploy.yml`.

### Deployment Details:
1. The deployment action builds the application and pushes the static files to the `gh-pages` branch.  
2. Once deployed, the app can be accessed publicly at:  
   **[https://utkarsh283.github.io/Email-Template-Builder-/](https://utkarsh283.github.io/Email-Template-Builder-/)**

---

## Summary

The **Email Builder** app simplifies the creation of emails with its easy-to-use drag-and-drop editor, responsive design, and efficient deployment pipeline. It's an excellent tool for developers and designers aiming to create email templates quickly and effectively.
