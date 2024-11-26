import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const App = () => {
  const [filter, setFilter] = useState(null);

  const equipmentData = [
    { name: "Tractor", status: "Available", note: "" },
    { name: "Plow", status: "Lent", note: "Lent to Alex" },
    { name: "Seeder", status: "Available", note: "" },
    { name: "Harvester", status: "Lent", note: "Lent to John" },
  ];

  const filteredData = filter
    ? equipmentData.filter((item) => item.status === filter)
    : equipmentData;

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">Co-op Equipment</h1>

      {/* Filter Buttons */}
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => setFilter("Lent")}
          className="btn btn-primary"
        >
          Show Lent Equipment
        </button>
        <button
          onClick={() => setFilter(null)}
          className="btn btn-secondary"
        >
          Show All Equipment
        </button>
      </div>

      {/* Equipment List */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Equipment</th>
              <th>Status</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.status}</td>
                <td>{item.note || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
