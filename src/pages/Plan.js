import React, { useEffect, useState } from "react";
import CheckpageAuth from "auth/CheckpageAuth";
import ProtectedLayout from "Layout/ProtectedLayout";

const Plan = () => {
  const [routeAccess, setRouteAccess] = useState({
    routeAcess: true,
    redirectTo: null,
  });

//   useEffect(() => {
//     setTimeout(() => {
//       setRouteAccess({ routeAcess: false, redirectTo: "/plan-setup" }); // if you want to redirect to any other page except plan
//     }, 4000);
//   }, []);

  return (
    <CheckpageAuth auth={routeAccess}>
      <ProtectedLayout>
        <div>Plan</div>
      </ProtectedLayout>
    </CheckpageAuth>
  );
};

export default Plan;
