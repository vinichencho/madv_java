import axios from "axios";
import { useEffect, useState } from "react";
import GetForm from "./GetForm";

const SetForm = () => {
  const url = "http://localhost:8080/users";
  const [post, setPost] = useState(null);
  const [seen, setSeen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createElement() {
    setFirstName(document.getElementById("first-date").value);
    setSecondName(document.getElementById("second-name").value);
    setPhoneNumber(document.getElementById("phone-number").value);
    setEmail(document.getElementById("email").value);

    axios
      .post(url, {
        firstName: firstName,
        last_ame: secondName,
        phoneNumber: phoneNumber,
        email: email,
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  const showData = () => {
    setSeen(seen ? false : true);
  };

  if (!post) return null;
  return (
    <div className="div-central">
      <div className="div-central-central">
        <form>
          <div className="div-first">
            <label>First Name</label>
            <input type="text" id="first-name" />
          </div>
          <div className="div-second">
            <label>Second Name</label>
            <input type="text" id="second-name" />
          </div>
          <div className="div-phone">
            <label>Phone number</label>
            <input type="text" id="phone-number" />
          </div>
          <div className="div-mail">
            <label>e-mail</label>
            <input type="text" id="email" />
          </div>
        </form>
        <button type="button" onClick={createElement}>
          Create element
        </button>
        <br />
        <button type="button" onClick={showData}>
          Show Data
        </button>
        {seen && <GetForm />}
      </div>
    </div>
  );
};

export default SetForm;
