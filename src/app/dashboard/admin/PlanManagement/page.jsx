import React, { useState } from "react";

const initialPlans = [
  { id: 1, speed: "50 Mbps", price: "$30/month", description: "Basic plan for small homes" },
  { id: 2, speed: "100 Mbps", price: "$50/month", description: "Standard plan for families" },
];

function PlanManagement() {
  const [plans, setPlans] = useState(initialPlans);
  const [newPlan, setNewPlan] = useState({ speed: "", price: "", description: "" });

  const addPlan = () => {
    if (!newPlan.speed || !newPlan.price) return;
    setPlans([...plans, { ...newPlan, id: Date.now() }]);
    setNewPlan({ speed: "", price: "", description: "" });
  };

  const removePlan = (id) => {
    setPlans(plans.filter((plan) => plan.id !== id));
  };

  return (
    <div>
      <h2>Plan Management</h2>
      <div>
        <input placeholder="Speed" value={newPlan.speed} onChange={(e) => setNewPlan({ ...newPlan, speed: e.target.value })} />
        <input placeholder="Price" value={newPlan.price} onChange={(e) => setNewPlan({ ...newPlan, price: e.target.value })} />
        <input placeholder="Description" value={newPlan.description} onChange={(e) => setNewPlan({ ...newPlan, description: e.target.value })} />
        <button onClick={addPlan}>Add Plan</button>
      </div>
      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            <b>{plan.speed}</b> - {plan.price} ({plan.description})
            <button onClick={() => removePlan(plan.id)} style={{ marginLeft: "10px" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanManagement;
