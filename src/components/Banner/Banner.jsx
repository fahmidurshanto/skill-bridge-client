import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get(" https://skill-bridge-server.onrender.com/banner")
      .then((res) => setBanners(res?.data))
      .catch((err) => {
        setError(err.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error}!`,
          showConfirmButton: true,
        });
      });
  }, [error]);

  return (
    <div className="h-[90vh] ">
      <Carousel infiniteLoop autoPlay autoFocus>
        {banners.map((banner) => {
          return (
            <div key={banner._id} className="h-full md:h-[80vh] relative">
              <img
                className="shadow-2xl h-full shadow-emerald-200"
                src={banner?.image}
              />
              <p className="legend ">{banner?.legend}</p>
            </div>
          );
        })}
      </Carousel>
      <div className="absolute top-12 md:top-1/3 text-center  w-full py-10">
        <h2 className="text-4xl text-center py-3 text-white font-semibold">
          Focus on skills & matching
        </h2>
        <p className="text-white font-semibold">
          We connect skilled professionals with the perfect job opportunities.
        </p>
        <div className="my-5">
          <input
            type="search"
            name="search"
            className="p-3 rounded-md bg-transparent text-gray-500 font-bold border border-yellow-500 outline outline-yellow-500"
            placeholder="Job title"
          />
          <button className="btn btn-outline btn-warning ml-2">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
