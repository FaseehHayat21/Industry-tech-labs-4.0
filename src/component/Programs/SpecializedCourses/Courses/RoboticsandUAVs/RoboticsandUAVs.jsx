import React from 'react';
import './RoboticsandUAVs.css';

export default function RoboticsandUAVs() {
  return (
    <section className="bootcamp-section">
      <div className="banners">
        <h1>Robotics and UAVs Bootcamp</h1>
      </div>
      <div className="content">
        <h1><strong>Welcome to the Robotics and UAVs Bootcamp</strong></h1>
        <p>
          Embark on a journey to revolutionize the future of robotics and unmanned aerial vehicles (UAVs)! 
          This comprehensive bootcamp is designed for graduates, university students, and aspiring deep tech 
          founders who are passionate about harnessing the power of robotics and UAVs to transform industries and societies. 
          Over the next few weeks, you'll gain hands-on experience with cutting-edge technologies, learn from expert instructors, 
          and collaborate with like-minded individuals to create innovative projects that can change the world.
        </p>
      </div>

      <div className="course-content">
        <h1><strong>Course Curriculum:</strong></h1>
        <ul>
          <h1><strong>Module 1: Introduction to Robotics and UAVs (Week 1-2)</strong></h1>
          <li><p>• Overview of robotics and UAVs</p></li>
          <li><p>• History and evolution of robotics and UAVs</p></li>
          <li><p>• Types of robots and UAVs (autonomous, semi-autonomous, human-operated)</p></li>
          <li><p>• Applications of robotics and UAVs (industrial, agricultural, medical, military)</p></li>
        </ul>
        <ul>
          <h1><strong>Module 2: Robotics Fundamentals (Week 3-4)</strong></h1>
          <li><p>• Robot kinematics and dynamics</p></li>
          <li><p>• Robot sensing and perception (computer vision, lidar, GPS)</p></li>
          <li><p>• Robot actuators and control systems (motors, servos, PID control)</p></li>
          <li><p>• Robot programming languages (C++, Python, ROS)</p></li>
        </ul>
        <ul>
          <h1><strong>Module 3: UAV Fundamentals (Week 5-6)</strong></h1>
          <li><p>• UAV aerodynamics and flight dynamics</p></li>
          <li><p>• UAV propulsion systems (electric, gas, hybrid)</p></li>
          <li><p>• UAV control systems (autopilots, flight controllers)</p></li>
          <li><p>• UAV sensors and payloads (cameras, lidar, GPS)</p></li>
        </ul>
        <ul>
          <h1><strong>Module 4: Robot Operating System (ROS) and UAV Software (Week 7-8)</strong></h1>
          <li><p>• Introduction to ROS and its ecosystem</p></li>
          <li><p>• ROS programming using C++ and Python</p></li>
          <li><p>• UAV software frameworks (PX4, ArduPilot)</p></li>
          <li><p>• UAV programming using C++ and Python</p></li>
        </ul>
        <ul>
          <h1><strong>Module 5: Computer Vision and Machine Learning for Robotics and UAVs (Week 9-10)</strong></h1>
          <li><p>• Introduction to computer vision and machine learning</p></li>
          <li><p>• Object detection and tracking using OpenCV and TensorFlow</p></li>
          <li><p>• Image processing and segmentation using OpenCV and scikit-image</p></li>
          <li><p>• Machine learning algorithms for robotics and UAVs (SLAM, object recognition)</p></li>
        </ul>
        <ul>
          <h1><strong>Module 6: Robotics and UAVs Project Development (Week 11-12)</strong></h1>
          <li><p>• Project ideation and planning</p></li>
          <li><p>• Project development and implementation</p></li>
          <li><p>• Project testing and debugging</p></li>
          <li><p>• Project presentation and demonstration</p></li>
        </ul>
        <ul>
          <h1><strong>Module 7: Entrepreneurship and Innovation in Robotics and UAVs (Week 13-14)</strong></h1>
          <li><p>• Introduction to entrepreneurship and innovation</p></li>
          <li><p>• Market research and analysis for robotics and UAVs</p></li>
          <li><p>• Business model development and pitching</p></li>
          <li><p>• Funding opportunities and resources for robotics and UAVs startups</p></li>
        </ul>
      </div>

      <div className="prerequisites">
        <h1><strong>Prerequisites:</strong></h1>
        <ul>
          <li><p>• Basic programming skills in C++ and Python</p></li>
          <li><p>• Familiarity with robotics and UAVs concepts and principles</p></li>
          <li><p>• No prior experience with ROS or UAV software required</p></li>
        </ul>
      </div>

      <div className="target-audience">
        <h1><strong>Target Audience:</strong></h1>
        <ul>
          <li><p>• Graduates and university students interested in robotics and UAVs</p></li>
          <li><p>• Aspiring deep tech founders and entrepreneurs</p></li>
          <li><p>• Professionals from industries related to robotics and UAVs (aerospace, automotive, manufacturing)</p></li>
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
