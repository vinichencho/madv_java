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

  const firstNameHandler = (event) => {
    setFirstName(event.target.value);
  }

  const secondNameHandler = (event) => {
    setSecondName(event.target.value);
  }
  
  const phoneNumberHandler = (event) => {
    setPhoneNumber(event.target.value);
  }

  const emailHandler = (event) => {
    setEmail(event.target.value);
  }

  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, []);

  function createElement() {
    axios
      .post(url, {
        firstName: firstName,
        lastName: secondName,
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
            <input onChange={firstNameHandler} type="text" id="first-name" />
          </div>
          <div className="div-second">
            <label>Second Name</label>
            <input onChange={secondNameHandler} type="text" id="second-name" />
          </div>
          <div className="div-phone">
            <label>Phone number</label>
            <input onChange={phoneNumberHandler} type="text" id="phone-number" />
          </div>
          <div className="div-mail">
            <label>e-mail</label>
            <input onChange={emailHandler} type="text" id="email" />
          </div>
        </form>
        <button type="submit" onClick={createElement}>
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
