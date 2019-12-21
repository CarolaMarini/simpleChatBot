import React, { useState, useEffect } from "react";
import ChatBot, { Loading } from "react-simple-chatbot";

import axios from "axios";


export default function CustomChatbot() {
  const config = {
    width: "300px",
    height: "400px",
    floating: true
  };
  const [dailySpecial, setdailySpecial] = useState("");
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    axios.get("/api").then(response => setdailySpecial(response.data)).then(() => setLoading(false))
  }, [])

  const steps = [
    {
      id: "Greet",
      message: "Hola! Bienvenidos a nuestra Pasteleria",
      trigger: "Question"
    },
    {
      id: "Question",
      message: "¿En qué le puedo ayudar?",
      trigger: "Answer"
    },
    {
      id: "Answer",
      options: [
        {
          value: "DailySpecial",
          label: "Quiero saber el especial del dia",
          trigger: "DailySpecial"
        }
      ]
    },
    {
      id: "DailySpecial",
      message: `El especial del dia es ${dailySpecial}`,
      end: true
    },
  ];
  return loading ? <Loading /> : <ChatBot steps={steps}  {...config} />;
}
