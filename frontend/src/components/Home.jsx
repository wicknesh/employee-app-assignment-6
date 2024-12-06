import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate ();

  const apiURL = import.meta.env.VITE_EMP_API;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiURL}/users/all/`);
        setDatas(response.data);
      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading (false);
      }
    };
    fetchData();
  });

  if(loading) {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="spinner-border" style={{ width: '8rem', height: '8rem' }} role="status"></div>
        </div>
      </>
    )
  }

  function editData (val) {
    navigate('/edit', {state:{val}});
  }

  return (
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Created on</th>
    </tr>
  </thead>
  <tbody>
    {datas.map((data, index) => (
      <tr key={index} style={{ borderBottom: '2px solid #252525' }}>
        <td>{index + 1}</td>
        <td>{data.name}</td>
        <td>{data.username}</td>
        <td>{new Date(data.createdAt).toISOString().split('T')[0]}</td>
        <td>
          <button className="btn btn-primary" onClick={editData(data)}>Edit</button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </>
  )
}

export default Home