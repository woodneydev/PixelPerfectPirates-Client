import "./ChatBot.scss";
import React, { useState } from 'react';

function ChatBot() {
    const [messages, setMessages] = useState([
        { text: 'Hello! I am your chatbot.', isBot: true }
    ]);
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            setMessages([...messages, { text: input, isBot: false }]);
            handleBotResponse(input);
            setInput('');
        }
    };

    const handleBotResponse = (userInput) => {
        // In a real scenario, you'd send the user input to a backend or chatbot service
        // and receive a response. For this example, let's simulate a predefined set of responses.
        const botResponse = getBotResponse(userInput);
        setMessages([...messages, { text: botResponse, isBot: true }]);
    };

    const getBotResponse = (userInput) => {
        // Simulating predefined responses here
        return `You said: "${userInput}". Sorry, I'm just a demo chatbot and don't have advanced capabilities.`;
    };

    return (
        <div className="App">
            <div className="chat-container">
                <div className="message-list">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.isBot ? 'bot' : 'user'}`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="input-form">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={input}
                        onChange={handleInput}
                    />
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default ChatBot;