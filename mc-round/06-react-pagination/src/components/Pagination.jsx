import React from 'react'

const Pagination = ({ pageNo, setPageNo }) => {

    const prevThreeNo = Array.from(
        { length: 3 },
        (_, index)=> pageNo - 1 - index
    ).filter((value) => value > 0).reverse();

    const nextFourNo = Array.from({ length: 4 }, (_, index) => pageNo + index);

    const handlePrev = () => {
        setPageNo(pageNo - 1);
    }

    const handleNext = () => {
        setPageNo(pageNo + 1);
    }

    const paginationArray = [...prevThreeNo, ...nextFourNo];

  return (
    <>
    <div className="pagination-container">
        {
            pageNo > 1 ? (
                <div className="page-btn" onClick={handlePrev}>{"<"}</div>
            ) : (
                ""
            )
        }
        {
            paginationArray.map((value, index) => (
                <div key={index}
                    className={value === pageNo ? "page-btn active" : "page-btn"}
                    onClick={() => setPageNo(value)}>
                    {value}
                </div>
            ))
        }
        <div className="page-btn" onClick={handleNext}>{">"}</div>
    </div>
    </>
  )
}

export default Pagination