/* eslint-disable react/jsx-no-comment-textnodes */
import { useState,useEffect } from "react";
import axios from "axios";
import MessOwnerDeductTokens from "./MessOwnerDeductTokens";
import Cookies from "universal-cookie"

export default function MessOwnersSubcribers() {
  const [mess_users, update_mess_users] = useState([]);
  const [total_tokens,set_total_tokens] = useState(0);
  const [Mess_id,update_Mess_id] = useState(0);
  const [trigger,update_trigger]=useState(0);
  const cookies = new Cookies();
  const User_id = cookies.get("User").User_id;

  const fetch_mess_id = async (e) => {
    console.log("messssss"+User_id);
    await 
    axios
      .post("https://apna-mess-server.onrender.com/Mess_owner/fetch_mess_id/",
      {
        "User_id":User_id
      })
      .then((res) => {
        update_Mess_id(res.data.mess_id);
        
      });
  };

  const fetch_mess_users = async (e) => {
    await 
    axios
      .post("https://apna-mess-server.onrender.com/Mess_owner/View_mess_users/",
      {
        "Mess_id":Mess_id
      })
      .then((res) => {
        update_mess_users(res.data);
      });
  };

  const fetch_total_tokens = async (e) => {
    await 
    axios
      .post("https://apna-mess-server.onrender.com/Mess_owner/fetch_total_tokens/",
      {
        "Mess_id":Mess_id
      })
      .then((res) => {
        console.log(res.data[0].sum);
        set_total_tokens(res.data[0].sum);
      });
  };

  useEffect(() => {
    fetch_mess_id();
	}, []);

  useEffect(()=>{
    fetch_mess_users();
    fetch_total_tokens();
  },[Mess_id,trigger]);


  return (
    <div class="mx-auto">
      
      <div class="flex flex-col">
        <div class="overflow-x-auto shadow-md sm:-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden ">
              <table class="min-w-full divide-y divide-cyan-200 table-fixed dark:divide-gray-700">
                <thead class="bg-cyan-100 dark:bg-cyan-700">
                  <tr>
                    <th scope="col" class="p-4">
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Customer Name
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Customer Address
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Contact Number
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                    >
                      Daily_tokens
                    </th>
                    <th scope="col" class="p-4">
                      <span class="sr-only">Details</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-cyan-200 divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {mess_users.map((ele) => (
                    <tr class="hover:bg-cyan-100 dark:hover:bg-cyan-700">
                      <td class="p-4 w-4">
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {ele.fname } {ele.lname}
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {ele.user_address}
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        +91 {ele.phone_num}
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {ele.daily_tokens }
                      </td>
                      <td class="py-4 px-6 mx-10 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="#"
                          class="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          details
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <MessOwnerDeductTokens total_tokens={total_tokens} mess_id={Mess_id} trigger={trigger} update_trigger={update_trigger}/>

      </div>

      <p class="mt-5">
        <a class="text-blue-600 hover:underline" href="#" target="_blank"></a>.
      </p>
    </div>
  );
}
