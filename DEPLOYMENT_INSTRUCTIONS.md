# How to Deploy Updated Quiz to Firebase

Follow these steps to deploy your updated Network Connectivity Quiz to Firebase:

## 1. Make sure all your files are updated:

- `index.html` - Updated with new title and premium UI elements
- `styles.css` - Enhanced with premium styling
- `questions.js` - Changed to network connectivity questions
- `app.js` - Firebase configuration remains the same

## 2. Deploy to Firebase

Open your terminal/command prompt in the project directory and run:

```bash
firebase deploy
```

This command will upload all your updated files to Firebase Hosting, replacing the previous version.

## 3. Verify the Deployment

After deployment completes, Firebase will provide a hosting URL (typically something like `https://quizapp-802a0.web.app`). Visit this URL to verify that your updated quiz is working correctly.

## 4. Clear Browser Cache (If Needed)

If you don't see the changes immediately:

1. Press Ctrl+F5 (Windows/Linux) or Cmd+Shift+R (Mac) to force refresh the page
2. Or open the site in an incognito/private browsing window

## 5. Database Considerations

Since you've changed the quiz from math to network connectivity:

- The existing leaderboard data will still show scores from the math quiz
- You might want to reset the leaderboard data for a fresh start

### To Reset Leaderboard Data (Optional):

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Go to "Realtime Database" in the left sidebar
4. Select the "leaderboard" node
5. Click the three dots menu and select "Delete"

This will give all users a fresh start with the new quiz content.

## Troubleshooting

If you encounter any issues during deployment:

1. **Deployment Errors**: Check the terminal output for specific error messages
2. **Firebase Configuration**: Ensure your Firebase configuration in app.js is correct
3. **File Permissions**: Make sure all files have proper read permissions
4. **Quota Limits**: Check if you've hit any Firebase free tier limits

For more help, refer to the [Firebase Hosting documentation](https://firebase.google.com/docs/hosting).