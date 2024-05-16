import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [orders,setOrders] = useState([])


  const getAddress = async () => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.get("/api/user/address", {
        headers: { authorization: encodedToken },
      });
      const defaultAddress = response.data.addressList;
      setAddresses([...defaultAddress]);
    } catch (err) {
      console.error(err);
    }
  };
 
  const setNewAddress = async (address) => {
    const encodedToken = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "/api/user/address/",
        { address },
        { headers: { authorization: encodedToken } }
      );
      const newAddress = response.data.addressList;
      setAddresses([...newAddress]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AddressContext.Provider
      value={{
        isAddressModalOpen,
        setAddressModalOpen,
        setNewAddress,
        addresses,
        getAddress,
        orders,
        setOrders
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { useAddress, AddressProvider };
