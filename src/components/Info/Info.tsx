import "./Info.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Info() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredInfo">Incidents This Year</span>
                <div className="dataContainer">
                    <span className="data">2900</span>
                    <span className="dataRate">
                        2%<ArrowDownwardIcon className="icon" />
                    </span>
                </div>
                <span className="featuredsub"> Decrease by 2% this year</span>
            </div>
            <div className="featuredItem">
                <span className="featuredInfo">Deaths</span>
                <div className="dataContainer">
                    <span className="data">45</span>
                    <span className="dataRate">
                        10%<ArrowDownwardIcon className="icon" />
                    </span>
                </div>
                <span className="featuredsub">Deaths decreased by 10% this year</span>
            </div>
            <div className="featuredItem">
                <span className="featuredInfo">Avg Number Of Work Hours</span>
                <div className="dataContainer">
                    <span className="data">39</span>
                    <span className="dataRate">
                        1%<ArrowDownwardIcon className="icon" />
                    </span>
                </div>
                <span className="featuredsub">Avg. Hours of work is down by 1% this year</span>
            </div>
        </div>
    );
}