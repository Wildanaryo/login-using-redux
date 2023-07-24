import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onLogout } from "../redux/action/authAction";

import {
  onProductFail,
  onProductLoad,
  onProductSucceed,
} from "../redux/action/productAction";

export default function Users() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useSelector((state) => state.productReducer);

  const getUser = async () => {
    try {
      dispatch(onProductLoad(true));
      const res = await axios.get(`https://reqres.in/api/users?page=1`);
      dispatch(onProductSucceed(res.data.data, false));
    } catch (error) {
      console.log(error);
      dispatch(onProductFail(false, error.message));
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleLogout = () => {
    dispatch(onLogout(""));
    navigate("/");
  };

  if (list === "") {
    return null;
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        style={{ marginBottom: "10px", backgroundColor: "red" }}
      >
        Log Out
      </button>
      {list ? (
        list.map((user) => (
          <div
            key={user.id}
            style={{
              border: "3px solid white",
              marginBottom: "15px",
              padding: "10px",
              width: "500px",
              display: "grid",
              alignItems: "center",
              borderRadius: "25px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={user.avatar} alt={`photo of ${user.first_name}`} />
            </div>
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <h3>{user.email}</h3>
            <h4>
              <button style={{ marginRight: "10px" }}>Edit</button>
              <button>Delete</button>
            </h4>
          </div>
        ))
      ) : (
        <h3>data tidak ditemukan</h3>
      )}
    </div>
  );
}
