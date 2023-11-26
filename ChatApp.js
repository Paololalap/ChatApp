import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './redux/reducers'; // Adjust the path accordingly

const ChatApp = () => {
  const [messageInput, setMessageInput] = useState('');
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);
  const senderCounter = messages.length > 0 ? (messages[messages.length - 1].sender === 'Person 1' ? 2 : 1) : 1;

  const handleSendMessage = () => {
    if (messageInput.trim() === '') return;

    const sender = senderCounter === 1 ? 'Person 1' : 'Person 2';

    const newMessage = {
      text: messageInput,
      sender: sender,
    };

    dispatch(addMessage(newMessage));
    setMessageInput('');
  };

  const getMessageStyle = (sender) => {
    return sender === 'Person 1' ? styles.rightMessage : styles.leftMessage;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {messages.map((message, index) => (
          <View key={index} style={[styles.message, getMessageStyle(message.sender)]}>
            <Text style={styles.sender}>{message.sender}</Text>
            <Text>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          value={messageInput}
          onChangeText={setMessageInput}
        />
        <Pressable style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
  },
  chatContainer: {
    flexGrow: 1,
  },
  message: {
    padding: 8,
    margin: 4,
    borderRadius: 8,
    maxWidth: '70%',
    alignSelf: 'flex-start',
    backgroundColor: '#E0E0E0',
  },
  rightMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  sender: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 10,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ChatApp;
