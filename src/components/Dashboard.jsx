import React, {useState} from "react";
import { Navbar } from "./Navbar";
import DataTable from './DataTable';
import "./dashboard.css";
export const Dashboard = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [filteredData, setFilteredData] = useState([]);
  
    const data = [
      {
        id: 1,
        name: 'Ram',
        email: 'ram@gmail.com',
        password: 'ram123',
      },
      {
        id: 2,
        name: 'Shyam',
        email: 'shyam@yahoo.com',
        password: 'shyam123',
      }
    ];
  
    const handleSearchInputChange = (event) => {
      const query = event.target.value;
      setSearchQuery(query);
  
      const filteredResults = data.filter((item) =>
        (selectedFilter === 'all' || item.category === selectedFilter) &&
        item.name.toLowerCase().includes(query.toLowerCase())
      );
  
      setFilteredData(filteredResults);
     };
  

    const handleFilterChange = (event) => {
      const filterValue = event.target.value;
      setSelectedFilter(filterValue);
  
      const filteredResults = data.filter((item) =>
        (filterValue === 'all' || item.category === filterValue) &&
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      setFilteredData(filteredResults);
    };
  
    
    const filterOptions = ['all', 'ID','Name','Email'];

    const filterData = data.filter((item) => {
      const lowerCaseQuery = searchQuery.toLowerCase();
      const filterLowerCase = selectedFilter.toLowerCase();
      
      if (filterLowerCase === 'all') {
        return item.name.toLowerCase().includes(lowerCaseQuery) ||
          item.email.toLowerCase().includes(lowerCaseQuery) ||
          item.id.toString().includes(lowerCaseQuery);
      } else if (filterLowerCase === 'id') {
        return item.id.toString().includes(lowerCaseQuery);
      } else if (filterLowerCase === 'name') {
        return item.name.toLowerCase().includes(lowerCaseQuery);
      } else if (filterLowerCase === 'email') {
        return item.email.toLowerCase().includes(lowerCaseQuery);
      }
      
      return true; 
    });

  return (
    <div className="data_table">
      <Navbar
      onSearchInputChange={handleSearchInputChange}
      filterOptions={filterOptions}
      onFilterChange={handleFilterChange}
      selectedFilter={selectedFilter}
      />
      
      <h2>Dashboard</h2>
      <div className="filter-dropdown">
          <label htmlFor="filter">Filter:</label>
          <select
            id="filter"
            onChange={handleFilterChange}
            value={selectedFilter}
          >
            {filterOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <DataTable data={filterData}/>
    </div>
  );
};
