import React from "react";
import "tailwindcss/tailwind.css";

const App = () => {
  // Example data for loans and fee status
  const userLoans = [
    { id: 1, amount: "$500", date: "2024-01-15", status: "Active" },
    { id: 2, amount: "$300", date: "2024-03-10", status: "Repaid" },
  ];

  const commonFeeStatus = {
    totalFees: "$120",
    paidFees: "$100",
    dueFees: "$20",
  };

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-6">Co-op Management</h1>

      {/* Loans Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">My Loans</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Loan ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {userLoans.map((loan) => (
                <tr key={loan.id}>
                  <td>{loan.id}</td>
                  <td>{loan.amount}</td>
                  <td>{loan.date}</td>
                  <td>{loan.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          <strong>Total Loans Taken Out:</strong> {userLoans.length}
        </p>
      </section>

      {/* Common Fee Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Common Fee</h2>
        <div className="border p-4 rounded-lg bg-gray-50">
          <p>
            <strong>Total Fees:</strong> {commonFeeStatus.totalFees}
          </p>
          <p>
            <strong>Paid Fees:</strong> {commonFeeStatus.paidFees}
          </p>
          <p>
            <strong>Due Fees:</strong> {commonFeeStatus.dueFees}
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
