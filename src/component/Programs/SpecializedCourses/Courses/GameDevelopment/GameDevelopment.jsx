import React from 'react';
import './GameDevelopment.css';

export default function GameDevelopment() {
  return (
    <section className="bootcamp-section">
      <div className="banners">
        <h1>Game Development Bootcamp</h1>
      </div>
      <div className="content">
        <h1><strong>Welcome to the Game Development Bootcamp</strong></h1>
        <p>
          "Unlock your creativity and bring your game ideas to life! In this immersive Game 
          Development bootcamp, we invite professionals and students from the games and app 
          development communities to join us on an epic journey. Over the next few weeks, you'll 
          gain hands-on experience with the latest game development tools, technologies, and 
          techniques. Get ready to level up your skills, network with fellow game enthusiasts, 
          and create unforgettable gaming experiences!"
        </p>
      </div>

      <div className="course-content">
        <h1><strong>Course Curriculum:</strong></h1>
        <ul>
          <h1><strong>Module 1: Game Development Fundamentals (Week 1-2)</strong></h1>
          <li><p>• Introduction to game development</p></li>
          <li><p>• Game development pipelines and workflows</p></li>
          <li><p>• Game engines (Unity, Unreal Engine)</p></li>
          <li><p>• Game programming languages (C#, Java, C++)</p></li>
          <li><p>• Game design principles and concepts</p></li>
        </ul>
        <ul>
          <h1><strong>Module 2: 2D Game Development (Week 3-4)</strong></h1>
          <li><p>• 2D game development using Unity</p></li>
          <li><p>• Sprite creation and animation</p></li>
          <li><p>• 2D physics and collision detection</p></li>
          <li><p>• 2D game design patterns and principles</p></li>
          <li><p>• Project: Develop a 2D game using Unity</p></li>
        </ul>
        <ul>
          <h1><strong>Module 3: 3D Game Development (Week 5-6)</strong></h1>
          <li><p>• 3D game development using Unity</p></li>
          <li><p>• 3D modeling and texturing</p></li>
          <li><p>• 3D physics and collision detection</p></li>
          <li><p>• 3D game design patterns and principles</p></li>
          <li><p>• Project: Develop a 3D game using Unity</p></li>
        </ul>
        <ul>
          <h1><strong>Module 4: Game Programming and Scripting (Week 7-8)</strong></h1>
          <li><p>• Game programming languages (C#, Java, C++)</p></li>
          <li><p>• Game scripting using Unity Script and C#</p></li>
          <li><p>• Game AI and pathfinding</p></li>
          <li><p>• Game networking and multiplayer</p></li>
          <li><p>• Project: Implement game programming and scripting concepts in a game project</p></li>
        </ul>
        <ul>
          <h1><strong>Module 5: Game Art and Animation (Week 9-10)</strong></h1>
          <li><p>• Game art creation using Adobe Photoshop and Illustrator</p></li>
          <li><p>• 2D and 3D animation techniques</p></li>
          <li><p>• Texture mapping and lighting</p></li>
          <li><p>• Game art style and direction</p></li>
          <li><p>• Project: Create game art and animation assets for a game project</p></li>
        </ul>
        <ul>
          <h1><strong>Module 6: Game Testing and Deployment (Week 11-12)</strong></h1>
          <li><p>• Game testing and quality assurance</p></li>
          <li><p>• Game deployment on various platforms (PC, console, mobile)</p></li>
          <li><p>• Game marketing and distribution</p></li>
          <li><p>• Game analytics and monetization</p></li>
          <li><p>• Project: Test and deploy a game project on a chosen platform</p></li>
        </ul>
      </div>

      <div className="prerequisites">
        <h1><strong>Prerequisites:</strong></h1>
        <ul>
          <li><p>• Basic programming skills in C#, Java, or C++</p></li>
          <li><p>• Familiarity with game development concepts and principles</p></li>
          <li><p>• No prior game development experience required</p></li>
        </ul>
      </div>

      <div className="target-audience">
        <h1><strong>Target Audience:</strong></h1>
        <ul>
          <li><p>• Professionals from the games and app development industries</p></li>
          <li><p>• Students interested in game development and design</p></li>
          <li><p>• Anyone looking to gain hands-on experience in game development</p></li>
        </ul>
      </div>
      <div className="links">
        <a href="#projects">Projects</a>
        <a href="#community">Join Our Community</a>
        <a href="#faqs">FAQs</a>
      </div>


    </section>
  );
}
