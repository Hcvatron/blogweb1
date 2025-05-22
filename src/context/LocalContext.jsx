import { createContext, useContext, useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from '../firebase/firebaseConfig';

const LocalContext = createContext();

export const LocalProvider = ({ children }) => {
  const [currentTFN, setCurrentTFN] = useState({ intlFormat: "", localFormat: "" });
  const [webinfo,setwebinfo] = useState({
    name: "HcVatron",
    phone: "",
    phonecall: "",
    address:"105 Jagriti Bhawan, near Adarsh Nagar, Bariatu, Ranchi - 834009 Jharkhand",
    address2:"10601 Clarence Drive, Suite 250, Frisco, TX 75033",
    email:"info@hcvatron.com"
});

const [selectedUserBlog, setSelectedUserBlog] = useState(()=> localStorage.getItem('selectedBlog') ? JSON.parse(localStorage.getItem('selectedBlog')) : null);
const [toPayment, setToPayment] = useState('false');

useEffect(()=>{
  localStorage.setItem('selectedBlog', JSON.stringify(selectedUserBlog));
})
  // Fetch TFN from Firebase
  useEffect(() => {
    const fetchTFN = async () => {
      try {
        const docRef = doc(db, "company-details", "hbiAOJt7IuAq91O5KhaW");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          setCurrentTFN({
            intlFormat: data.phonecall || "",
            localFormat: data.phone || "",
          });
        } else {
          console.log("No such document!");
          setCurrentTFN({ intlFormat: "", localFormat: "" });
        }
      } catch (error) {
        console.error("Error fetching TFN: ", error);
      }
    };

    fetchTFN();
  }, []);

  
  useEffect(() => {
    setwebinfo((prevWebinfo) => ({
      ...prevWebinfo,
      phone: currentTFN.localFormat,
      phonecall: currentTFN.intlFormat,
    }));
  }, [currentTFN]);

  return (
    <LocalContext.Provider value={{ webinfo, setwebinfo,selectedUserBlog, setSelectedUserBlog,toPayment, setToPayment }}>
      {children}
    </LocalContext.Provider>
  );
};

export const useLocalContext = () => useContext(LocalContext);
