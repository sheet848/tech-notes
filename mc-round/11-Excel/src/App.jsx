import { useState } from 'react'
import './App.css'

function App() {
  const initialData = [
    { id: 1, name: 'John', age: 25, city: 'New York'},
    { id: 2, name: 'Jane', age: 30, city: 'Los Angeles'},
    { id: 3, name: 'Mike', age: 35, city: 'Chicago'},
  ];

  const [data, setData] = useState(initialData);
  const [columns, setColumns] = useState(Object.keys(initialData[0]));

  const handleInputChange = (rowIndex, field, value) => {
    const updatedData = [...data];
    updatedData[rowIndex][field] = value;
    setData(updatedData);
  }

  const addRow = () => {
    const newRow = {};
    columns.forEach((col) => {
      newRow[col] = '';
    })
    newRow.id = data.length + 1;
    setData([...data, newRow]);
  }

  const addColumn = () => {
    const newColumnName = prompt('Enter the new column name:');
    if(newColumnName && !columns.includes(newColumnName)) {
      setColumns([...columns, newColumnName]);
      const updatedData = data.map((row) => (
        { ...row, [newColumnName]: '',}
      ))
      setData(updatedData);
    }
  }

  const deleteRow = (rowId) => {
    const updatedData = data.filter((row) => row.id !== rowId);
    setData(updatedData);
  };

  const deleteColumn = (columnName) => {
    const updatedColumns = columns.filter((col) => col !== columnName);
    setColumns(updatedColumns);
    const updatedData = data.map((row) => {
      const { [columnName]: _, ...remainingFields } = row; // Remove the column
      return remainingFields;
    });
    setData(updatedData);
  };


  return (
    <>
      <div className="App">
        <h1>Excel Sheet Implementation</h1>
        <button onClick={addRow}>Add Row</button>
        <button onClick={addColumn}>Add Column</button>

        <table>
          <thead>
            <tr>
              {
                columns.map((col) => (
                  <th key={col}>{col}
                  <button onClick={() => deleteColumn(col)}>Delete</button>
                  </th>
                ))
              }
            </tr>
          </thead>

          <tbody>
            {
              data.map((row, rowIndex) => (
                <tr key={row.id}>
                  {
                    columns.map((field) => (
                      <td key={field}>
                        <input type="text"
                               value={row[field] || ''}
                               onChange={(e) => handleInputChange(rowIndex, field, e.target.value)} 
                        />
                      </td>
                    ))
                  }
                  <td>
                  <button onClick={() => deleteRow(row.id)}>Delete Row</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
