import React, { useState, useEffect } from "react";
import axios from "axios";
import DeliveryHeading from "./DeliveryHeading";
import Footer from "./Footer";
import "../ComponentStyles/messTiffins.css";
import styles from "../ComponentStyles/SignUp.module.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function DeliveryDashboard(){
  let deliver_id = cookies.get("User").User_id;
  const [code, setcode] = useState(0);
  const [Mess_id,update_Mess_id] = useState(0);
  const [mess_users, update_mess_users] = useState([]);
  
  const fetch_mess_id = async (e) => {
    await 
    axios
      .post("http://localhost:5000/Delivery_boy/fetch_mess_id/",
      {
        "deliver_id":deliver_id
      })
      .then((res) => {
        update_Mess_id(res.data.mess_id);
      });
  };

  const fetch_mess_users = async (e) => {
    await 
    axios
      .post("http://localhost:5000/Delivery_boy/fetch_mess_users/",
      {
        "Mess_id":Mess_id
      })
      .then((res) => {
        update_mess_users(res.data);
      });
  };

  useEffect(() => {
    fetch_mess_id();
	}, []);

  useEffect(()=>{
    fetch_mess_users();
  },[Mess_id]);


  const handleChange = (e) => {
    const { value } = e.target;
    setcode(value
    );
  };
  const handleSubmit = (e) => {
    if (
      code !== "" 
    ) {
     console.log(deliver_id);
       e.preventDefault();
       axios
         .post("http://localhost:5000/Delivery_boy/check_mess_unique", {deliver_id,code})
         
          .then((res) => {
          alert(res.data);
      //     navigate("/login");
      //   })
        });
    } else {
      alert("Invalid Inputs");
    }
  }

  return (
    <div className="bg-gray-500">
      <DeliveryHeading />
      
      <div className={styles.container}>
      <div className={styles.loginbox}>
      <div className={styles.loginemail}>
      <p className={styles.logintext}>Enter Unique Code</p>
      <div className={styles.inputgroup}>
      <div className={styles.inputgroup}>
              <input
                type="number"
                placeholder="Unique code"
                name="code"
                value={code}
                onChange={handleChange}
                required
              />
            </div>
            </div>
            <div className={styles.inputgroup}>
              <button
                className={styles.btn}
                name="submit"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </div>
          </div>
          
          </div>
        
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
       <Footer /> 
       
    </div>
  );
}

export default DeliveryDashboard;