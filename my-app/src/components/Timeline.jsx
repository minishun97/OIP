import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';
import { NavLink } from 'react-router-dom';
import { FaLightbulb, FaUserFriends, FaDraftingCompass, FaVideo, FaCogs, FaComments, FaLaptopCode, FaImage, FaStar } from 'react-icons/fa';

const Timeline = () => (
  <section id="timeline" style={{ padding: '60px 0', backgroundColor: '#fff' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>
      Our Project Journey
    </h2>
    <VerticalTimeline lineColor="#009B8A">
      <VerticalTimelineElement
        iconStyle={{ background: '#050505ff', color: '#fff' }}
        icon={<FaUserFriends />}
        contentStyle={{
          background: '#FCFEFF', border: '2px solid #008B8A', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 139, 138, 0.2)', padding: '20px',
        }}
        contentArrowStyle={{ borderRight: '7px solid #008B8A' }}
      >
        <h3 style={{ color: '#008B8A', fontWeight: 'bold', marginBottom: '10px' }}>
          First Business Partner Meeting <span style={{ fontWeight: 'normal' }}>(22 July 2025)</span>
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
        icon={<FaLightbulb />}
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
        iconStyle={{ background: '#008B8A', color: '#fff' }}
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
        iconStyle={{ background: '#673ab7', color: '#fff' }}
        icon={<FaVideo />}
        contentStyle={{
          background: '#FCFEFF', border: '2px solid #008B8A', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0, 139, 138, 0.2)', padding: '20px',
        }}
        contentArrowStyle={{ borderRight: '7px solid #008B8A' }}
      >
        <h3 style={{ color: '#008B8A', fontWeight: 'bold', marginBottom: '10px' }}>
          Mid-Fi Prototyping Design <span style={{ fontWeight: 'normal' }}>(28 - 29 July 2025)</span>
        </h3>
        <p>
          We developed mid-fidelity prototypes to refine the user interface and
          interactions. These prototypes incorporated more detailed design elements,
          such as typography, colors, and basic interactions, to provide a clearer
          representation of the final product. 
        </p>
        <p style={{ color: '#333', marginBottom: '12px' }}>  
          A snapshot of it is captured at the 
          bottom of the prototype page.
        </p>
        <NavLink to="/reflection/prototyping" activeClassName="active">
         <button className="questionnaire-button">Go to Prototype</button>
        </NavLink>
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
