import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import { connect } from "react-redux";
import { loadEquipments } from "../actions/equipment";

function EquipmentPage ({loadEquipments, equipment}) {
  const [filter, setFilter] = useState("all"); // Filter state: "all", "lent", "mine"
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(async () => {
    await loadEquipments();
  }, [loadEquipments]);
  
  console.log(equipment)

  const handleAddEquipment = (event) => {
    // handling adding equipment.
    // TODO: change to actual code instead of garbage that ChatGPT generated to me
    event.preventDefault();
    setIsModalOpen(false); // Close modal after submission
  };


  // return le actual page.
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">Equipment Management</h1>

      {/* Filter Buttons */}
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-outline"}`}
        >
          All Equipment
        </button>
        <button
          onClick={() => setFilter("lent")}
          className={`btn btn-sm ${filter === "lent" ? "btn-primary" : "btn-outline"}`}
        >
          Lent Equipment
        </button>
        <button
          onClick={() => setFilter("mine")}
          className={`btn btn-sm ${filter === "mine" ? "btn-primary" : "btn-outline"}`}
        >
          My Equipment
        </button>

        {/* Add Equipments Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary ml-auto"
        >
          Add Equipments
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
            {/* {filteredEquipments.map((equipment, index) => (
              <tr key={index}>
                <td>{equipment.name}</td>
                <td>{equipment.available ? "Yes" : "No"}</td>
                <td>{equipment.owner}</td>
                <td>{equipment.lentTo}</td>
              </tr>
            ))} */}
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
};

const mapStateToProps = state => ({
  equipment: state.equipment
})


export default connect(mapStateToProps, {loadEquipments}) (EquipmentPage);
