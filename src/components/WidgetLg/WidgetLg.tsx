import "./WidgetLg.css";

export default function WidgetLg() {
    const Button = ({ type }: any) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Data Uploads</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Account</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Incident</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://imgs2.goodsmileus.com/image/cache/data/productimages/Nendoroids/JosephJoestar/03-1200x1200.jpg"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Frank Bui</span>
                    </td>
                    <td className="widgetLgDate">10 Nov 2021</td>
                    <td className="widgetLgAmount">Death</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://cdn.alfabetajuega.com/wp-content/uploads/2020/11/itachi-uchiha-naruto-portada.jpg"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Rodolfo Chavez</span>
                    </td>
                    <td className="widgetLgDate">6 Nov 2021</td>
                    <td className="widgetLgAmount">Bone Fracture</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://www.anime-planet.com/images/characters/1339.jpg?t=1587503008"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Bryant Le</span>
                    </td>
                    <td className="widgetLgDate">5 Nov 2021</td>
                    <td className="widgetLgAmount">Bodily Injury</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                            src="https://imgs2.goodsmileus.com/image/cache/data/productimages/Nendoroids/JosephJoestar/03-1200x1200.jpg"
                            alt=""
                            className="widgetLgImg"
                        />
                        <span className="widgetLgName">Frank Bui</span>
                    </td>
                    <td className="widgetLgDate">2 Nov 2021</td>
                    <td className="widgetLgAmount">Sick Leave</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
            </table>
        </div>
    );
}