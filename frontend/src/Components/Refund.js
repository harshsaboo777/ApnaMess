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

export default function Refund(props) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(!open);
  const [Tokens,UpdateTokens] = useState(0);


  const cookies = new Cookies();
  const {mess_id,setTrigger2,trigger2} = props;
  const User_id = cookies.get("User").User_id;

  const handleSubmit = ()=>{

    axios
        .post("http://localhost:5000/Customer/Refund",
        {
          "customer_id" : User_id,
          "Mess_id": mess_id,
        })
        .then((res) => {
          alert("Your request will be processed in 2-3 working days!");
          setTrigger2(!trigger2);
          handleOpen()
        })
        .catch((err) => {
          alert(err);
        });
  }

  return (
    <>
      <Button
      className="ml-3 text-xl inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray rounded-lg bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-cyan-900 font-bold"
      onClick={handleOpen}>Refund Amount</Button>
      <Dialog open={open} handler={handleOpen}>
        <div className="bg-cyan-100 flex items-center justify-between">
        <div className=" px-10 py-2 space-x-3 ">
                
                <span className="text-2xl text-gray-700 poppins select-none">Are you sure want to refund the amount?</span>
            </div>
          
        </div>
        <div className=" px-10 py-2 space-x-3 ">
                
                <span className="text-xl text-red-700 poppins select-none">Note: Only 75 percent amount will be refunded.</span>
            </div>
        <DialogFooter className="bg-cyan-100 space-x-2">
          <Button variant="gradient" color="red" onClick={handleOpen}>
            Cancel
          </Button>
          <Button variant="gradient" color="green" onClick={handleSubmit}>
            Refund
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}