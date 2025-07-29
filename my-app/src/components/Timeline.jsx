import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLightbulb, FaUserFriends, FaDraftingCompass, FaVideo, FaCogs, FaComments, FaLaptopCode, FaImage, FaStar } from 'react-icons/fa';

const Timeline = () => (
  <section id="timeline" style={{ padding: '60px 0', backgroundColor: '#fff' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>
      Our Project Journey
    </h2>
    <VerticalTimeline lineColor="#009B8A">

      <VerticalTimelineElement
        date="Day 1"
        iconStyle={{ background: '#3f51b5', color: '#fff' }}
        icon={<FaLightbulb />}
      >
        <h3>Kickoff & Questionnaires</h3>
        <p>
          Designed questionnaires with mental models in mind, surveyed teammates
          to clarify different perspectives on project scope.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 2"
        iconStyle={{ background: '#009688', color: '#fff' }}
        icon={<FaUserFriends />}
      >
        <h3>Customer Need Finding</h3>
        <p>
          Conducted in-depth need exploration interviews with the client to uncover
          unmet needs and motivations.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 3"
        iconStyle={{ background: '#ff9800', color: '#fff' }}
        icon={<FaDraftingCompass />}
      >
        <h3>Prototype Direction</h3>
        <p>
          Defined the concept: a social-media-like platform for sharing thoughts
          on Alexander Thomson’s works. Learned “The Mom Test” and prompt
          engineering.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 4"
        iconStyle={{ background: '#673ab7', color: '#fff' }}
        icon={<FaVideo />}
      >
        <h3>First Milestones</h3>
        <p>
          Delivered first blog post and video. Created high-fidelity prototype on
          Figma. Drafted initial feature backlog.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 7"
        iconStyle={{ background: '#795548', color: '#fff' }}
        icon={<FaCogs />}
      >
        <h3>Feature Backlog Update</h3>
        <p>
          Broke down features into Home, Gallery, History, Newsletter pages.
          Completed event scraping tool & integration.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 8"
        iconStyle={{ background: '#607d8b', color: '#fff' }}
        icon={<FaComments />}
      >
        <h3>Clarification</h3>
        <p>
          Clarified specifications with client and refined feature backlog for
          development.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 9"
        iconStyle={{ background: '#00bcd4', color: '#fff' }}
        icon={<FaUserFriends />}
      >
        <h3>Customer Meeting</h3>
        <p>
          Presented prototype at The Mitchell Library. Client feedback was positive.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 10"
        iconStyle={{ background: '#4caf50', color: '#fff' }}
        icon={<FaImage />}
      >
        <h3>Development & Poster Design</h3>
        <p>
          Continued development of pending features. Drafted multiple poster designs.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 11"
        iconStyle={{ background: '#e91e63', color: '#fff' }}
        icon={<FaLaptopCode />}
      >
        <h3>Final Development</h3>
        <p>
          Completed major features. Delivered second blog post and progress video.
          Pending tasks: regex filter, image explanation, deployment.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Final Submission"
        iconStyle={{ background: '#ffc107', color: '#fff' }}
        icon={<FaStar />}
      >
        <h3>Presentation & Reflection</h3>
        <p>
          Delivered blog post, demo video, and final presentation. Achieved an
          interactive platform that encourages organic exploration of Alexander
          Thomson’s works.
        </p>
      </VerticalTimelineElement>

    </VerticalTimeline>
  </section>
);

export default Timeline;
