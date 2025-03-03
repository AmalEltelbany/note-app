
import { useState, useEffect } from 'react';
import { 
  View, 
  TouchableOpacity, 
  StyleSheet, 
  Alert, 
  ActivityIndicator, 
  Text 
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import NoteList from '../../components/NoteList';
import AddNoteModal from '../../components/AddNoteModal';
import noteService from '../../services/noteService';
const NotesScreen = () => {
  const [notes, setNotes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchNotes();
  }, []);
  const fetchNotes = async () => {
    setLoading(true);
    const response = await noteService.getNotes();
    if (response.error) {
      setError(response.error);
      Alert.alert('Error', response.error);
    } else {
      setNotes(response.data);
      setError(null);
    }
    setLoading(false);
  };
  const addNote = async () => {
    if (newNote.trim() === '') return;
    const response = await noteService.addNote(newNote);
    if (response.error) {
      Alert.alert('Error', response.error);
    } else {
      fetchNotes();
    }
    setNewNote('');
    setModalVisible(false);
  };
  const deleteNote = async (id) => {
    Alert.alert("Delete Note", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        onPress: async () => {
          const response = await noteService.deleteNote(id);
          if (response?.error) {
            Alert.alert("Error", response.error);
          } else {
            setNotes((prev) => prev.filter((note) => note.$id !== id));
          }
        },
      },
    ]);
  };
  const editNote = async (id, newText) => {
    if (!newText.trim()) {
      Alert.alert('Error', 'Note text cannot be empty');
      return;
    }
    const response = await noteService.updateNote(id, newText);
    if (response.error) {
      Alert.alert('Error', response.error);
    } else {
      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.$id === id ? { ...note, text: response.data.text } : note
        )
      );
    }
  };
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#8B5CF6" />
      ) : (
        <>
          {error && <Text style={styles.errorText}>{error}</Text>}
          <NoteList notes={notes} onDelete={deleteNote} onEdit={editNote} />
        </>
      )}
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <AntDesign name="plus" size={24} color="white" />
      </TouchableOpacity>
      <AddNoteModal 
        modalVisible={modalVisible} 
        setModalVisible={setModalVisible} 
        newNote={newNote} 
        setNewNote={setNewNote} 
        addNote={addNote} 
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF5FF',
    padding: 20,
  },
  addButton: {
    backgroundColor: '#8B5CF6',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 6,
  },
});
export default NotesScreen;
