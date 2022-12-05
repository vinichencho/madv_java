import axios from "axios";
import { useEffect } from "react";

const GetForm = () => {
  const [post, setPost] = useState(null);
  const url = "http://localhost:8080/users";

  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;
  return (
    <div>
      <div>
        <h4>ID: {post.id}</h4>
        <h4>First Name: {post.firstName}</h4>
        <h4>Second Name: {post.secondName}</h4>
        <h4>Phone Number: {post.phoneNumber}</h4>
        <h4>E-mail: {post.email}</h4>
      </div>
    </div>
  );
};

export default GetForm;
