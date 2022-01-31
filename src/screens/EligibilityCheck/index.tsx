import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Form from "../../components/Form";
import routes from "../../routes";
import { postEligibilityInfo } from "../../fetcher";
import { formErrors } from "./functions";

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
  const [errors, setErrors] = useState<{
    firstName?: string | undefined;
    income?: string | undefined;
    employment?: string | undefined;
  }>({});
  const [errorMessage, setErrorMessage] = useState("");

  let history = useHistory();

  // const formErrors = (values: {
  //   [x: string]: any;
  //   title?: string;
  //   firstName?: string;
  //   lastName?: string;
  //   dob?: string;
  //   income?: string;
  //   employment?: string;
  //   houseNumber?: string;
  //   postCode?: string;
  // }) => {
  //   const formErrors: {
  //     firstName?: string | undefined;
  //     income?: string | undefined;
  //     employment?: string | undefined;
  //   } = {};
  //   let validForm = true;
  //   // const missingFields = [];
  //   // for (const property in values) {
  //   //   !values[property] && missingFields.push(values[property]);
  //   // }
  //   // if (missingFields.length > 0) {
  //   //   return true;
  //   // }
  //   // return false;
  // };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const values = {
      title,
      firstName,
      lastName,
      dob,
      income,
      employment,
      houseNumber,
      postCode,
    };

    if (formErrors(values, (errs) => setErrors(errs))) {
      setErrorMessage("Please complete all fields");
    } else {
      setErrorMessage("");
      const response = await postEligibilityInfo(values);

      history.push(routes.ELIGIBLE_CARDS, {
        eligibleCards: response.cards,
      });
      try {
        const response = await postEligibilityInfo(values);

        history.push(routes.ELIGIBLE_CARDS, {
          eligibleCards: response.cards,
        });
      } catch (error) {
        setErrorMessage("Failed to fetch cards");
      }
    }
  };

  // const fields = [
  //   {
  //     id: 1,
  //     label: "First Name",
  //     onChange: (e: { target: { value: React.SetStateAction<string> } }) =>
  //       onFirstNameChange(e.target.value),
  //     value: firstName,
  //     type: "text",
  //   },
  //   {
  //     id: 2,
  //     label: "Last Name",
  //     onChange: (e: { target: { value: React.SetStateAction<string> } }) =>
  //       onLastNameChange(e.target.value),
  //     value: lastName,
  //     type: "text",
  //   },
  // ];

  // const renderInputFields = fields.map((field) => (
  //   <Input
  //     key={field.id}
  //     onChange={field.onChange}
  //     value={field.value}
  //     label={field.label}
  //     type={field.type}
  //   />
  // ));

  return (
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

      {/* {renderInputFields} */}
      <Input
        onChange={(e) => onFirstNameChange(e.target.value)}
        value={firstName}
        label="First Name"
      />
      {errors.firstName && <p style={{ color: "red" }}>{errors.firstName}</p>}
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
      {errors.income && <p style={{ color: "red" }}>{errors.income}</p>}

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
      {errors.employment && <p style={{ color: "red" }}>{errors.employment}</p>}
      <Button id="submitBtn" title="Submit" onClick={handleSubmit} />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </Form>
  );
};

export default EligibilityCheckScreen;
