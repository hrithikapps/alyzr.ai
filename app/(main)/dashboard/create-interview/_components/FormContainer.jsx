import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InterviewType } from "@/services/Constants";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FormContainer = ({ onHandleInputChange }) => {
  const [interviewType, setinterviewType] = useState([]);

  useEffect(() => {
    if (interviewType) {
      onHandleInputChange("type", interviewType);
    }
  }, [interviewType]);

  const AddInterviewType = (type) => {
    const data = interviewType.includes(type);
    if (!data) {
      setinterviewType((prev) => [...prev, type]);
    } else {
      const result = interviewType.filter((item) => item != type);
      setinterviewType(result);
    }
  };

  return (
    <div className="p-5 bg-white rounded-xl">
      <div className="">
        <h2 className="text-sm font-medium">Job Position</h2>
        <Input
          onChange={(event) =>
            onHandleInputChange("jobPosition", event.target.value)
          }
          placeholder="eg : Full Stack Developer"
        />
      </div>
      <div className="mt-5 ">
        <h2 className="text-sm font-medium">Job Description </h2>
        <Textarea
          onChange={(event) =>
            onHandleInputChange("jobDescription", event.target.value)
          }
          placeholder="Enter details : Job Description"
          className="h-[200px] mt-2"
        />
      </div>
      <div className="mt-5 ">
        <h2 className="text-sm font-medium">Interview Duration </h2>
        <Select
          onValueChange={(value) => onHandleInputChange("duration", value)}
        >
          <SelectTrigger className="w-full mt-2">
            <SelectValue placeholder="Select Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5 min">5 min</SelectItem>
            <SelectItem value="15 min">15 min</SelectItem>
            <SelectItem value="30 min">30 min</SelectItem>
            <SelectItem value="45 min">45 min</SelectItem>
            <SelectItem value="60 min">60 min</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-5 ">
        <h2 className="text-sm font-medium">Interview Type</h2>
        <div className="flex gap-3 flex-wrap mt-2">
          {InterviewType.map((type, index) => (
            <div
              key={index}
              className={`flex items-center hover:bg-secondary cursor-pointer gap-2 p-1 px-2 bg-white border border-gray-300 rounded-2xl && ${
                interviewType.includes(type.title) && "bg-blue-100 text-primary"
              } `}
              onClick={() => AddInterviewType(type.title)}
            >
              <type.icon className="h-4 w-4" />
              <span>{type.title}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-7 flex justify-end">
        <Button>
          Generate Question <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default FormContainer;
