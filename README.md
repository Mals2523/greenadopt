# 🌳 GreenAdopt - Tree Adoption Platform

A real-time React TypeScript application that connects people with trees for adoption, fostering environmental awareness and community engagement.

## 🚀 Features

- **Real-time Tree Catalog**: Browse available trees with live updates
- **Tree Adoption System**: Adopt trees and track their environmental impact
- **Environmental Impact Tracking**: Monitor CO₂ absorption, oxygen production, and water conservation
- **Maintenance Records**: Keep track of tree care activities
- **Photo Gallery**: Upload and view tree photos
- **User Dashboard**: Manage adopted trees and track contributions
- **Real-time Database**: Powered by Firebase Firestore for instant updates

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: CSS3 with modern design
- **Database**: Firebase Firestore (Real-time)
- **Authentication**: Firebase Auth (ready for implementation)
- **Storage**: Firebase Storage (for images)
- **Deployment**: Firebase Hosting (recommended)

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account
- Git

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/greenadopt.git
cd greenadopt
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Firebase

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Get your Firebase configuration
4. Create a `.env` file in the project root:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id
```

### 4. Start Development Server

```bash
npm start
```

Visit `http://localhost:3000` to see your app!

## 📁 Project Structure

```
greenadopt/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/              # Page components
│   ├── services/           # Firebase services
│   ├── hooks/              # Custom React hooks
│   ├── types/              # TypeScript type definitions
│   ├── data/               # Mock data and utilities
│   └── config/             # Firebase configuration
├── public/                 # Static assets
├── .env                    # Environment variables (create this)
└── README.md              # This file
```

## 🔧 Configuration

### Firebase Setup

Follow the detailed setup guide in `FIREBASE_SETUP.md` for complete Firebase configuration including:

- Firestore Database setup
- Security rules configuration
- Authentication setup
- Storage configuration

### Environment Variables

Create a `.env` file with your Firebase configuration. See the setup guide for detailed instructions.

## 🎯 Key Features Explained

### Real-time Tree Catalog
- Browse all available trees
- Real-time updates when trees are adopted
- Filter by status, species, and location

### Tree Adoption System
- Submit adoption requests
- Track adoption status
- View adopted trees in your dashboard

### Environmental Impact
- Real-time tracking of environmental metrics
- CO₂ absorption calculations
- Oxygen production monitoring
- Water conservation tracking

### Maintenance Records
- Log tree maintenance activities
- Track care history
- Upload maintenance photos

## 🚀 Deployment

### Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login to Firebase:
```bash
firebase login
```

3. Initialize Firebase:
```bash
firebase init hosting
```

4. Build and deploy:
```bash
npm run build
firebase deploy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Firebase for the real-time database infrastructure
- React team for the amazing framework
- Unsplash for beautiful tree images
- The open-source community for inspiration

## 📞 Support

If you have any questions or need help:

1. Check the [Firebase Setup Guide](FIREBASE_SETUP.md)
2. Open an issue on GitHub
3. Contact the development team

---

**Made with ❤️ for a greener planet**
