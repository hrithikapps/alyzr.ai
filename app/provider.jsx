"use client";
import { supabase } from "../services/supabaseClient";
import React, { useContext, useEffect, useState } from "react";
import { UserDetailsContext } from "../context/UserDetailsContext";
const Provider = ({ children }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    createNewUser();
  }, []);

  const createNewUser = () => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      // check if user already exists
      let { data: Users, error } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user?.email);

      console.log("users", Users);
      //if not create a new user
      if (Users?.length == 0) {
        const { data, error } = await supabase.from("Users").insert([
          {
            name: user?.user_metadata?.name,
            email: user?.email,
            picture: user?.user_metadata?.picture,
          },
        ]);
        console.log("data:", data);
        setUser(data);
        return;
      }

      setUser(Users);
    });
  };
  return (
    <UserDetailsContext.Provider value={{ user, setUser }}>
      <div>{children}</div>;
    </UserDetailsContext.Provider>
  );
};

export default Provider;

export const useUser = () => {
  const context = useContext(UserDetailsContext);
  return context;
};
