"use client";
import { supabase } from "@/services/supabaseClient";
import React, { useEffect } from "react";

const Provider = ({ children }) => {
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
      }
    });
  };
  return <div>{children}</div>;
};

export default Provider;
