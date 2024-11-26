import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const App = () => {
  const [filter, setFilter] = useState("All");

  const marketData = [
    { name: "Apple", type: "Fruits", quantity: 50, price: "$2" },
    { name: "Banana", type: "Fruits", quantity: 30, price: "$1" },
    { name: "Carrot", type: "Vegetables", quantity: 20, price: "$1.5" },
    { name: "Potato", type: "Vegetables", quantity: 100, price: "$0.8" },
    { name: "Rice", type: "Grains", quantity: 200, price: "$3" },
    { name: "Wheat", type: "Grains", quantity: 150, price: "$2.5" },
  ];

  const filteredData =
    filter === "All" ? marketData : marketData.filter((item) => item.type === filter);

  const buyItem = (itemName) => {
    alert(`You bought ${itemName}!`);
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">Co-op Market</h1>

      {/* Filter Buttons */}
      <div className="mb-4 flex space-x-4">
        <button onClick={() => setFilter("All")} className="btn btn-secondary">
          All Items
        </button>
        <button onClick={() => setFilter("Fruits")} className="btn btn-primary">
          Fruits
        </button>
        <button onClick={() => setFilter("Vegetables")} className="btn btn-primary">
          Vegetables
        </button>
        <button onClick={() => setFilter("Grains")} className="btn btn-primary">
          Grains
        </button>
      </div>

      {/* Market Items */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Item</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => buyItem(item.name)}
                    className="btn btn-accent btn-sm"
                  >
                    Buy
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
