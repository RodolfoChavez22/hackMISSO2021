import "./WidgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Sign In Status</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img
                        src="https://www.anime-planet.com/images/characters/1339.jpg?t=1587503008"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Bryant Le</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton o">
                        <Visibility className="widgetSmIcon" />
                        Online
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://imgs2.goodsmileus.com/image/cache/data/productimages/Nendoroids/JosephJoestar/03-1200x1200.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Frank Bui</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton i">
                        <Visibility className="widgetSmIcon" />
                        Idle
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://cdn.alfabetajuega.com/wp-content/uploads/2020/11/itachi-uchiha-naruto-portada.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Rodolfo Chavez</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton o">
                        <Visibility className="widgetSmIcon" />
                        Online
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://i.insider.com/6183d20c23745d001824fa70?width=700"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Elon Musk</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton f">
                        <Visibility className="widgetSmIcon" />
                        Offline
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://www.wired.com/wp-content/uploads/2019/01/Culture_GeeksGuide_Bezos.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Jeff Bezos</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton f">
                        <Visibility className="widgetSmIcon" />
                        Offline
                    </button>
                </li>
            </ul>
        </div>
    );
}