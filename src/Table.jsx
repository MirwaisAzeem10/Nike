import React, { useEffect, useState } from "react";
import { database } from "./firebase";

function Table() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    SelectAllData();
  }, []);
  console.log(users);

  function SelectAllData(name, email, fileUrl, password) {
    database.ref("userDataRecord").on("value", function (AllRecords) {
      setUsers(Object.values(AllRecords.val()));
    });
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              password
            </th>
            <th scope="col" className="px-6 py-3">
              File
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody id="tbody">
          {users?.map((user) => (
            <tr>
              <th scope="col" className="px-6 py-3">
                {user?.name}
              </th>
              <th scope="col" className="px-6 py-3">
                {user?.email}
              </th>
              <th scope="col" className="px-6 py-3">
                {user?.password}
              </th>
              <th scope="col" className="px-6 py-3">
                {user?.fileUrl === "video" ? (
                  <video width="320" height="240" controls>
                    <source src={user.fileUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img style={{ width: "10%" }} src={user.fileUrl} />
                )}
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
