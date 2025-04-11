
```jsx
//App.jsx
import React, { useState } from "react"
import Pagination from "./Modal"
import "./styles.css"

// create item list
const data = Array.from({ length: 42}, (_,i) => `Item ${i+1}`)

const App = () => {

    // display max items each page
    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(data.length/ itemsPerPage);

    const startIndex = (currentPage -1) * itemsPerPage;
    const currentItems =  data.slice(startIndex, startIndex + itemsPerPage);
    
    return (
        <>
            <div className="container">
                <h2>Paginated List</h2>
                <ul>
                    {
                        currentItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>

                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(page) => setCurrentPage(page)}/>
            </div>
        </>
    )
}

export default App
```

```jsx
//Pagination.jsx
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {

    // get the page numbers
    const pageNumbers = Array.from({ length: totalPages}, (_, i) => i + 1);
    
     return (
         <>
             <div className="pagi-container">
                 <button
                     onClick={()=> onPageChange(currentPage -1)}
                    disabled = {currentPage === 1}>Prev</button>

                {
                    pageNumbers.map((num, index) => (
                        <button key={index}
                                onClick={() => onPageChange(num)}
                                style={{ fontWeight : currentPage === num ? "bold" : "normal",
                                                backgroundColor: currentPage === num ? "#4ade80" : "#f0f0f0"}}>{num}</button>
                    ))
                }
    
                 <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled = {currentPage === totalPages}>Next</button>
             </div>
         </>
     ) 
}

export default Pagination;
```

```css
.container {
    padding: 2rem;
}

.pagi-container {
    display: flex;
    gap: 8px;
    margin-top: 20px;
}
```

1. create a page with item list using array - display all the data
2. create a pagination UI with the next and prev button
3. App.jsx => create useState for current Page and decide on
	1. items shown in each page
	2. calculate the total page shown
	3. slice the lists to show current items
4. send items per page, total no of pages and setCurrentPage function to Pagination component
5. get page numbers from total pages and display them as buttons
6. add onPageChange function and disabled conditions to prev and next button to make them work
7. add onPageChange function to page buttons to make pagnation buttons clickable also add cond. styles to highlight