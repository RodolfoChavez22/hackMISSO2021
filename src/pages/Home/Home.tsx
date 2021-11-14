import Chart from "../../components/Chart/Chart";
import Info from "../../components/Info/Info";
import { userData } from "../../harddata/Data";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

import "./Home.css";

export default function Home() {
    return (
        <div className="home">
            <Info />
            <Chart data={userData} title="Data Analytics" grid datakey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}