import "./dataup.css";

export default function DataUp() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">Incident Report</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Names of Employees Affecteed</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="newUserItem">
          <label>Incident Report</label>
          <input type="text" placeholder="Incident Desc" />
        </div>
        <div className="newUserItem">
          <label>Incident Keywords</label>
          <input type="text" placeholder="keywords" />
        </div>
        <div className="newUserItem">
          <label>Company Name</label>
          <input type="text" placeholder="Ex: Data.Inc" />
        </div>
        <div className="newUserItem">
          <label>Work Site</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>On Site?</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <button className="newUserButton">Upload</button>
      </form>
    </div>
  );
}