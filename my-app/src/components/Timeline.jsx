import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import { NavLink } from 'react-router-dom';
import { FaLightbulb, FaUserFriends, FaDraftingCompass, FaVideo, FaCogs, FaComments } from 'react-icons/fa';

const Timeline = () => (
  <section id="timeline" style={{ padding: '60px 0', backgroundColor: '#fff' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>
      Our Project Journey
    </h2>
    <VerticalTimeline lineColor="#009B8A">
      <VerticalTimelineElement
        iconStyle={{ background: '#60bd0eff', color: '#fff' }}
        icon={<FaComments />}
        contentStyle={{
          background: '#FCFEFF', border: '2px solid #008B8A', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 139, 138, 0.2)', padding: '20px',
        }}
        contentArrowStyle={{ borderRight: '7px solid #008B8A' }}
      >
        <h3 style={{ color: '#008B8A', fontWeight: 'bold', marginBottom: '10px' }}>
          Former Business Partner Meeting <span style={{ fontWeight: 'normal' }}>(22 July 2025)</span>
        </h3>

        <p style={{ color: '#333', marginBottom: '12px' }}>
          On the first partner meeting day, we met with our organization partner to discuss the project scope and
          gather initial requirements. This meeting helped us align our goals and expectations. We utilized the
          double diamond approach learnt from the lecture to communicate with our partner, asking effective questions
          to uncover their needs.
        </p>
        <div className="timeline-flipcards">

          {/* Flipcard 1: Meeting Minutes Highlights */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="timeline-flipcard-front">
                <div className="card-content">
                  <h3>Meeting Minutes Highlights</h3>
                  <p>Overview of current workflow, challenges, and suggested solution.</p>
                </div>  
              </div>
              <div className="flip-card-back">
                <div>
                  <ul>
                    <li>Manual, fragmented workflow.</li>
                    <li>Platform & calendar integration proposed.</li>
                    <li>Need tracking, reporting, and accessibility features.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Flipcard 2: Surprising Insights */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="timeline-flipcard-front">
                <div className="card-content">
                  <h4>Insights Discovered</h4>
                  <p>Unexpected issues uncovered during business partner interview.</p>
                </div>
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
                <div className="card-content">
                  <h4>User Needs</h4>
                  <p>Identified requirements to meet user pain points and enhance overall experience.</p>
                </div>
              </div>
              <div className="flip-card-back">
                <ul>
                  <li>Centralized system with calendar integration.</li>
                  <li>Training and attendance management features.</li>
                  <li>Offline and accessibility support for users.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: '#008B8A', color: '#fff' }}
        icon={<FaVideo />}
        contentStyle={{
          background: '#FCFEFF', border: '2px solid #008B8A', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 139, 138, 0.2)', padding: '20px',
        }}
        contentArrowStyle={{ borderRight: '7px solid #008B8A' }}
      >
        <h3 style={{ color: '#008B8A', fontWeight: 'bold', marginBottom: '10px' }}>
          Kickoff & Questionnaires <span style={{ fontWeight: 'normal' }}>(23 July 2025)</span>
        </h3>

        <p style={{ color: '#333', marginBottom: '12px' }}>
          After the day of partner meeting, we explored team perspectives and designed a questionnaire to
            better understand user needs, focusing on communication, scheduling, and accessibility. 
        </p>

        <NavLink to="/reflection/questionnaires" activeClassName="active"> 
         <button className="questionnaire-button">Go to Questionnaire</button>
        </NavLink>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: '#c31a7fff', color: '#fff' }}
        icon={<FaLightbulb />}
        contentStyle={{
          background: '#FCFEFF', border: '2px solid #008B8A', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 139, 138, 0.2)', padding: '20px',
        }}
        contentArrowStyle={{ borderRight: '7px solid #008B8A' }}
      >
        <h3 style={{ color: '#008B8A', fontWeight: 'bold', marginBottom: '10px' }}>
          Background Research <span style={{ fontWeight: 'normal' }}>(23 - 25 July 2025)</span>
        </h3>

        <p style={{ color: '#333', marginBottom: '12px' }}>
          As part of our background research into Friends of the River Kelvin (FORK), we explored their official website to better understand their branding, offerings, and communication channels. We identified their core color palette by inspecting the site's visual elements, allowing us to integrate a consistent aesthetic into our Figma prototypes. This ensures our design aligns visually with the organization's existing identity and fosters a more authentic user experience.
        </p>
        <p>
          We also examined the site's functionality, particularly the account section, to assess how volunteers might register. Through this, we discovered that signing up as a volunteer requires purchasing a paid membership—volunteer access is not freely available. Additionally, we noted that FORK provides a general contact email (hello@fork.org.uk) for public enquiries, offering a direct channel for follow-up communication or clarification.
        </p>

      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: '#ff9800', color: '#fff' }}
        icon={<FaDraftingCompass />}
        contentStyle={{
          background: '#FCFEFF', border: '2px solid #008B8A', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 139, 138, 0.2)', padding: '20px',
        }}
        contentArrowStyle={{ borderRight: '7px solid #008B8A' }}
      >
        <h3 style={{ color: '#008B8A', fontWeight: 'bold', marginBottom: '10px' }}>
          Low-Fi Prototyping Design <span style={{ fontWeight: 'normal' }}>(25 - 28 July 2025)</span>
        </h3>
        <p style={{ color: '#333', marginBottom: '12px' }}>
          We developed low-fidelity wireframes to establish the basic layout and
          functionality of the platform. These wireframes focused on key user
          interactions and information architecture, allowing us to iterate quickly
          based on feedback.
        </p>
        <NavLink to="/reflection/prototyping" activeClassName="active">
         <button className="questionnaire-button">Go to Prototype</button>
        </NavLink>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: '#00bcd4', color: '#fff' }}
        icon={<FaUserFriends />}
        contentStyle={{
          background: '#FCFEFF',
          border: '2px solid #008B8A',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 139, 138, 0.2)',
          padding: '20px',
        }}
        contentArrowStyle={{ borderRight: '7px solid #008B8A' }}
      >
        <h3 style={{ color: '#008B8A', fontWeight: 'bold', marginBottom: '10px' }}>
          Latter Business Partner Meeting <span style={{ fontWeight: 'normal' }}>(31 July 2025)</span>
        </h3>

        <p style={{ color: '#333', marginBottom: '12px' }}>
          During this follow-up meeting with Friends of River Kelvin, we presented our mid-fidelity prototype
          (derived from 3 low-fi versions) and shared the vision for the high-fidelity system. The partner gave detailed feedback
          on features, usability, accessibility, and system analytics, which helped shape the future implementation plan.
        </p>

        <div className="feedback-cards-container">

          {/* Card 1: Positive Feedback */}
          <div className="insight-card" style={{ minHeight: '220px' }}>
            <div className="insight-card-inner">
              <div className="insight-card-front">
                <div className="insight-card-content">
                  <h3>What They Liked</h3>
                  <p>Positive feedback on current features and interface design.</p>
                </div>  
              </div>
              <div className="insight-card-back">
                <ul>
                  <li>Centralised calendar for event overview</li>
                  <li>Available volunteering opportunities listed clearly</li>
                  <li>Human touch through chat and call options</li>
                  <li>Same functions on both website and mobile app</li>
                  <li>Notification/reminder system for events</li>
                  <li>Web and mobile accessibility</li>
                  <li>Minimalist, easy-to-navigate design, especially for senior demographics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 2: Suggestions */}
          <div className="insight-card" style={{ minHeight: '220px' }}>
            <div className="insight-card-inner">
              <div className="insight-card-front">
                <div className="insight-card-content">
                  <h3>Suggestions for Improvement</h3>
                  <p>Feature requests to enhance accessibility and backend analytics.</p>
                </div>  
              </div>
              <div className="insight-card-back">
                <ul>
                  <li>Add option to specify accessibility requirements on signup</li>
                  <li>Create dashboard with export (Excel) functionality</li>
                  <li>Track total volunteer hours per person</li>
                  <li>Show number of active volunteers per event</li>
                  <li>Display waitlists for fully booked events</li>
                  <li>Track number of clicks and signups/bookings</li>
                  <li>Include “volunteered since” data for records</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: '#795548', color: '#fff' }}
        icon={<FaCogs />}
        contentStyle={{
          background: '#FCFEFF', border: '2px solid #008B8A', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 139, 138, 0.2)', padding: '20px',
        }}
        contentArrowStyle={{ borderRight: '7px solid #008B8A' }}
      >
        <h3 style={{ color: '#008B8A', fontWeight: 'bold', marginBottom: '10px' }}>
          High-Fi Prototyping Design <span style={{ fontWeight: 'normal' }}>(29 July - 2 August 2025)</span>
        </h3>
        <p style={{ color: '#333', marginBottom: '12px' }}>
          We developed high-fidelity prototypes to finalize the user interface and
          interactions. These prototypes incorporated detailed design elements,
          such as typography, colors, and interactions, to provide a realistic
          representation of the final product. A sample of the high-fidelity prototype is available on the
          <NavLink to="/" activeClassName="active"> Homepage.</NavLink>
        </p>
      </VerticalTimelineElement>

    </VerticalTimeline>
  </section>
);

export default Timeline;
