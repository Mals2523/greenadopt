# Firebase Setup Guide for GreenAdopt

## Step 1: Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `greenadopt-[your-name]`
4. Enable Google Analytics (optional)
5. Click "Create project"

## Step 2: Enable Firestore Database

1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users
5. Click "Done"

## Step 3: Enable Authentication (Optional)

1. Go to "Authentication" in Firebase Console
2. Click "Get started"
3. Enable "Email/Password" provider
4. Add your domain to authorized domains

## Step 4: Enable Storage (Optional)

1. Go to "Storage" in Firebase Console
2. Click "Get started"
3. Choose "Start in test mode"
4. Select a location

## Step 5: Get Your Firebase Config

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon (</>)
4. Register your app with a nickname
5. Copy the config object

## Step 6: Update Your Firebase Config

Replace the placeholder config in `src/config/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
```

## Step 7: Set Up Firestore Security Rules

In Firebase Console > Firestore Database > Rules, add these rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to all documents
    match /{document=**} {
      allow read: if true;
    }
    
    // Allow write access to authenticated users
    match /trees/{treeId} {
      allow write: if request.auth != null;
    }
    
    match /users/{userId} {
      allow write: if request.auth != null && request.auth.uid == userId;
    }
    
    match /adoptionRequests/{requestId} {
      allow write: if request.auth != null;
    }
    
    match /maintenanceRecords/{recordId} {
      allow write: if request.auth != null;
    }
    
    match /treePhotos/{photoId} {
      allow write: if request.auth != null;
    }
    
    match /environmentalMetrics/{metricId} {
      allow write: if request.auth != null;
    }
  }
}
```

## Step 8: Initialize Your Database

Create a script to populate your database with initial data:

```typescript
// scripts/initializeDatabase.ts
import { treeService, userService, metricsService } from '../src/services/firestoreService';
import { mockTrees, mockUsers, mockEnvironmentalMetrics } from '../src/data/mockData';

export const initializeDatabase = async () => {
  try {
    // Add trees
    for (const tree of mockTrees) {
      const { id, ...treeData } = tree;
      await treeService.addTree(treeData);
      console.log(`Added tree: ${tree.name}`);
    }

    // Add users
    for (const user of mockUsers) {
      const { id, ...userData } = user;
      await userService.addUser(userData);
      console.log(`Added user: ${user.name}`);
    }

    // Add environmental metrics
    await metricsService.updateMetrics(mockEnvironmentalMetrics);
    console.log('Added environmental metrics');

    console.log('Database initialization complete!');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
};
```

## Step 9: Environment Variables (Recommended)

Create a `.env` file in your project root:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

Then update your `firebase.ts` config:

```typescript
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
```

## Step 10: Test Your Setup

1. Start your development server: `npm start`
2. Navigate to the Tree Catalog page
3. You should see real-time data from Firestore
4. Check the browser console for any errors

## Troubleshooting

### Common Issues:

1. **"Firebase App named '[DEFAULT]' already exists"**
   - Make sure you're only initializing Firebase once
   - Check that you're not importing firebase config multiple times

2. **"Missing or insufficient permissions"**
   - Check your Firestore security rules
   - Make sure you're in test mode for development

3. **"Network request failed"**
   - Check your internet connection
   - Verify your Firebase project is active
   - Check if your IP is blocked by Firebase

4. **"Invalid API key"**
   - Double-check your Firebase config
   - Make sure you copied the correct API key

## Next Steps

1. **Add Authentication**: Implement user login/signup
2. **Add Image Upload**: Use Firebase Storage for tree photos
3. **Add Real-time Notifications**: Use Firebase Cloud Messaging
4. **Add Analytics**: Track user interactions
5. **Deploy**: Deploy to Firebase Hosting

## Production Considerations

1. **Security Rules**: Update Firestore rules for production
2. **Environment Variables**: Use proper environment management
3. **Error Handling**: Add comprehensive error handling
4. **Performance**: Implement pagination for large datasets
5. **Backup**: Set up regular database backups
