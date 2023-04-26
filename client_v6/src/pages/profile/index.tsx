import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Profile() {
  const [data, setData]:any = useState({})
  useEffect(() => {
    if (localStorage.getItem('token')) {
      axios
        .get("http://localhost:9090/profile", {
          headers: {
            'x-token': JSON.parse(localStorage.getItem('token') || '')
          }
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  }, [localStorage.getItem('token')]);
  return <div>
    {
      data && <div>Name : {data.username}</div>
    }
  </div>;
}

export default Profile;
