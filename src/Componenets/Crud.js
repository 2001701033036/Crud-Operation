// import React, { useEffect, useState } from "react";
// import { API_URL } from "../Constants/URL";
// import axios from "axios";

// function Create() {
//   const [productname, setProductname] = useState("");
//   const [price, setPrice] = useState("");
//   const [oldprice, setOldprice] = useState("");
//   const [category, setCategory] = useState("");
//   const [active, setActive] = useState(false);
//   const [descrition, setDescription] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const [apidata, setAPIdata] = useState([]);

//   // Update modal states
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [currentProduct, setCurrentProduct] = useState(null);

//   useEffect(() => {
//     callGetAPI();
//   }, []);

//   const postData = async () => {
//     await axios.post(API_URL, {
//       productname,
//       price,
//       oldprice,
//       category,
//       active,
//       descrition,
//     });

//     callGetAPI();
//     setShowModal(false);
//   };

//   const callGetAPI = async () => {
//     const res = await axios.get(API_URL);
//     setAPIdata(res.data);
//   };

//   const delData = async (id) => {
//     try {
//       await axios.delete(`${API_URL}/${id}`);
//       callGetAPI();
//     } catch (err) {
//       console.error("delete error", err);
//     }
//   };

//   // 🔹 Step 1: Open Update Modal
//   const upData = (product) => {
//     setCurrentProduct(product);
//     setShowUpdateModal(true);
//   };

//   // 🔹 Step 2: Handle Update Save
//   const handleUpdateSave = async () => {
//     await axios.put(`${API_URL}/${currentProduct.id}`, currentProduct);
//     setShowUpdateModal(false);
//     callGetAPI();
//   };

//   return (
//     <div className="p-6 mx-auto h-svh bg-slate-400">
//       <button
//         className="bg-green-600  text-white px-4 py-2 rounded  flex flex-col ml-auto hover:bg-green-700 mb-4"
//         onClick={() => setShowModal(true)}
//       >
//         Add Product
//       </button>

//       {/* Table */}
//       <div className="bg-white shadow-md rounded-lg w-full p-4">
//         <table className="table-auto w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200 text-left">
//               <th className="border p-2">ID</th>
//               <th className="border p-2">Product Name</th>
//               <th className="border p-2">Price</th>
//               <th className="border p-2">Old Price</th>
//               <th className="border p-2">Category</th>
//               <th className="border p-2">Is Active</th>
//               <th className="border p-2">Description</th>
//               <th className="border p-2">Actions</th>
//             </tr>
//           </thead>

//           <tbody>
//             {apidata.map((data) => (
//               <tr key={data.id} className="hover:bg-gray-100">
//                 <td className="border p-2">{data.id}</td>
//                 <td className="border p-2">{data.productname}</td>
//                 <td className="border p-2">{data.price}</td>
//                 <td className="border p-2">{data.oldprice}</td>
//                 <td className="border p-2">{data.category}</td>
//                 <td className="border p-2">
//                   {data.active ? "Active" : "Inactive"}
//                 </td>
//                 <td className="border p-2">{data.descrition}</td>
//                 <td className="border p-2">
//                   <button
//                     className="bg-red-600 text-white px-3 py-1 rounded mr-2 hover:bg-red-700"
//                     onClick={() => delData(data.id)}
//                   >
//                     Delete
//                   </button>
//                   <button
//                     className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
//                     onClick={() => upData(data)} // send full product
//                   >
//                     Update
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* 🔹 Update Modal */}
//       {showUpdateModal && currentProduct && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//           <div className="bg-white rounded-lg shadow-lg p-6 w-96">
//             <h2 className="text-xl font-bold mb-4">Update Product</h2>

//             <input
//               className="border p-2 w-full mb-2"
//               value={currentProduct.productname}
//               onChange={(e) =>
//                 setCurrentProduct({ ...currentProduct, productname: e.target.value })
//               }
//             />
//             <input
//               className="border p-2 w-full mb-2"
//               value={currentProduct.price}
//               onChange={(e) =>
//                 setCurrentProduct({ ...currentProduct, price: e.target.value })
//               }
//             />
//             <input
//               className="border p-2 w-full mb-2"
//               value={currentProduct.oldprice}
//               onChange={(e) =>
//                 setCurrentProduct({ ...currentProduct, oldprice: e.target.value })
//               }
//             />
//             <select
//               className="border p-2 w-full mb-2"
//               value={currentProduct.category}
//               onChange={(e) =>
//                 setCurrentProduct({ ...currentProduct, category: e.target.value })
//               }
//             >
//               <option>Select Category</option>
//               <option>Vegetables</option>
//               <option>Fruits & Nuts</option>
//               <option>Dairy & Cream</option>
//               <option>Packaged Food</option>
//               <option>Staples</option>
//             </select>
//             <div className="mb-2">
//               <label className="mr-2">Active:</label>
//               <input
//                 type="checkbox"
//                 checked={currentProduct.active}
//                 onChange={(e) =>
//                   setCurrentProduct({ ...currentProduct, active: e.target.checked })
//                 }
//               />
//             </div>
//             <textarea
//               className="border p-2 w-full mb-2"
//               value={currentProduct.descrition}
//               onChange={(e) =>
//                 setCurrentProduct({ ...currentProduct, descrition: e.target.value })
//               }
//             />

//             <div className="flex justify-end">
//               <button
//                 className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
//                 onClick={() => setShowUpdateModal(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="bg-blue-600 text-white px-4 py-2 rounded"
//                 onClick={handleUpdateSave}
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Create;




import React, { useEffect, useState } from "react";
import { API_URL } from "../Constants/URL";
import axios from "axios";

function Create() {
  const [apidata, setAPIdata] = useState([]);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false); // 🔹 differentiate create/update
  const [currentProduct, setCurrentProduct] = useState({
    id: "",
    productname: "",
    price: "",
    oldprice: "",
    category: "",
    active: false,
    descrition: "",
  });

  useEffect(() => {
    callGetAPI();
  }, []);

  // 🔹 GET all products
  const callGetAPI = async () => {
    const res = await axios.get(API_URL);
    setAPIdata(res.data);
  };

  // 🔹 POST new product
  const postData = async () => {
    await axios.post(API_URL, currentProduct);
    callGetAPI();
    setShowModal(false);
  };

  // 🔹 PUT update product
  const updateData = async () => {
    await axios.put(`${API_URL}/${currentProduct.id}`, currentProduct);
    callGetAPI();
    setShowModal(false);
  };

  // 🔹 DELETE product
  const delData = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      callGetAPI();
    } catch (err) {
      console.error("delete error", err);
    }
  };

  // 🔹 Open Create Modal
  const openCreateModal = () => {
    setIsUpdate(false);
    setCurrentProduct({
      id: "",
      productname: "",
      price: "",
      oldprice: "",
      category: "",
      active: false,
      descrition: "",
    });
    setShowModal(true);
  };

  // 🔹 Open Update Modal
  const openUpdateModal = (product) => {
    setIsUpdate(true);
    setCurrentProduct(product);
    setShowModal(true);
  };

  // 🔹 Handle Save (decides Create or Update)
  const handleSave = () => {
    if (isUpdate) {
      updateData();
    } else {
      postData();
    }
  };

  return (
    <div className="p-6 mx-auto">
      {/* Create Button */}
      <button
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4"
        onClick={openCreateModal}
      >
        Create Product
      </button>

      {/* Table */}
      <div className="bg-white shadow-md rounded-lg w-full p-4">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border p-2">ID</th>
              <th className="border p-2">Product Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Old Price</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Is Active</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {apidata.map((data) => (
              <tr key={data.id} className="hover:bg-gray-100">
                <td className="border p-2">{data.id}</td>
                <td className="border p-2">{data.productname}</td>
                <td className="border p-2">{data.price}</td>
                <td className="border p-2">{data.oldprice}</td>
                <td className="border p-2">{data.category}</td>
                <td className="border p-2">
                  {data.active ? "Active" : "Inactive"}
                </td>
                <td className="border p-2">{data.descrition}</td>
                <td className="border p-2">
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded mr-2 hover:bg-red-700"
                    onClick={() => delData(data.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                    onClick={() => openUpdateModal(data)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal (Create + Update) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-bold mb-4">
              {isUpdate ? "Update Product" : "Create Product"}
            </h2>

            <input
              className="border p-2 w-full mb-2"
              placeholder="Product Name"
              value={currentProduct.productname}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, productname: e.target.value })
              }
            />
            <input
              className="border p-2 w-full mb-2"
              placeholder="Price"
              value={currentProduct.price}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, price: e.target.value })
              }
            />
            <input
              className="border p-2 w-full mb-2"
              placeholder="Old Price"
              value={currentProduct.oldprice}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, oldprice: e.target.value })
              }
            />
            <select
              className="border p-2 w-full mb-2"
              value={currentProduct.category}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, category: e.target.value })
              }
            >
              <option>Select Category</option>
              <option>Vegetables</option>
              <option>Fruits & Nuts</option>
              <option>Dairy & Cream</option>
              <option>Packaged Food</option>
              <option>Staples</option>
            </select>

            <div className="mb-2">
              <label className="mr-2">Active:</label>
              <input
                type="checkbox"
                checked={currentProduct.active}
                onChange={(e) =>
                  setCurrentProduct({ ...currentProduct, active: e.target.checked })
                }
              />
            </div>

            <textarea
              className="border p-2 w-full mb-2"
              placeholder="Description"
              value={currentProduct.descrition}
              onChange={(e) =>
                setCurrentProduct({ ...currentProduct, descrition: e.target.value })
              }
            />

            <div className="flex justify-end">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded mr-2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded"
                onClick={handleSave}
              >
                {isUpdate ? "Save Changes" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Create;
