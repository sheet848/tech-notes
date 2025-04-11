```jsx
//app.jsx
import React from "react"
import StarRating from "./comp/Switch"

const App = () => {

    const handleRatingChange = (value) => {
        console.log("Rated:", value);
    }
    
    return (
        <>
            <div>
                <h2>Rate this Product:</h2>
                <StarRating onChange={handleRatingChange}/>
            </div>
        </>
    )
}

export default App;
```

```jsx
//star rating.jsx

import React, {useState} from "react"
import "./switch.css"

const StarRating = ({ maxStars =5, onChange}) => {

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] =  useState(0);


//hovering action

    const handleMouseEnter = (index) => {
        setHoverRating(index);
    }

    const handleMouseLeave = () => {
        setHoverRating(0);
    }

    // handling click action

    const handleClick = (index) => {
        setRating(index);
        if (onChange) onChange(index);
    }
    
    return (
        <>
            <div className="star-container">
        {
            [...Array(maxStars)].map((_, i) => {
                const index = i + 1;

                return (
                    <>
                        <span className="star"
                            style={{ color: (hoverRating || rating) >= index ? "#ffd700" : "#ccc"}}
                            key={index}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleClick(index)}>
                        ★
                        </span>
                    </>
                )
            })
        }
            </div>
        </>
    )
}

export default StarRating;
```

```css
/*style.css */
.star-container {
    display: flex;
    cursor: pointer;
}

.star {
    font-size: 2rem;
}
```

1. write page UI in App.jsx
2. create the star UI with the maxstar value in star rating.jsx
3. create 2 usestate
	1. rating
	2. hoverrating
4. create functions for hover state
	1. handleMouseEnter
	2. handleMouseLeave
5. create function on star clicking
	1. handleClick
6. give handleClick value to handleRatingChange function to print and calculate rating
