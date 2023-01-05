import React from "react";

const MemberCard = ({ member }) => {
  return (
    <div className="card">
      <div style={{
        backgroundImage: `url(${member.image})`
      }} className="img"></div>
      <h4 className="name">
        {member.name} {member.surname}
      </h4>
      <p className="faculty">{member.faculty}</p>
      <p className="about">{member.about}</p>
    </div>
  );
};

export default MemberCard;