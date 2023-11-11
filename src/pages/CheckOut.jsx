import React from "react";
import { useLoaderData } from "react-router-dom";
import { getOrder } from "../services/apiRestaurant";

function CheckOut() {
  const order = useLoaderData();

  return (
    <div className="mt-32 mx-6 lg:mx-52">
      <div className="flex items-center justify-between mb-5">
        <h3 className="font-bold text-2xl">Order {order.id} status</h3>
        <div className="bg-green-500 text-white px-2 py-1.5 rounded-full">
          <h4>PREPARING ORDER</h4>
        </div>
      </div>
      <div className="bg-blue-100 px-7 py-6 rounded-lg my-6">
        <h4 className="font-bold text-lg mb-2">Only 40 minutes left 😃</h4>
        <p className="italic text-gray-600">
          {" "}
          (Estimated delivery: Nov 11, 11:04 AM)
        </p>
        <h3>
          Name : <span>{order.Name}</span>
        </h3>
        <h3>
          Phone Number : <span>{order.Number}</span>
        </h3>
        <h3>
          Localisation : <span>{order.Position}</span>
        </h3>
      </div>
      {order.Order.map((item) => (
        <div className="border-solid border-y-2 border-gray-100 py-2 flex items-center justify-between">
          <h4 className="font-semibold">
            <span>{item.quantity}</span>× {item.name}
          </h4>
          <h4 className="font-semibold">{item.totalPrice} Dh</h4>
        </div>
      ))}

      <div className="my-7 bg-slate-100 px-7 py-6">
        <h2 className="font-bold text-xl">
          To pay on delivery: {order.Total}Dh
        </h2>
      </div>
    </div>
  );
}
export async function loader({ params }) {
  const orderId = params.orderId; // Get orderId from route parameters
  const order = await getOrder(orderId);
  return order;
}

export default CheckOut;
