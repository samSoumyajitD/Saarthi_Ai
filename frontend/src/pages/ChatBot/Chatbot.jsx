import React from 'react';
import Chatbot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#9333ea',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#e3f2fd',
  botFontColor: '#000',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};

const CustomMessage = ({ previousStep }) => {
  const [response, setResponse] = React.useState('Loading...');
  const responseCache = React.useRef(new Map());

  React.useEffect(() => {
    const getMessage = async () => {
      if (responseCache.current.has(previousStep.value)) {
        setResponse(responseCache.current.get(previousStep.value));
        return;
      }

      try {
        const result = await axios.post('http://localhost:5000/api/chat', {
          message: previousStep.value
        });

        const splitPoint = result.data.reply.search(/\* (?:Definition|Explanation|Undefined)/i);
        const firstResponse = splitPoint !== -1 
          ? result.data.reply.slice(0, splitPoint).trim()
          : result.data.reply.trim();

        responseCache.current.set(previousStep.value, firstResponse);
        setResponse(firstResponse);
      } catch (error) {
        setResponse("Sorry, I'm having trouble connecting to the server.");
      }
    };

    getMessage();
  }, [previousStep]);

  return <div style={{ padding: '10px' }}>{response}</div>;
};

const CustomChatbot = ({ headerTitle = "AI Tutor", firstMessage = "Hello! How can I assist you today?" }) => {
  const steps = [
    {
      id: '1',
      message: firstMessage,
      trigger: 'userInput',
    },
    {
      id: 'userInput',
      user: true,
      trigger: 'botResponse',
    },
    {
      id: 'botResponse',
      component: <CustomMessage />,
      asMessage: true,
      trigger: 'userInput',
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <div 
        style={{
          position: 'fixed', // Keeps the chatbot fixed in place
          bottom: '20px',    // Places the chatbot near the bottom of the screen
          right: '20px',     // Aligns it to the right
          zIndex: 9999,      // Ensures it's on top of other elements
        }}
      >
        <Chatbot
          steps={steps}
          headerTitle={headerTitle}
          floating={false} // Ensures it's always open, not floating
          enableMobileAutoFocus={true}
          bubbleOptionStyle={{
            fontSize: '14px',
            padding: '8px 12px',
          }}
          bubbleStyle={{
            maxWidth: '80%',
            padding: '8px 12px',
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default CustomChatbot;
