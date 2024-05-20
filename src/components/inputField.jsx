import React from "react";
import OptionButton from "./optionButton";
import { Input } from "@chakra-ui/react";

const InputField = () => {
  return (
    <div className="input-container">
      <div className="input-field">
        <div className="input">
          <Input placeholder="Enter your query...." size="lg" />
          <OptionButton />
        </div>
      </div>
    </div>
  );
};

export default InputField;
