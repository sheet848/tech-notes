```jsx
import React, { useState, useEffect, useRef, useCallback } from "react"
//import Pagination from "./Modal
import "./styles.css"

const PAGE_LIMIT = 5;

const App = () => {

    const [data, setData] = useState([]);
    const [skip, setSkip] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] =  useState(true);
    const observerRef = useRef(null);

    const fetchData = useCallback(async () => {

        //set loading
        if(loading || !hasMore) return;
        setLoading(true);
        
        try {
            const res = await fetch(`https://dummyjson.com/products?limit=${PAGE_LIMIT}&skip=${skip}`);
            const result = await res.json();
            setData((prev) => [...prev, ...result.products]);
            setSlip((prev) => prev + PAGE_LIMIT);
            setHasMore(skip + PAGE_LIMIT < result.total);
            
        } catch (err) {
            console.log("Fetch error:", err);
        } finally {
            setLoading(false);
        }
        }, [skip, hasMore, loading]);
    
    useEffect(() => {
        fetchData();
    }, []);

    //create observerRef
    useEffect(() => {
        //create intersection observer
        const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    fetchData();
                }
            },
            { threshold: 1.0 }
        );

        const current = observerRef.current;
        if(current) observer.observe(current);

        return () => {
            if(current) observer.unobserve(current);
        };
    }, [fetchData]);

    return (
        <>
            <div className ="page-container">
                <h2>Infinte Scroll</h2>
                <div className="items-container" >
                     {
                            data.map((prod, index) => (
                                <div className="items" key={index}>
                                    <img alt={prod.title} src={prod.thumbnail}/>
                                    <p>{prod.title}</p>
                                    <small>${prod.price}</small>
                                </div>
                            ))
                        }
                </div>

                { loading && <p>Loading More...</p> }
                {!hasMore && <p>No more items to load.</p>}

                <div ref={observerRef} style={{ height: "1px" }}></div>
            </div>
        </>
    )
}

export default App
```

1. create page UI with how products would be displayed
2. fetch data using useState/ useEffect useCallback
3. set entries for loading , hasMore useState
4. add state functions in useEffect
5. create observerRef useEffect which will fetch more data when limit is off

