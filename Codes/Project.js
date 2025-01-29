import React from 'react';

function Projects() {
    return (
      <section className="projects-section">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3 className="project-title">Voice Vision (Generative AI)</h3>
            <p className="project-description">
                Voice Vision is a generative AI model that uses a combination of natural language processing and computer vision to
                generate images based on text prompts.
                </p>
                <a href="https://voicevision.ai" target="_blank" rel="noopener noreferrer">Link</a>
           <p> Developing an innovative software solution that combines advanced voice recognition, NLP, and CV technologies to enhance accessibility for visually impaired users.
                <h2>The goal</h2> By leveraging generative AI, this software interprets voice commands, translates them into actionable outputs, and uses computer vision to describe surroundings or objects in real-time. This project’s unique blend of voice and visual processing aims to enhance autonomy and accessibility, offering a life-changing resource for visually impaired individuals.
            </p>
          </div>
          <div className="project-card">
            <h3 className="project-title">Education Platform </h3>
            <p className="project-description">
            The education platform provides a robust offline learning experience, allowing users to access interactive quizzes, customize their learning paths, and track their progress without needing an internet connection.
                </p>
               <p> 
               Learners can compete on leaderboards to stay motivated and engage with peers, creating a sense of community and friendly competition. The platform includes a vast resource library available offline, with videos, articles, and study materials for a range of subjects. Users can also participate in discussions and complete assessments offline, ensuring that connectivity issues do not hinder their learning journey. Offline messaging enables collaboration and communication, while seamless synchronization ensures that all progress, messages, and data are updated when users reconnect. This platform caters to diverse learning needs, supporting different learning styles and accessibility features for an inclusive educational experience</p>
          </div>
        </div>
      </section>
    );
  }

export default Projects;