import React from "react"

export default function MainContent() {
    return (
        <div className="maincontent">
            <h1 className="contentHeading">Fun facts about React</h1>
            <ul>
                <li className="contentList">Was first released in 2013</li>
                <li className="contentList">Has over 100K stars on Github</li>
                <li className="contentList">Is maintained by Facebook</li>
            </ul>
        </div>
    )
}