// it is custom hook, it can be use again and again 
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  // data load huada loading... dikhau xa
  const [isPending, setIsPending] = useState(true);

  // error lai browser  ma show garna useState ko use
  const [error, setError] = useState(null);

  // useEffect
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          // console.log(res) // response ok:true xa ki xina check garna

          // error show vayo vani if vitra ko message show garxa
          if (!res.ok) {
            throw Error("Could not fetch the data for that resource");
          }
          return res.json();
        })

        // yo line ma data rakhda kai hudai na
        .then((data) => {
          setData(data);

          setIsPending(false);

          setError(null);
        })
        .catch((err) => {
          setError(err.message);

          setIsPending(false);
        });
    }, 100);
  }, [url]);


  return { data, isPending, error}
};

export default useFetch;
