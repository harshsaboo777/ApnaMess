/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";

export default function MessOwnersSubcribers() {
  const [users, update_users] = useState([
    {
      name: "Harsh Saboo",
      address: "46, Sethi Nagar, Khandwa",
      contact: "9874545412",
    },
    {
      name: "Harsh Saboo",
      address: "46, Sethi Nagar, Khandwa",
      contact: "9874545412",
    },
    {
      name: "Harsh Saboo",
      address: "46, Sethi Nagar, Khandwa",
      contact: "9874545412",
    },
    {
      name: "Harsh Saboo",
      address: "46, Sethi Nagar, Khandwa",
      contact: "9874545412",
    },
    {
      name: "Harsh Saboo",
      address: "46, Sethi Nagar, Khandwa",
      contact: "9874545412",
    },
    {
      name: "Harsh Saboo",
      address: "46, Sethi Nagar, Khandwa",
      contact: "9874545412",
    },
    {
      name: "Harsh Saboo",
      address: "46, Sethi Nagar, Khandwa",
      contact: "9874545412",
    },
    {
      name: "Harsh Saboo",
      address: "46, Sethi Nagar, Khandwa",
      contact: "9874545412",
    },
    {
      name: "Harsh Saboo",
      address: "46, Sethi Nagar, Khandwa",
      contact: "9874545412",
    },
    {
      name: "Harsh Saboo",
      address: "46, Sethi Nagar, Khandwa",
      contact: "9874545412",
    },
  ]);

  return (
    <div class="mx-auto">
      <div class="flex flex-col">
        <div class="overflow-x-auto shadow-md sm:-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden ">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4">
                      {/* <div class="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all" class="sr-only">
                          checkbox
                        </label>
                      </div> */}
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
                    <th scope="col" class="p-4">
                      <span class="sr-only">Details</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {users.map((ele) => (
                    <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                      <td class="p-4 w-4">
                        {/* <div class="flex items-center">
                          <input
                            id="checkbox-table-1"
                            type="checkbox"
                            class="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label for="checkbox-table-1" class="sr-only">
                            checkbox
                          </label>
                        </div> */}
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {ele.name}
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white">
                        {ele.address}
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        +91 {ele.contact}
                      </td>
                      <td class="py-4 px-6 text-sm font-medium text-right whitespace-nowrap">
                        <a
                          href="#"
                          class="text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          Details
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-5">
        <a class="text-blue-600 hover:underline" href="#" target="_blank"></a>.
      </p>
    </div>
  );
}
