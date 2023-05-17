import axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../../../Components/Cards/ServiceCard/ServiceCard";
import Spinner from "../../../Components/Spinner/Spinner";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const url = `https://homeservice-ixli.onrender.com/services`;
    axios.get(url).then((data: any) => {
      setLoading(false);
      setServices(data.data);
    });
  }, []);
  return (
    <div id="services">
      <div className="w-full bg-white dark:bg-gray-800 p-12">
        <div className="header flex items-end justify-between mb-12">
          <div className="title">
            <p className="text-4xl font-bold text-gray-800 mb-4">
              Available Services
            </p>
            <p className="text-2xl font-light text-blue-400">
              Book now to get up to 20% cashback
            </p>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
            {services.map((service: any) => (
              <ServiceCard
                key={service._id}
                serviceDetails={service}
              ></ServiceCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
