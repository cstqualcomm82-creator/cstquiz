# Math Quiz Web Application

A web-based math quiz application with user authentication, leaderboard functionality, and timed quizzes.

## Features

- User authentication with name and employee ID
- Random selection of 10 questions from a pool of 30 math questions
- Timer to track quiz duration
- Leaderboard showing top performers
- Prevention of multiple quiz attempts by the same user
- Responsive design with a blue (#3253DC) and white (#FFFFFF) theme

## Setup Instructions

### 1. Firebase Setup

1. Create a Firebase account at [firebase.google.com](https://firebase.google.com/) if you don't have one
2. Create a new Firebase project
3. Set up a Realtime Database in your Firebase project
4. Set the database rules to allow read and write access:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

5. Get your Firebase configuration from Project Settings > General > Your apps > Firebase SDK snippet > Config
6. Replace the placeholder Firebase configuration in `app.js` with your actual configuration:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    databaseURL: "YOUR_DATABASE_URL"
};
```

### 2. Hosting the Application

#### Option 1: Local Hosting

1. Install a local server like [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for VS Code
2. Open the project folder in VS Code
3. Right-click on `index.html` and select "Open with Live Server"

#### Option 2: Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`
3. Initialize Firebase in your project folder: `firebase init`
   - Select "Hosting" when prompted
   - Select your Firebase project
   - Set "public" as your public directory
   - Configure as a single-page app: No
   - Set up automatic builds and deploys: No
4. Deploy to Firebase: `firebase deploy`

## File Structure

- `index.html` - Main HTML structure
- `styles.css` - CSS styling with theme colors
- `questions.js` - Contains the pool of 30 math questions
- `app.js` - Main application logic and Firebase integration

## Customization

### Adding or Modifying Questions

To add or modify questions, edit the `quizQuestions` array in `questions.js`. Each question should follow this format:

```javascript
{
    question: "What is 15 + 27?",
    options: ["42", "43", "41", "40"],
    correctAnswer: "42"
}
```

### Changing the Theme Colors

To change the theme colors, modify the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #3253DC; /* Main theme color */
    --secondary-color: #FFFFFF; /* Secondary theme color */
    /* Other colors... */
}
```

## License

This project is open source and available under the [MIT License](LICENSE).