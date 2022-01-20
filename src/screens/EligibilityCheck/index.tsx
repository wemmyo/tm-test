import * as React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const EligibilitySchema = Yup.object().shape({
  employment: Yup.string().required("Required"),
  income: Yup.number().required("Required"),
});

interface EligibilityCheckScreenProps {}

const users = [
  {
    id: 1,
    title: "Mr",
    firstName: "Ollie",
    lastName: "Murphree",
    dob: "1970-07-01",
    income: 34000,
    employment: "full-time",
    houseNumber: 700,
    postcode: "BS14 9PR",
  },
  {
    id: 2,
    title: "Miss",
    firstName: "Elizabeth",
    lastName: "Edmundson",
    dob: "1984-06-26",
    income: 17000,
    employment: "student",
    houseNumber: 177,
    postcode: "PH12 8UW",
  },
  {
    id: 3,
    title: "Mr",
    firstName: "Trevor",
    lastName: "Rieck",
    dob: "1990-09-07",
    income: 15000,
    employment: "part-time",
    houseNumber: 343,
    postcode: "TS25 2NF",
  },
];

const cards = {
  studentLife: {
    label: "Student Life",
    apr: 0.189,
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 6,
    credit: 1200,
  },
  anywhere: {
    label: "Anywhere Card",
    apr: 0.339,
    balanceTransferOfferDuration: 0,
    purchaseOfferDuration: 0,
    credit: 300,
  },
  liquid: {
    label: "Liquid Card",
    apr: 0.339,
    balanceTransferOfferDuration: 12,
    purchaseOfferDuration: 6,
    credit: 3000,
  },
};

const checkEligibility = ({
  employment,
  income,
}: {
  employment: string;
  income: number;
}) => {
  const allEligibleCards = [cards.anywhere];
  if (income > 16000) {
    allEligibleCards.push(cards.liquid);
  }
  if (employment === "student") {
    allEligibleCards.push(cards.studentLife);
  }
  return allEligibleCards;
};

const EligibilityCheckScreen: React.FC<EligibilityCheckScreenProps> = () => {
  console.log(checkEligibility({ employment: "student", income: 17000 }));

  return (
    <div>
      <h1>Check Eligibility</h1>
      <Formik
        initialValues={{
          employment: "",
          income: "",
        }}
        validationSchema={EligibilitySchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as="select"
              name="employment"
              placeholder="Employment status"
            >
              <option hidden>Choose one</option>
              <option value="student">Student</option>
              <option value="employed">Employed</option>
            </Field>
            {errors.employment && touched.employment ? (
              <div>{errors.employment}</div>
            ) : null}
            <Field name="income" placeholder="income" />
            {errors.income && touched.income ? (
              <div>{errors.income}</div>
            ) : null}

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      <section>
        <h1>Cards you're eligibile for</h1>
      </section>
    </div>
  );
};

export default EligibilityCheckScreen;
