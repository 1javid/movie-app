import React from 'react';
import './Home.css';

import MemberCard from './MemberCard';
import ProjectCard from './ProjectCard';

const teamMembers = [
  {
    id: 1,
    name: 'Jamaladdin',
    surname: 'Talishinskiy',
    faculty: 'Information Technology',
    about: 'Rizing IT project manager',
    image: '/movie-app/images/members/Jamaladdin.jpg'
  },
  {
    id: 2,
    name: 'Javid',
    surname: 'Alakbarli',
    faculty: 'Computer Science',
    about: 'Software Developer, mainly specializing in backend development.',
    image: '/movie-app/images/members/Javid.jpeg'
  },
  {
    id: 3,
    name: 'Anar',
    surname: 'Bayramov',
    faculty: 'Information Technology',
    about: 'Rising software engineer, focused on backend development.',
    image: '/movie-app/images/members/Anar.jpg'
  }
];

const projects = [
  {
    id: 1,
    name: 'Personal Card',
    image: ' /movie-app/images/projects-img/Project-1.png',
    github: {
      jamaladdin: 'https://jamal023.github.io',
      javid: 'https://1javid.github.io/portfolio-card/',
      anar: 'https://bayramovanar.github.io/WebMobile-Portfolio/web.html'
    }
  },
  {
    id: 2,
    name: 'Weather App',
    image: '/movie-app/images/projects-img/Project-2.png',
    github: {
      jamaladdin: 'https://jamal023.github.io/Weather-app/',
      javid: 'https://1javid.github.io/weather-app/',
      anar: 'https://bayramovanar.github.io/WebMobile-Portfolio/Weather/index.html'
    }
  },
  {
    id: 3,
    name: 'Movie App',
    image: '/movie-app/images/projects-img/Project-3.png',
    github: {
      jamaladdin: '',
      javid: '',
      anar: ''
    }
  }
]

export default function Home() {
  return (
    <div className="home">
      <h1 className="title">Introduction</h1>
      <p className="intro"><i>As a Code of Duty team, we have developed a React app
        that provides information and statistics about the top 1000 IMDB movies, as well
        as actors, directors, and others.</i></p>
      <h1 className="title">Team Members</h1>
      <div className="team-members">
        {teamMembers.map(member => <MemberCard key={member.id} member={member} />)}
      </div>
      <h1 className="title">Projects</h1>
      <div className="projects">
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
      </div>
    </div>
  );
}