import React, { useState } from "react";
import Model from "../../components/Model";

const Seat = ({ setUserData, id, bookedSeats }) => {
  const booked = bookedSeats?.some((item) => item?.id === id);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 rotate-90 scale-y-[2] ${
        !booked ? "cursor-pointer" : ""
      }`}
      onClick={() =>
        setUserData({ firstName: "", lastName: "", email: "", id: id })
      }
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${!booked ? "text-green-600" : ""}`}
        d="M10.5 19.5h3m-6.75 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-15a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 4.5v15a2.25 2.25 0 0 0 2.25 2.25Z"
      />
    </svg>
  );
};

const Driver = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
    />
  </svg>
);

const Reservation = () => {
  const bookedSeats = JSON.parse(localStorage.getItem("bookedSeats")) || [];
  console.log(bookedSeats);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    id: 0,
  });
  const save = () => {
    const prevArray = JSON.parse(localStorage.getItem("bookedSeats")) || [];
    localStorage.setItem(
      "bookedSeats",
      JSON.stringify([...prevArray, userData])
    );
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
  return (
    <div>
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
      <div className="text-xl text-center font-semibold my-5 bg-red-400 rounded-xl py-2">
        Click on the Available seats to proceed with your transaction
      </div>
      <div className="xl:w-3/5">
        <div className=" font-semibold text-xl">Lower Deck</div>
        <div className="h-48 p-4 border-2 border-slate-600 flex gap-20">
          <div className="border-r-2 border-slate-600 h-36 px-5">
            <Driver />
          </div>
          <div className="px-5 flex">
            <div className="mt-5">
              <div className="flex gap-10">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Seat
                    id={item}
                    bookedSeats={bookedSeats}
                    setUserData={setUserData}
                  />
                ))}
              </div>
              <div className="flex gap-10 mb-10">
                {[7, 8, 9, 10, 11, 12].map((item) => (
                  <Seat
                    id={item}
                    bookedSeats={bookedSeats}
                    setUserData={setUserData}
                  />
                ))}
              </div>
              <div className="flex gap-10">
                {[13, 14, 15, 16, 17, 18].map((item) => (
                  <Seat
                    id={item}
                    bookedSeats={bookedSeats}
                    setUserData={setUserData}
                  />
                ))}
              </div>
            </div>
            <div className="mx-20 flex flex-col justify-evenly">
              <Seat
                id={19}
                bookedSeats={bookedSeats}
                setUserData={setUserData}
              />
              <Seat
                id={20}
                bookedSeats={bookedSeats}
                setUserData={setUserData}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-3/5 mt-10">
        <div className=" font-semibold text-xl">Upper Deck</div>
        <div className="h-48 p-4 border-2 border-slate-600 flex gap-20">
          {/* <div className="border-r-2 border-slate-600 h-36 px-5">
            <Driver />
          </div> */}
          <div className="px-5 flex">
            <div className="mt-5">
              <div className="flex gap-10">
                {[21, 22, 23, 24, 25, 26].map((item) => (
                  <Seat
                    id={item}
                    bookedSeats={bookedSeats}
                    setUserData={setUserData}
                  />
                ))}
              </div>
              <div className="flex gap-10 mb-10">
                {[27, 28, 29, 30, 31, 32].map((item) => (
                  <Seat
                    id={item}
                    bookedSeats={bookedSeats}
                    setUserData={setUserData}
                  />
                ))}
              </div>
              <div className="flex gap-10">
                {[33, 34, 35, 36, 37, 38].map((item) => (
                  <Seat
                    id={item}
                    bookedSeats={bookedSeats}
                    setUserData={setUserData}
                  />
                ))}
              </div>
            </div>
            <div className="mx-20 flex flex-col justify-evenly">
              <Seat
                id={39}
                bookedSeats={bookedSeats}
                setUserData={setUserData}
              />
              <Seat
                id={40}
                bookedSeats={bookedSeats}
                setUserData={setUserData}
              />
            </div>
          </div>
        </div>
      </div>
      <ul className="marker:text-green list-outside list-disc ml-6 flex gap-10 mt-10 font-semibold">
        <li className="text-green-500">
          <spna className="text-black">Available</spna>
        </li>
        <li>Booked</li>
      </ul>
    </div>
  );
};

export default Reservation;
