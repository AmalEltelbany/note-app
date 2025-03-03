import databaseService from './databaseService';
import { ID } from 'react-native-appwrite';

// Appwrite database and collection ID
const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID;
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID;

const noteService = {
  // Get all Notes (no user filtering)
  async getNotes() {
    const response = await databaseService.listDocuments(dbId, colId);
    if (response.error) {
      return { error: response.error };
    }
    return { data: response.data }; // Ensure correct return
  },

  // Add a new Note
  async addNote(text) {
    if (!text) {
      return { error: 'Note text cannot be empty' };
    }

    const data = {
      text: text,
      createdAt: new Date().toISOString(),
    };

    // noteService.js
const response = await databaseService.createDocument(
    dbId,
    colId,
    ID.unique(), // Document ID (3rd parameter)
    data         // Note data (4th parameter)
  );

    if (response?.error) {
      return { error: response.error };
    }
    return { data: response };
  },

  // Update a Note
  async updateNote(id, text) {
    const response = await databaseService.updateDocument(dbId, colId, id, {
      text,
    });

    if (response?.error) {
      return { error: response.error };
    }
    return { data: response };
  },

  // Delete a Note
  async deleteNote(id) {
    const response = await databaseService.deleteDocument(dbId, colId, id);
    if (response?.error) {
      return { error: response.error };
    }
    return { success: true };
  },
};

export default noteService;
