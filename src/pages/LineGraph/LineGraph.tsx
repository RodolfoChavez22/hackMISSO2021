import Chart from "../../components/Chart/Chart";
import { userData } from "../../data/Data";
import React from 'react';

import "./LineGraph.css";

export default function Linegraph() {
    return (
        <div className="home">
            <Chart data={userData} title="Data Analytics" grid datakey="Active User" />
        </div>
    )
}