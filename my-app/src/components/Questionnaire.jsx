import './Questionnaire.css';

const Questionnaire = () => {
    return (
        <div className="questionnaire-container">
            <h1 className="header">Volunteer Management Questionnaire</h1>

            <p className="description">
                This questionnaire helps us better understand volunteer management processes,
                focusing on communication, scheduling, and accessibility.
            </p>

            <form className="questionnaire-form">
                <div className="questionnaire-section">
                    <p className="question">
                        1. How much of your current volunteer coordination is done manually?
                    </p>
                    <div className="answer">
                        <select name="coordination">
                            <option value="all">All manual (no tools)</option>
                            <option value="mostly">Mostly manual with some tools</option>
                            <option value="balanced">Balanced mix of tools and manual work</option>
                            <option value="automated">Mostly automated with tools</option>
                        </select>
                    </div>
                    {/* <div className="answer">
                        <label>
                            <input type="radio" name="coordination" value="all" disabled />
                            All manual (no tools)
                        </label>
                        <label>
                            <input type="radio" name="coordination" value="mostly" disabled />
                            Mostly manual with some tools
                        </label>
                        <label>
                            <input type="radio" name="coordination" value="balanced" disabled />
                            Balanced mix of tools and manual work
                        </label>
                        <label>
                            <input type="radio" name="coordination" value="automated" disabled />
                            Mostly automated with tools
                        </label>
                    </div> */}
                </div>

                <div className="questionnaire-section">
                    <p className="question">
                        2. What communication methods do you currently use? (Select all that apply)
                    </p>
                    <div className="answer">
                        <label>
                            <input type="checkbox" name="communication" value="email" disabled />
                            Email
                        </label>
                        <label>
                            <input type="checkbox" name="communication" value="messaging" disabled />
                            Messaging apps
                        </label>
                        <label>
                            <input type="checkbox" name="communication" value="phone" disabled />
                            Phone calls
                        </label>
                        <label>
                            <input type="checkbox" name="communication" value="social" disabled />
                            Social media groups
                        </label>
                        <label>
                            <input type="checkbox" name="communication" value="other" disabled />
                            Other
                        </label>
                    </div>
                </div>

                <div className="questionnaire-section">
                    <p className="question">
                        3. Would a centralized calendar system improve coordination?
                    </p>
                    <div className="answer">
                        <label>
                            <input type="radio" name="calendar" value="yes" disabled />
                            Yes
                        </label>
                        <label>
                            <input type="radio" name="calendar" value="maybe" disabled />
                            Maybe
                        </label>
                        <label>
                            <input type="radio" name="calendar" value="no" disabled />
                            No
                        </label>
                    </div>
                </div>

                <div className="questionnaire-section">
                    <p className="question">
                        4. Which features would be most valuable? (Select all that apply)
                    </p>
                    <div className="answer">
                        <label>
                            <input type="checkbox" name="features" value="signup" disabled />
                            Event sign-up and reminders
                        </label>
                        <label>
                            <input type="checkbox" name="features" value="profiles" disabled />
                            Volunteer database & profiles
                        </label>
                        <label>
                            <input type="checkbox" name="features" value="attendance" disabled />
                            Attendance tracking
                        </label>
                        <label>
                            <input type="checkbox" name="features" value="training" disabled />
                            Training and certification records
                        </label>
                        <label>
                            <input type="checkbox" name="features" value="noshow" disabled />
                            Reporting no-shows
                        </label>
                        <label>
                            <input type="checkbox" name="features" value="reward" disabled />
                            Reward/achievement system
                        </label>
                    </div>
                </div>

                <div className="questionnaire-section">
                    <p className="question">
                        5. How important is offline access for volunteers without constant internet?
                    </p>
                    <div className="answer">
                        <label>
                            <input type="radio" name="offline" value="very" disabled />
                            Very important
                        </label>
                        <label>
                            <input type="radio" name="offline" value="somewhat" disabled />
                            Somewhat important
                        </label>
                        <label>
                            <input type="radio" name="offline" value="not" disabled />
                            Not important
                        </label>
                    </div>
                </div>

                <div className="questionnaire-section">
                    <p className="question">
                        6. Additional comments or requirements:
                    </p>
                    <div className="answer">
                        <textarea rows="4" cols="50" placeholder="Your comments..." disabled />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Questionnaire;
