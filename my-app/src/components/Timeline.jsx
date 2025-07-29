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

          <div style={{ marginTop: '16px', background: '#f9f9f9', padding: '16px', borderRadius: '8px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '12px' }}>Volunteer Management Questionnaire</h4>
            
            <form className="space-y-4">
              {/* Question 1 */}
              <div>
                <label className="block font-semibold mb-1">
                  1. How much of your current volunteer coordination is done manually?
                </label>
                <select className="border p-2 rounded w-full">
                  <option>All manual (no tools)</option>
                  <option>Mostly manual with some tools</option>
                  <option>Balanced mix of tools and manual work</option>
                  <option>Mostly automated with tools</option>
                </select>
              </div>

              {/* Question 2 */}
              <div>
                <label className="block font-semibold mb-1">
                  2. What communication methods do you currently use? (Select all that apply)
                </label>
                <div>
                  <label className="block"><input type="checkbox" /> Email</label>
                  <label className="block"><input type="checkbox" /> Messaging apps</label>
                  <label className="block"><input type="checkbox" /> Phone calls</label>
                  <label className="block"><input type="checkbox" /> Social media groups</label>
                  <label className="block"><input type="checkbox" /> Other</label>
                </div>
              </div>

              {/* Question 3 */}
              <div>
                <label className="block font-semibold mb-1">
                  3. Would a centralized calendar system improve coordination?
                </label>
                <div>
                  <label className="block"><input type="radio" name="calendar" /> Yes</label>
                  <label className="block"><input type="radio" name="calendar" /> Maybe</label>
                  <label className="block"><input type="radio" name="calendar" /> No</label>
                </div>
              </div>

              {/* Question 4 */}
              <div>
                <label className="block font-semibold mb-1">
                  4. Which features would be most valuable? (Select all that apply)
                </label>
                <div>
                  <label className="block"><input type="checkbox" /> Event sign-up and reminders</label>
                  <label className="block"><input type="checkbox" /> Volunteer database & profiles</label>
                  <label className="block"><input type="checkbox" /> Attendance tracking</label>
                  <label className="block"><input type="checkbox" /> Training and certification records</label>
                  <label className="block"><input type="checkbox" /> Reporting no-shows</label>
                  <label className="block"><input type="checkbox" /> Reward/achievement system</label>
                </div>
              </div>

              {/* Question 5 */}
              <div>
                <label className="block font-semibold mb-1">
                  5. How important is offline access for volunteers without constant internet?
                </label>
                <div>
                  <label className="block"><input type="radio" name="offline" /> Very important</label>
                  <label className="block"><input type="radio" name="offline" /> Somewhat important</label>
                  <label className="block"><input type="radio" name="offline" /> Not important</label>
                </div>
              </div>

              {/* Additional comments */}
              <div>
                <label className="block font-semibold mb-1">
                  6. Additional comments or requirements:
                </label>
                <textarea
                  className="border p-2 rounded w-full"
                  placeholder="Your comments..."
                />
              </div>
            </form>
          </div>

      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Day 1"
        iconStyle={{ background: '#009688', color: '#fff' }}
        icon={<FaUserFriends />}
      >
        <h3>Customer Need Finding</h3>

          <p style={{ marginBottom: '12px' }}>
            Used a <strong>Double Diamond</strong> approach to ensure that our questions were 
            user-centered and empathetic, reducing bias during interviews.
          </p>

          <h4 style={{ fontWeight: '600', marginTop: '12px', marginBottom: '4px' }}>Meeting Minutes Highlights</h4>

          <h5 style={{ fontWeight: '600', marginTop: '8px', marginBottom: '4px' }}>Current Workflow & Challenges</h5>
          <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
            <li>All processes are manual: individual calendar invites and no central volunteer contact list.</li>
            <li>Communication is strictly 1-to-1.</li>
            <li>Volunteers assist with events (e.g., litter picking, 4–5 hours, H&S training required).</li>
          </ul>

          <h5 style={{ fontWeight: '600', marginTop: '8px', marginBottom: '4px' }}>Ideas & Considerations</h5>
          <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
            <li>Explore existing platforms (scheduling systems, login portals, websites, social media).</li>
            <li>Calendar integration is essential.</li>
          </ul>

          <h5 style={{ fontWeight: '600', marginTop: '8px', marginBottom: '4px' }}>Feature Needs Identified</h5>
          <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
            <li>Track time changes, requirements, notes, accessibility, training, availability, and hours volunteered.</li>
            <li>Manage expenses, budgets, and leftover funds.</li>
            <li>Flag/report no-shows; track event staffing requirements.</li>
            <li>Reward/achievement system: milestones, certificates, incentives.</li>
          </ul>

          <h5 style={{ fontWeight: '600', marginTop: '8px', marginBottom: '4px' }}>Volunteer Considerations</h5>
          <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
            <li>Ensure accessibility and support for offline access for volunteers without constant digital connectivity.</li>
          </ul>

          <h4 style={{ fontWeight: '600', marginTop: '12px', marginBottom: '4px' }}>Two Surprising Insights</h4>
          <ul style={{ paddingLeft: '20px', marginBottom: '12px' }}>
            <li>Heavy lack of workload automation.</li>
            <li>All communication is 1-to-1, no central platform for volunteers and workers.</li>
          </ul>

          <h4 style={{ fontWeight: '600', marginTop: '8px', marginBottom: '4px' }}>Highlighted Need For</h4>
          <ul style={{ paddingLeft: '20px' }}>
            <li>Centralized system with calendar integration.</li>
            <li>Support for managing training and attendance.</li>
            <li>
              Consideration of accessibility and offline access for users 
              without digital means all the time.
            </li>
          </ul>


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
