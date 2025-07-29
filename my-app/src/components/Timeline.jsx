import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaLightbulb, FaTools, FaRocket, FaStar } from 'react-icons/fa';

const Timeline = () => (
  <section id="timeline" style={{ padding: '60px 0', backgroundColor: '#fff' }}>
    <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Our Journey</h2>
    <VerticalTimeline>
      <VerticalTimelineElement date="2021" iconStyle={{ background: '#3f51b5', color: '#fff' }} icon={<FaLightbulb />}>
        <h3>Inception</h3>
        <p>Ideation and concept development phase.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement date="2022" iconStyle={{ background: '#009688', color: '#fff' }} icon={<FaTools />}>
        <h3>Prototype Build</h3>
        <p>We developed our first functional product prototype.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement date="2023" iconStyle={{ background: '#ff5722', color: '#fff' }} icon={<FaRocket />}>
        <h3>Launch</h3>
        <p>Our project launched publicly to great success.</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement iconStyle={{ background: '#ffc107', color: '#fff' }} icon={<FaStar />} />
    </VerticalTimeline>
  </section>
);

export default Timeline;