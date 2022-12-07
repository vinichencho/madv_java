import axios from "axios";
import { useEffect,useState } from "react";

const GetForm = () => {
  const [post, setPost] = useState(null);
  const url = "http://localhost:8080/users";

  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data);
    });
  }, []);
  console.log(post)
  if (!post) return null;
  return (
    <div>
      <div><table>
        <tr>
          <th>id</th>
          <th>fist name</th>
          <th>last name</th>
          <th>phone number</th>
          <th>email</th>
        </tr>
        {post.map((e) => {
          return (
            
              
                <tr>
                  <td>{e.id}</td>
                  <td>{e.firstName}</td>
                  <td>{e.lastName}</td>
                  <td>{e.phoneNumber}</td>
                  <td>{e.email}</td>
                </tr>
              
              
          )
        })}
        </table>
      </div>
    </div>
  );
};

export default GetForm;
