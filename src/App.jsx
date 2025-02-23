import React from 'react';

const services = [
  {
    title: 'CW News',
    description: 'Get the latest news powered by AI.',
    videoLinks: [
      {
        title: 'Unlocking the Future AI Services for Cityworks',
        url: 'https://www.youtube.com/watch?v=PMoJyRtBfYs',
      },
      {
        title: 'Agentic Asset Management System',
        url: 'https://www.youtube.com/watch?v=zbvXdy9eJNk',
      },
    ],
  },
  {
    title: 'CW Podcast',
    description: 'Listen to AI-generated podcasts.',
     videoLinks: [
      {
        title: 'AI Services Opportunities - Deep Dive',
        url: 'https://www.youtube.com/watch?v=LiXcfwAWPUs',
      },
    ],
  },
  {
    title: 'CW Chatbot',
    description: 'Interact with our AI chatbot for assistance.',
    videoLinks: [
      {
        title: 'CW Assistant Chatbot',
        url: 'https://tinyurl.com/CWAssistant',
      },
    ],
  },
  {
    title: 'AI Assistant',
    description: 'Your personal AI assistant for daily tasks.',
  },
  {
    title: 'AI Automation',
    description: 'Automate your workflows with AI.',
  },
    {
    title: 'AI Interface',
    description: 'User interface design powered by AI.',
  },
  {
    title: 'AI Agent',
    description: 'AI agents for various tasks.',
  },
  {
    title: 'AI Tasker',
    description: 'AI task management and scheduling.',
  },
  {
    title: 'CW Service Request',
    description: 'AI-powered service request handling.',
  },
  {
    title: 'AI Trainer',
    description: 'Train your AI models with our tools.',
  },
  {
    title: 'AI Game',
    description: 'Play fun AI-powered games.',
  },
  {
    title: 'AI Quiz',
    description: 'Test your knowledge with AI quizzes.',
  },
    {
    title: 'AI Support',
    description: 'Get AI-powered support for your needs.',
  },
  {
    title: 'AI Project Ideas',
    description: 'Discover new AI project ideas.',
  },
  {
    title: 'AI Researcher',
    description: 'AI tools for research and analysis.',
  },
    {
    title: 'AMS Best Practices',
    description: 'Best practices for Asset Management System.',
  },
];

function App() {
  return (
    <div className="app-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          {service.videoLinks &&
            service.videoLinks.map((video, videoIndex) => (
              <a
                key={videoIndex}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {video.title}
              </a>
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;
