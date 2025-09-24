import React, { use, useEffect, useState } from "react";
import Container from "../Container";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
const Home = () => {
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [all, setAll] = useState([]);
  const db = getDatabase();

  const handleText = (e) => {
    setMsg(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!msg) {
      setError("Type Your Message.");
    } else {
      set(push(ref(db, "chat/")), {
        Msg: msg,
      });
    }
  };

  useEffect(() => {
    const chatRef = ref(db, "chat/");
    onValue(chatRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
      setAll(arr);
      console.log(all);
    });
  }, []);
  return (
    <>
      <Container>
        <h1 className="text-center text-[50px] font-SUSE">Chating Hub</h1>
        <div className="border-2 p-4 h-[400px] overflow-y-scroll">
          {all.map((item) => (
            <p className="p-3 border-2 w-[300px] font-SUSE my-[10px]">{item.Msg}</p>
          ))}
        </div>
        {error && <p className="font-SUSE text-center mt-[20px]">{error}</p>}
        <form action="" className="mt-[20px] text-center">
          <input
            onChange={handleText}
            type="text"
            className="border-2 p-4 w-[500px]"
            placeholder="Write You Message"
          />
          <button
            onClick={handleClick}
            className="p-4 font-SUSE bg-amber-200 ml-[20px] cursor-pointer"
          >
            Send
          </button>
        </form>
      </Container>
    </>
  );
};

export default Home;
