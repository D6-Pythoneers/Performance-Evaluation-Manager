import react from "react";
import { createContext, useContext, useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import axios from "axios";
import Swal from 'sweetalert2'
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl + "/api/token/";
const AuthContext = createContext();

export function useAuth () {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error("You forgot AuthProvider!");
  return auth;
}

export function AuthProvider (props) {
  const [state, setState] = useState({
    tokens: null,
    user: null,
    login,
    logout,
  
  });
  useEffect(() => {
    let tokens;
    // client side 
    if (typeof window !== "undefined") {
      tokens = JSON.parse(window.localStorage.getItem("tokens"));
    }

    console.log(tokens)
    if (tokens) {
      const decodedAccess = jwt.decode(tokens.access);

      const newState = {
        tokens,
        user: {
          username: decodedAccess.username,
          email: decodedAccess.email,
          id: decodedAccess.user_id,
          name: decodedAccess.name,
          role: decodedAccess.role,
          sid: decodedAccess.sid,
          nid: decodedAccess.nid,
          eid: decodedAccess.eid,
          qualification: decodedAccess.qualification,
          directorate: decodedAccess.directorate,
        },
      };

      setState((prevState) => ({ ...prevState, ...newState }));
    }
  }, []);

  async function login (username, password) {

    try {
      const response = await axios.post(tokenUrl, { username, password });
      console.log(response.data)
      if (typeof window !== "undefined") {
        window.localStorage.setItem("tokens", JSON.stringify(response.data));
      }

      const decodedAccess = jwt.decode(response.data.access);

      const newState = {
        tokens: response.data,
        user: {
          username: decodedAccess.username,
          email: decodedAccess.email,
          id: decodedAccess.user_id,
          name: decodedAccess.name,
          role: decodedAccess.role,
          sid: decodedAccess.sid,
          nid: decodedAccess.nid,
          eid: decodedAccess.eid,
          qualification: decodedAccess.qualification,
          directorate: decodedAccess.directorate,
        },
      };

      setState((prevState) => ({ ...prevState, ...newState }));

    } catch (error) {
      Swal.fire({
        title: 'Authintication error!',
        text: 'password or username invalid!',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }


  }

  function logout () {
    window.localStorage.clear();
    const newState = {
      tokens: null,
      user: null,
    };
    setState((prevState) => ({ ...prevState, ...newState }));
  }


  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
