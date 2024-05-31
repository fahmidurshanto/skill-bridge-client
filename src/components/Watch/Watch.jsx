import { useEffect, useState } from "react";

const Watch = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([])
  );
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([]));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const formattedDate = new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
      setCurrentDate(formattedDate);
    }, 1000); // Update every second

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-between items-center bg-violet-600 my-3 ">
      <h4 className="px-10 animate__animated animate__backInLeft text-2xl font-semibold text-white">
        Find your perfect tech job and launch your career in innovation...
      </h4>
      <div className="bg-black px-10 animate__animated animate__backInRight">
        <h2 className="font-extralight text-6xl  text-white pt-5 px-5">
          {currentTime}
        </h2>
        <p className=" pl-5 pb-5 text-white">{currentDate}</p>
      </div>
    </div>
  );
};

export default Watch;
