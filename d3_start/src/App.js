import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import {select} from "d3";



function App() {
    const svgRef = useRef();
    const [data, setData] = useState([25, 35, 40, 60, 20]); 
    useEffect( () => {
        const svg = select(svgRef.current);
        svg
            .selectAll("circle")
            .data(data)
            .join(
                enter => enter.append("circle")
                .attr("class", "new")
                .attr("r",value => value)
                .attr("cx", value => value + 2)
                .attr("cy", value => value + 2)
                .attr("stroke", "red"),
                update => update
                .attr("class", "updated")
                .attr("r",value => value)
                .attr("cx", value => value + 2)
                .attr("cy", value => value + 2),
                exit => exit.remove()

            );
    }, [data]); 
    return (
        <React.Fragment>
        <svg ref={svgRef}></svg>
        <br/>
        <button onClick={() => setData(data.map(value => value + 5))}>
            Update data
        </button>
        <button onClick={() => setData(data.filter(value => value < 35))}>
            Filter data
        </button>
        </React.Fragment>);
        
}

export default App;
