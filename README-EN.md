# Postal Firebase - A Social Media Post Application

Postal Firebase is a modern React application that allows users to create, view, and interact with social media posts. Built with React 19, React Router, and Firebase, it provides a seamless user experience for sharing thoughts and ideas with real-time data persistence.
- **Link to Deployed Version**: 

## Features

- **View Posts**: Browse through a list of posts on the home page
- **Create Posts**: Add new posts with your name and message
- **View Post Details**: Click on any post to see its full details
- **Responsive Design**: Works on both desktop and mobile devices
- **Real-time Data**: Powered by Firebase Firestore for instant updates

## Technologies Used

### Frontend
- **React 19**: Latest version of React for building the user interface
- **React Router 7**: For navigation and routing with loader/action patterns
- **React Icons**: For UI elements and icons
- **CSS Modules**: For component-scoped styling without conflicts

### Backend & Infrastructure
- **Firebase**: Google's platform for building web and mobile applications
  - **Firestore**: NoSQL cloud database for storing and syncing post data
  - **Firebase Analytics**: For tracking user engagement and app performance
- **Vite 6**: Modern build tool and development server with HMR

### Development Tools
- **ESLint 9**: For code linting and maintaining code quality
- **TypeScript**: For type checking and improved developer experience

## Usage

After starting the development server:

1. Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal)
2. Browse existing posts on the home page
3. Click on a post to view its details
4. Click the "Create Post" button to add a new post
5. Fill in your name and message, then submit
6. Your post will be instantly saved to Firebase and displayed in the app

## Project Structure

```
postal-firebase/
├── public/             # Static assets
├── firebase/
│   └── firebaseConfig.js # Firebase configuration and initialization
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── Modal.jsx   # Modal component for overlays
│   │   ├── Post.jsx    # Individual post component
│   │   └── PostsList.jsx # List of posts component
│   ├── routes/         # Application routes
│   │   ├── NewPost.jsx # Create post page with Firebase integration
│   │   ├── PostDetails.jsx # Post details page with Firebase document retrieval
│   │   ├── Posts.jsx   # Main posts listing page with Firebase collection query
│   │   └── RootLayout.jsx # Root layout with common elements
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point with routing
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
```

## Firebase Integration

This project uses Firebase Firestore as its database solution:

- **Collection Structure**: Posts are stored in a "posts" collection
- **Document Fields**: Each post contains author and body fields
- **Read Operations**: Uses `getDocs` for collections and `getDoc` for individual documents
- **Write Operations**: Uses `addDoc` to create new posts
