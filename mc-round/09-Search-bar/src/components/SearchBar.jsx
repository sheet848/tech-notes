import React, { useState } from 'react'

const SearchBar = () => {

    const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Mango'];
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = data.filter((item) =>
            item.toLowerCase().includes(value)
        );

        setFilteredData(filtered);
    }

  return (
    <>
    <div>
        <input type="text"
                placeholder='Search Terms...'
                value={searchTerm}
                onChange={handleSearch}
         />

        <ul>
            {
                filteredData.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </ul>
    </div>
    </>
  )
}

export default SearchBar