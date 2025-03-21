import React, { useState } from 'react'
import './Tabs.css'

const Tabs = ({ tabsData }) => {

    const [ currentTab, setCurrentTab ] = useState(0);

  return (
    <>
    <div className="tabs_container">
        {
            tabsData.map((item, index) => (
                <button key={index} onClick={() => setCurrentTab(index)}
                    className={` ${currentTab === index ? "active" : ""}`}>
                {item.label}</button>
            ))        
        }
    </div>
    <div className="tabs_content">{ tabsData[currentTab].content }</div>
    </>
  )
}

export default Tabs