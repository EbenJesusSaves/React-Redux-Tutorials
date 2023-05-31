import React, { useReducer } from "react";

export const TestingUsers = () => {
  const handler = (e) => {
    getVal(e.target.name, e.target.value);
  };

  const intialState = { name: "", phone: "", city: "" };

  const addName = (state, action) => {
    console.log(action.type + " action logging");
    switch (action.type) {
      case "name": {
        return {
          ...state,
          name: action.name,
        };
      }
      case "phone": {
        return {
          ...state,
          king: action.phone,
        };
      }
      case "city": {
        return { ...state, city: action.city };
      }
    }
  };
  const [state, dispatcher] = useReducer(addName, intialState);

  console.log(state);
  const getVal = (name, value) => {
    console.log(name + " this is what is running");
    switch (name) {
      case "name": {
        dispatcher({ type: "name", name: value });
        break;
      }
      case "phone": {
        dispatcher({ type: "phone", king: value });
        break;
      }
      case "city": {
        dispatcher({ type: "city", city: value });
        break;
      }
    }
  };

  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div>
          <label title="What is your name">What is your name</label>
          <input type="text" name="name" onChange={(e) => handler(e)} />
        </div>
        <div>
          <label title="What is your phone Number ">
            What is your Phone Number
          </label>
          <input type="text" name="phone" onChange={(e) => handler(e)} />
        </div>
        <div>
          <label title="What is your city ">What is name of your city</label>
          <input type="text" name="city" onChange={(e) => handler(e)} />
        </div>
      </form>
    </div>
  );
};
