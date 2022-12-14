import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import "./App-Desktop.css";
import "./App-Mobile.css";

function App() {
  const [name, setName] = useState("Naman");
  const [location, setLocation] = useState("Kharpada");
  const [stream, setStream] = useState("Arts");
  const [school, setSchool] = useState("Phunde");
  const [occupation, setOccupation] = useState("Commerce");
  const [religion, setReligion] = useState("Hindu");
  const [meeting, setMeeting] = useState("Just Conversation");
  const [image, setimage] = useState("./images.png");
  const [gender, setGender] = useState("male");
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedLocation, setIsCheckedLocation] = useState(true);
  const [isCheckedOccuption, setIsCheckedoccuption] = useState(true);
  const [isCheckedReligion, setIsCheckedReligion] = useState(true);
  const [isCheckedSchool, setIsCheckedSchool] = useState(true);

  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const handleOnChangeReligion = () => {
    setIsCheckedReligion(!isCheckedReligion);
  };
  const handleOnChangeLocation = () => {
    setIsCheckedLocation(!isCheckedLocation);
  };
  const handleOnChangeOccuption = () => {
    setIsCheckedoccuption(!isCheckedOccuption);
  };
  const handleOnChangeSchool = () => {
    setIsCheckedSchool(!isCheckedSchool);
  };

  const handleInputLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleInputStream = (e) => {
    setStream(e.target.value);
  };

  const handleInputSchool = (e) => {
    setSchool(e.target.value);
  };
  const handleOccupation = (e) => {
    setOccupation(e.target.value);
  };
  const handleReligion = (e) => {
    setReligion(e.target.value);
  };
  const handleMeeting = (e) => {
    setMeeting(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const generateRandomSchool = () => {
    let schoolArray = [
      "CSMV School",
      "Tukaram Hari Wajekar",
      "Rayat school",
      "Phunde",
    ];
    setSchool(schoolArray[Math.floor(Math.random() * 4)]);
    console.log();
  };
  const generateRandomName = () => {
    let schoolArray = ["Kamesh", "Aman", "Samadhan", "Naman"];
    setName(schoolArray[Math.floor(Math.random() * 4)]);
  };

  const generateRandomSpecialization = () => {
    let schoolArray = ["Science", "Arts", "commerce", "Socialscience"];
    setStream(schoolArray[Math.floor(Math.random() * 4)]);
  };

  const generateRandomLocation = () => {
    let schoolArray = ["Pune", "Mumbai", "Nagpur", "Raigad"];
    setLocation(schoolArray[Math.floor(Math.random() * 4)]);
    console.log();
  };

  const generateRandomOccupation = () => {
    let OccuptionArray = [
      "Engineer",
      "Developer",
      "Businessman",
      "Politacian",
      "Accountant",
    ];
    setOccupation(OccuptionArray[Math.floor(Math.random() * 5)]);
    console.log();
  };
  const generateRandomReligion = () => {
    let religionArray = ["Hindu", "Sikh", "Jain", "Buddhist"];
    setReligion(religionArray[Math.floor(Math.random() * 4)]);
    console.log();
  };

  const photoUpload = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setimage(reader.result);
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  console.log(gender);

  return (
    <div className="App" id="app">
      <h1 className="heading">Bio-Generator</h1>
      <div className="container">
        <div className="option">
          <h2 className="box-option-div">Options</h2>

          <div className="box">
            <div className="label-div">
              <label>Profile Photo:</label>
            </div>

            <input type="file" onChange={photoUpload}></input>
          </div>

          <div className="box">
            <div className="label-div">
              <label>Name:</label>
            </div>

            <input
              type="text"
              value={name}
              placeholder="Enter name"
              onChange={handleInputName}
            />

            <div className="label-div">
              <label>Gender:</label>
            </div>

            <select onChange={(e) => handleGender(e)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <button className="selectbutton" onClick={generateRandomName}>
              Random Name
            </button>
          </div>

          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedLocation}
              onChange={handleOnChangeLocation}
            ></input>
            <div className="label-div">
              <label>Location:</label>
            </div>

            <input
              type="text"
              value={location}
              onChange={handleInputLocation}
            ></input>
            <button className="selectbutton" onClick={generateRandomLocation}>
              Random Location
            </button>
          </div>

          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedSchool}
              onChange={handleOnChangeSchool}
            ></input>
            <div className="label-div">
              <label>School:</label>
            </div>

            <input
              type="text"
              value={school}
              onChange={handleInputSchool}
            ></input>
            <button className="selectbutton" onClick={generateRandomSchool}>
              Random School
            </button>
            <br />
            <div className="label-div">
              <label>Specialization:</label>
            </div>

            <input
              type="text"
              value={stream}
              onChange={handleInputStream}
            ></input>
            <button
              className="selectbutton"
              onClick={generateRandomSpecialization}
            >
              Random Specialization:
            </button>
          </div>

          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedOccuption}
              onChange={handleOnChangeOccuption}
            ></input>
            <div className="label-div">
              <label>Occupation:</label>
            </div>

            <input
              type="text"
              value={occupation}
              onChange={handleOccupation}
            ></input>
            <button className="selectbutton" onClick={generateRandomOccupation}>
              Random Occupation
            </button>
          </div>

          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isCheckedReligion}
              onChange={handleOnChangeReligion}
            ></input>

            <div className="label-div">
              <label>Religious background</label>
            </div>

            <textarea
              rows="5"
              cols="20"
              value={religion}
              onChange={handleReligion}
            ></textarea>
            <button className="selectbutton" onClick={generateRandomReligion}>
              Random Religion
            </button>
          </div>

          <div className="box">
            <input
              type="checkbox"
              value="false"
              checked={isChecked}
              onChange={handleOnChange}
            ></input>
            <div className="label-div">
              <label>Meeting Reason:</label>
            </div>

            <textarea
              className="textarea"
              rows="5"
              cols="20"
              value={meeting}
              onChange={handleMeeting}
            ></textarea>
            <button
              className="selectbutton"
              onClick={() => setMeeting("for peace of mind")}
            >
              For Peace
            </button>
            <button
              className="selectbutton"
              onClick={() => setMeeting("for personal reason")}
            >
              For Personal Reason
            </button>
            <button
              className="selectbutton"
              onClick={() => setMeeting("for payer to fill energetic ")}
            >
              For Prayer
            </button>
          </div>
        </div>

        <div className="result" id="result">
          <h2 className="box-option-div">Result:</h2>
          <div className="result-div">
            <div className="imagediv">
              {image ? <img src={image} alt="profile photo" /> : null}
            </div>

            <div className="box">
              {name} {isCheckedLocation ? `is from the ${location}.` : null}
              {isCheckedSchool
                ? `${
                    gender == "male" ? "He" : "She"
                  } is studying ${stream} at ${school}`
                : null}
              .
              {isCheckedOccuption
                ? `${
                    gender == "male" ? " His" : " Her"
                  } occupation is ${occupation}.`
                : null}
              {isCheckedReligion
                ? `${
                    gender == "male" ? " His" : " Her"
                  } religion is ${religion}.`
                : null}
              {gender == "male" ? "He" : "She"}
              {isChecked ? ` meet you for ${meeting}.` : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
