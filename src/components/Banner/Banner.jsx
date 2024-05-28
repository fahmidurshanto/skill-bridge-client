import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import axios from "axios";
// src="https://i.ibb.co/wp6dZ0Q/banner.jpg"
// https://i.ibb.co/hCW3VHh/banner-2.jpg
// https://i.ibb.co/qBY6Yx1/banner-3.jpg
// https://i.ibb.co/Vx8rLj7/banner-4.jpg

const Banner = () => {
  const [banners, setBanners] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:3000/banner")
      .then((res) => setBanners(res?.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <Carousel infiniteLoop autoPlay autoFocus>
        {banners.map((banner) => {
          return (
            <div key={banner._id} className="h-[80vh] relative">
              <img
                className="shadow-2xl shadow-emerald-200"
                src={banner?.image}
              />
              <p className="legend ">{banner?.legend}</p>
            </div>
          );
        })}
      </Carousel>
      <div className="absolute top-1/3 text-center  w-full py-10">
        <h2 className="text-4xl text-center py-3 text-white font-semibold">
          Focus on skills & matching
        </h2>
        <p className="text-yellow-500 font-semibold">
          We connect skilled professionals with the perfect job opportunities.
        </p>
        <div className="my-5">
          <input
            type="search"
            name=""
            className="p-3 rounded-md bg-transparent text-white border"
          />
          <button className="btn btn-outline btn-warning ml-2">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
