"use client";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import React, { useState } from "react";

const LatestInterviewsList = () => {
  const [interviewList, setInterviewList] = useState([]);
  return (
    <div className="my-5">
      <h2 className="font-bold text-2xl">Previously Created interviews</h2>
      {interviewList?.length == 0 && (
        <div className="p-5 flex flex-col gap-3 items-center mt-5">
          <Camera className="p-5 w-10 text-primary" />
          <h2>you don't have any interview created</h2>
          <Button> + Create New Interview</Button>
        </div>
      )}
    </div>
  );
};

export default LatestInterviewsList;
