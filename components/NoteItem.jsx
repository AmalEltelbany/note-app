import { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const NoteItem = ({ note, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  const inputRef = useRef(null);

  const handleSave = () => {
    if (editedText.trim() === "") return;
    onEdit(note.$id, editedText);
    setIsEditing(false);
  };

  return (
    <View style={styles.noteItem}>
      <View style={styles.noteContent}>
        {isEditing ? (
          <TextInput
            ref={inputRef}
            style={styles.input}
            value={editedText}
            onChangeText={setEditedText}
            autoFocus
            onSubmitEditing={handleSave}
            returnKeyType="done"
          />
        ) : (
          <Text style={styles.noteText}>{note.text}</Text>
        )}
      </View>

      <View style={styles.actions}>
        {isEditing ? (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              handleSave();
              inputRef.current?.blur();
            }}
          >
            <Text style={styles.save}>💾</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setIsEditing(true)}
          >
            <Text style={styles.edit}>✏️</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => onDelete(note.$id)}
        >
          <Text style={styles.delete}>❌</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  noteContent: {
    flex: 1, // Ensures text/input takes up remaining space
  },
  noteText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    backgroundColor: "#F8F8F8",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconButton: {
    padding: 8,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  edit: {
    fontSize: 20,
    color: "#3498db",
  },
  save: {
    fontSize: 20,
    color: "#27ae60",
  },
  delete: {
    fontSize: 20,
    color: "#e74c3c",
  },
});

export default NoteItem;
