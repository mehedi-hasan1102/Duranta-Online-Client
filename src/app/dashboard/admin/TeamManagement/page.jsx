import React, { useState } from "react";

const initialTeam = [
  { id: 1, name: "Alice Johnson", role: "Manager", photo: "https://via.placeholder.com/50" },
  { id: 2, name: "Bob Smith", role: "Technician", photo: "https://via.placeholder.com/50" },
];

function TeamManagement() {
  const [team, setTeam] = useState(initialTeam);
  const [newMember, setNewMember] = useState({ name: "", role: "", photo: "" });

  const addMember = () => {
    if (!newMember.name || !newMember.role) return;
    setTeam([...team, { ...newMember, id: Date.now(), photo: newMember.photo || "https://via.placeholder.com/50" }]);
    setNewMember({ name: "", role: "", photo: "" });
  };

  const removeMember = (id) => {
    setTeam(team.filter((member) => member.id !== id));
  };

  return (
    <div>
      <h2>Team Management</h2>
      <div>
        <input placeholder="Name" value={newMember.name} onChange={(e) => setNewMember({ ...newMember, name: e.target.value })} />
        <input placeholder="Role" value={newMember.role} onChange={(e) => setNewMember({ ...newMember, role: e.target.value })} />
        <input placeholder="Photo URL" value={newMember.photo} onChange={(e) => setNewMember({ ...newMember, photo: e.target.value })} />
        <button onClick={addMember}>Add Member</button>
      </div>
      <ul>
        {team.map((member) => (
          <li key={member.id} style={{ margin: "10px 0" }}>
            <img src={member.photo} alt={member.name} width="50" style={{ marginRight: "10px" }} />
            {member.name} - {member.role}
            <button onClick={() => removeMember(member.id)} style={{ marginLeft: "10px" }}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamManagement;
