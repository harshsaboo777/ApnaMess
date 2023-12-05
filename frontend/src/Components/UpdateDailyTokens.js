import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { AiOutlineMinus , AiOutlinePlus} from 'react-icons/ai';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
} from "@material-tailwind/react";

export default function UpdateDailyTokens(props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(!open);
  const [Tokens,UpdateTokens] = useState(0);

  const handleChange = (e)=>{
    const {value} = e.target;
    UpdateTokens(value);
    // console.log(Tokens);
  }

  const cookies = new Cookies();
  const {mess_id,setTrigger,trigger} = props;
  const User_id = cookies.get("User").User_id;

  const handleSubmit = (props)=>{

    axios
        .post("http://localhost:5000/Customer/Change_daily_tokens",
        {
          "customer_id" : User_id,
          "Mess_id": mess_id,
          "Daily_tokens":Tokens
        })
        .then((res) => {
          alert("Successfully Updated Daily Tokens!");
          setTrigger(!trigger);
          handleOpen()
        })
        .catch((err) => {
          alert("Inadequate amount of Tokens left");
        });
  }

  return (
    <>
      <Button
      className="ml-3 text-xl inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray rounded-lg bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-cyan-900 font-bold"
      onClick={handleOpen}>Update Daily Tokens</Button>
      <Dialog open={open} handler={handleOpen}>
        {/* <div className="bg-cyan-100 flex items-center justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div> */}
        <div className="flex px-10 py-2 space-x-3 ">
                <AiOutlineMinus
                    onClick={() => {
                        Tokens === 0 ? UpdateTokens(0) : UpdateTokens(Tokens - 1);

                    }}
                    className="bg-cyan-500 text-2xl bg-primary w-10 h-10 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1" />
                <span className="text-3xl text-gray-700 poppins select-none">{Tokens}</span>
                <AiOutlinePlus
                    onClick={() => {
                      Tokens===10? 
                      UpdateTokens(10):
                      UpdateTokens(Tokens + 1);

                    }}
                    className="bg-cyan-500 text-2xl bg-primary w-10 h-10 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1" /> 
            </div>
        <DialogFooter className="bg-cyan-100 space-x-2">
          <Button variant="gradient" color="red" onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            Update
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}