# 📝 Note App

A simple and intuitive note-taking app built with **React Native** for the frontend and **Appwrite** for the backend. The app allows users to create, update, and delete notes seamlessly.

---

## 📱 Demo

### 📸 Screenshots

<img src="https://github.com/user-attachments/assets/32b9fe69-9dae-44f3-a44b-2d1a46f49e87" alt="Home Screen" width="300"/>

<img src="https://github.com/user-attachments/assets/0e74fca8-a795-40f1-be26-e40c51970149" alt="Create Note Screen" width="300"/>

<img src="https://github.com/user-attachments/assets/a73e06b4-c730-4782-926b-40df16d6ae8e" alt="Another Screen" width="300"/>

<img src="https://github.com/user-attachments/assets/f20ca52b-a74e-4103-ab34-d775a76908fd" alt="Edit Note Screen" width="300"/>

---

### 🎥 Demo Video

[Demo Video](https://github.com/user-attachments/assets/779d0ea7-ca82-44e9-b10a-fff81a6dd0f3)

---

## 🚀 Features

- 📝 Create, edit, and delete notes  
- 🔄 Real-time updates with Appwrite backend  
- 🎨 Minimal and intuitive UI  
- 📱 Cross-platform support (iOS & Android)  

---

## 🛠️ Tech Stack

- **Frontend:** React Native, Expo  
- **Backend:** Appwrite  
- **Version Control:** Git & GitHub  

---

## ⚙️ Installation

1. **Clone the Repository:**

```bash
git clone https://github.com/AmalEltelbany/note-app.git
cd note-app
```

2. **Install Dependencies:**

```bash
npm install
```

3. **Start the Development Server:**

```bash
npx expo start
```

---

## 🧹 Usage

1. Run the app using an emulator or physical device.  
2. Create new notes, edit existing ones, or delete notes.  
3. All data is stored and managed through Appwrite.

---

## ⚙️ Backend Setup (Appwrite)

1. **Create an Appwrite Project:**  
   - Go to [Appwrite Console](https://appwrite.io/)  
   - Create a new project for your app.  

2. **Configure Database:**  
   - Create a collection for notes.  
   - Set appropriate permissions for reading, writing, and updating.  

3. **Connect Appwrite with Frontend:**  
   - Install the Appwrite SDK:

```bash
npm install appwrite
```

   - Initialize Appwrite in your app:

```javascript
import { Client, Databases } from 'appwrite';

const client = new Client();
client
  .setEndpoint('YOUR_APPWRITE_ENDPOINT')
  .setProject('YOUR_PROJECT_ID');

const databases = new Databases(client);
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)  
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
4. Push to the branch (`git push origin feature/AmazingFeature`)  
5. Open a Pull Request  

---

## 📔 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## ✨ Author

- [Amal El-Telbany](https://github.com/AmalEltelbany)  

Feel free to reach out for any queries or collaborations!
