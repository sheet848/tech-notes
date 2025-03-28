# React Excel Sheet Implementation

Here's an example of React code that allows dynamic addition and deletion of rows and columns in a table resembling an Excel spreadsheet.

### Key Additions

1. **Add Row**:
    
    - `addRow` creates a new row object with empty fields for all existing columns. It uses `data.length + 1` to assign a unique `id`.
    - A button (`Add Row`) is added to trigger this function.
2. **Add Column**:
    
    - `addColumn` prompts the user for a new column name.
    - If the name is unique, it's added to the `columns` state, and all existing rows are updated with an empty field for that column.
    - A button (`Add Column`) is added to trigger this function.
3. **Dynamic Column Handling**:
    
    - The table now uses the `columns` state to render headers and cells, making it flexible for adding custom columns.

4. **Delete Row**:
    - The `deleteRow` function removes a specific row based on its `id`.
    - A "Delete Row" button is added to each row.

5. **Delete Column**:
    - The `deleteColumn` function filters out the selected column from `columns` and updates each row to exclude that column.
    - A "Delete" button is added to each column header.

### Explanation

1. **Dynamic Rows**: The "Add Row" button adds a blank row dynamically by creating an object with keys matching the column names.
2. **Dynamic Columns**: The "Add Column" button allows for user-defined columns. A prompt asks for a column name, and it updates both the `columns` state and each row in the `data` state.
3. **Rendering Updates**: Both headers and cells are rendered using the `columns` array, allowing full flexibility when adding new fields.

With these additions, you have a more dynamic and functional Excel-like grid in React.