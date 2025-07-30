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
        <h3>Day 1 – Kickoff & Questionnaires</h3>
        <p style={{ marginBottom: '12px' }}>
            On Day 1, we explored team perspectives and designed a questionnaire to
            better understand user needs, focusing on communication, scheduling,
            and accessibility.
        </p>

      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 1"
        iconStyle={{ background: '#009688', color: '#fff' }}
        icon={<FaUserFriends />}
      >
        <div className="timeline-flipcards">

          {/* Flipcard 1: Meeting Minutes Highlights */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="timeline-flipcard-front">
                <h4>Meeting Minutes Highlights</h4>
                <p style={{ marginLeft: '10px' }}>Overview of current workflow, challenges, and brainstormed ideas.</p>
              </div>
              <div className="flip-card-back">
                <div>
                  <ul>
                    <li>Manual, fragmented workflow.</li>
                    <li>Platform & calendar integration proposed.</li>
                    <li>Need tracking, reporting, and accessibility features.</li>
                  </ul>

                  {/* <h5>Ideas & Considerations</h5>
                  <ul>
                    <li>Explore existing platforms (scheduling, portals, social media).</li>
                    <li>Calendar integration is essential.</li>
                  </ul>

                  <h5>Feature Needs</h5>
                  <ul>
                    <li>Track time, notes, availability, training, and accessibility.</li>
                    <li>Manage expenses, budgets, and no-show reporting.</li>
                    <li>Implement reward/achievement system.</li>
                  </ul>

                  <h5>Volunteer Considerations</h5>
                  <ul>
                    <li>Support offline access for volunteers with limited digital access.</li>
                  </ul> */}
                </div>
              </div>
            </div>
          </div>

          {/* Flipcard 2: Surprising Insights */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="timeline-flipcard-front">
                <h4>Two Surprising Insights</h4>
                <p>Unexpected issues uncovered during user interviews.</p>
              </div>
              <div className="flip-card-back">
                <ul>
                  <li>Severe lack of automation in workflow processes.</li>
                  <li>All communication is 1-to-1; no centralized volunteer platform.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Flipcard 3: Highlighted Need */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="timeline-flipcard-front">
                <h4>Highlighted Need For</h4>
                <p>Identified core requirements to enhance operations.</p>
              </div>
              <div className="flip-card-back">
                <ul>
                  <li>Centralized system with calendar integration.</li>
                  <li>Training and attendance management features.</li>
                  <li>Accessibility and offline access support for users.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
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
