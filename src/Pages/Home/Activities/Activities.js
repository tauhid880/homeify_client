import React from "react";
import { useQuery } from "@tanstack/react-query";
import Activity from "./Activity";

const Activities = () => {
  const { data: activities = [] } = useQuery({
    queryKey: ["activities"],
    queryFn: async () => {
      const res = await fetch(
        `https://homeify-server-orpin.vercel.app/activities`
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {activities.map((activity) => (
          <Activity key={activity._id} activity={activity}></Activity>
        ))}
      </div>
    </section>
  );
};

export default Activities;
