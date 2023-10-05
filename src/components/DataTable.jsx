import React from 'react';
import "./datatable.css";
const DataTable = ({ data }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
            <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
