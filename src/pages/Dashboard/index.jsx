import React, { useState } from "react";
import Card from "../../components/Card";
import Model from "../../components/Model";

const Dashboard = () => {
  const bookedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || [];
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    id: 0,
  });
  const save = () => {
    let prevArray = JSON.parse(localStorage.getItem("bookedSeats")) || [];
    prevArray = prevArray.map((item) => {
      if (item.id === userData.id) {
        return userData;
      }
      return item;
    });
    localStorage.setItem("bookedSeats", JSON.stringify([...prevArray]));
    close();
  };
  const close = () => {
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      id: 0,
    });
  };
  const deleteUser = (id) => {
    let prevArray = JSON.parse(localStorage.getItem("bookedSeats")) || [];
    prevArray = prevArray.filter((item) => item.id !== id);
    localStorage.setItem("bookedSeats", JSON.stringify([...prevArray]));
    close();
  };
  return (
    <>
      <Model open={userData?.id !== 0}>
        <div className="">
          <div className=" border-b-2 border-slate-600 px-4">Buy Ticket</div>
          <div className="grid grid-cols-8 my-4 gap-4 p-2">
            <div className=" col-span-3">First Name: </div>
            <div className=" col-span-5">
              <input
                type="text"
                value={userData.firstName}
                className="bottom-1 border-slate-100 outline"
                onChange={(e) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />
            </div>
            <div className=" col-span-3">Last Name: </div>
            <div className=" col-span-5">
              <input
                type="text"
                value={userData.lastName}
                className="outline"
                onChange={(e) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />
            </div>
            <div className=" col-span-3">Email: </div>
            <div className=" col-span-5">
              <input
                type="text"
                className="outline"
                value={userData.email}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>
          </div>

          <div className="flex gap-2 justify-center my-2">
            <button onClick={save} className="p-2 bg-slate-400 rounded-md">
              Save
            </button>
            <button onClick={close} className="p-2 bg-slate-400 rounded-md">
              Cancel
            </button>
          </div>
        </div>
      </Model>
      <div className="text-2xl font-bold">User List</div>
      <div className="flex flex-wrap gap-5">
        {bookedSeats.map((user) => (
          <Card user={user} setUserData={setUserData} deleteUser={deleteUser} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
