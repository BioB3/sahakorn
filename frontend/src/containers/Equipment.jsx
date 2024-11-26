import React, { useState, useEffect } from "react";

async function getUserName(userID) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/member/${userID}/`);
  const responseJSON = await response.json();
  return responseJSON.name;
}

function EquipmentPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [userNames, setUserNames] = useState({}); // To store resolved usernames

  const handleAddEquipment = (event) => {
    // Placeholder for adding equipment
    event.preventDefault();
    setIsModalOpen(false); // Close modal after submission
  };

  useEffect(() => {
    loadEquipments();
  }, []);

  const loadEquipments = async () => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/equipment/`);
    const equipments = await response.json();
    setRows(equipments);

    // Fetch usernames for all unique owner IDs
    const uniqueUserIds = [...new Set(equipments.map((row) => row.owner))];
    const names = {};
    for (const userId of uniqueUserIds) {
      names[userId] = await getUserName(userId);
    }
    setUserNames(names); // Save usernames in state
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">Equipment Management</h1>

      {/* Add Equipments Button */}
      <div className="flex items-center mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary"
        >
          Add Equipment
        </button>
      </div>

      {/* Equipments Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Equipment</th>
              <th>Available</th>
              <th>Owner</th>
              <th>Lent To</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.available ? "Yes" : "No"}</td>
                <td>{userNames[row.owner] || "Loading..."}</td>
                <td>{row.lentTo || "None"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Add New Equipment</h2>
            <form onSubmit={handleAddEquipment}>
              {/* Equipment Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Equipment Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-secondary"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EquipmentPage;
