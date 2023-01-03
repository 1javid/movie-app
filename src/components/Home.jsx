import React from 'react';
import './Home.css';
import MemberCard from './MemberCard';

const teamMembers = [
  {
    id:1,
    name: 'Jamaladdin',
    surname: 'Talishinskiy',
    faculty: 'Information Technology',
    about: 'Rizing IT project manager',
    image: '/images/members/Jamaladdin.jpg'
  },
  {
    id: 2,
    name: 'Javid',
    surname: 'Alakbarli',
    faculty: 'Computer Science',
    about: 'Software Developer, mainly specializing in back-end development.',
    image: '/images/members/Javid.jpeg'
  },
  {
    id: 3,
    name: 'Anar',
    surname: 'Bayramov',
    faculty: 'Information Technology',
    about: 'Rising software engineer, focused on backend development.',
    image: '/images/members/Anar.jpg'
  }
];

function Home() {
  return (
    <div className="home mt-5">
      <h1 className="title">What is a Web App?</h1>
      <p>A web app is a software application that is accessed via a web browser over the internet. It can be used on any device with a web browser and an internet connection, without the need to install any additional software.</p>
      <div className="team-members">
        {teamMembers.map(member => <MemberCard key={member.id} member={member} />)}
      </div>
    </div>
  );
}

export default Home;
