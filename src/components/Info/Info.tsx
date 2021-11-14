import "./Info.css"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Info() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredInfo">Data Spam</span>
                <div className="dataContainer">
                    <span className="data">2900</span>
                    <span className="dataRate">
                        .2 <ArrowDownwardIcon className="icon" />
                    </span>
                </div>
                <span className="featuredsub"> boogalo</span>
            </div>
            <div className="featuredItem">
                <span className="featuredInfo">Data ??</span>
                <div className="dataContainer">
                    <span className="data">5000</span>
                    <span className="dataRate">
                        5.6 <ArrowDownwardIcon className="icon" />
                    </span>
                </div>
                <span className="featuredsub">just Ideas boogalo</span>
            </div>
            <div className="featuredItem">
                <span className="featuredInfo">Dog water ??</span>
                <div className="dataContainer">
                    <span className="data">69420</span>
                    <span className="dataRate">
                        .69 <ArrowDownwardIcon className="icon" />
                    </span>
                </div>
                <span className="featuredsub">stonks</span>
            </div>
        </div>
    );
}