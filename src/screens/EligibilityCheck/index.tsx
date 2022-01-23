import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Form from "../../components/Form";
import routes from "../../routes";

interface EligibilityCheckScreenProps {}

const EligibilityCheckScreen: React.FC<EligibilityCheckScreenProps> = () => {
  const [title, onTitleChange] = useState("");
  const [firstName, onFirstNameChange] = useState("");
  const [lastName, onLastNameChange] = useState("");
  const [dob, onDobChange] = useState("");
  const [income, onIncomeChange] = useState("");
  const [employment, onEmploymentChange] = useState("");
  const [houseNumber, onHouseNumberChange] = useState("");
  const [postCode, onPostCodeChange] = useState("");

  let history = useHistory();

  // const renderCards = cards.map((card, index) => (
  //   <p key={index}>{card.label}</p>
  // ));
  // console.log(checkEligibility({ employment: "student", income: 17000 }));

  // const submitForm = (values: { employment: string; income: number }) => {
  //   const eligibleCards = checkEligibility(values);
  //   setCards(eligibleCards);
  // };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const user = {
      title,
      firstName,
      lastName,
      dob,
      income,
      employment,
      houseNumber,
      postCode,
    };
    const url = "http://localhost:4400/eligibility";
    // console.log(values);

    const eligibleCards = await axios.post(url, user);
    console.log(eligibleCards);

    history.push(routes.ELIGIBLE_CARDS, {
      eligibleCards: eligibleCards.data,
    });
  };

  return (
    <div className="container">
      <Form onSubmit={handleSubmit}>
        <h1>Check Eligibility</h1>
        <Select
          onChange={(e) => onTitleChange(e.target.value)}
          value={title}
          label="Title"
        >
          <option hidden>Choose title</option>
          <option value="mr">Mr</option>
          <option value="mrs">Mrs</option>
          <option value="miss">Miss</option>
        </Select>

        <Input
          onChange={(e) => onFirstNameChange(e.target.value)}
          value={firstName}
          label="First Name"
        />
        <Input
          onChange={(e) => onLastNameChange(e.target.value)}
          value={lastName}
          label="Last Name"
        />
        <Input
          onChange={(e) => onDobChange(e.target.value)}
          value={dob}
          type="date"
          label="Date Of Birth"
        />
        <Input
          onChange={(e) => onIncomeChange(e.target.value)}
          value={income}
          type="number"
          label="Income"
        />
        <Input
          onChange={(e) => onHouseNumberChange(e.target.value)}
          value={houseNumber}
          type="number"
          label="House number"
        />
        <Input
          onChange={(e) => onPostCodeChange(e.target.value)}
          value={postCode}
          label="Post Code"
        />
        <Select
          onChange={(e) => onEmploymentChange(e.target.value)}
          value={employment}
          label="Employment"
        >
          <option hidden>Choose employment</option>
          <option value="unemployed">Unemployed</option>
          <option value="part-time">Part-time</option>
          <option value="full-time">Full-time</option>
          <option value="contract">Contract</option>
          <option value="student">Student</option>
        </Select>
        <Button title="Submit" onClick={handleSubmit} />
      </Form>
    </div>
  );
};

export default EligibilityCheckScreen;
