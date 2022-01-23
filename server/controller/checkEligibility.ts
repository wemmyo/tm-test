// interface User {
//   id: number;
//   title: string;
//   firstName: string;
//   lastName: string;
//   dob: string;
//   income: number;
//   employment: string;
//   houseNumber: number;
//   postCode: string;
// }

const checkEligibility = (user, cards) => {
  const allEligibleCards = [cards.anywhere];
  if (user.income > 16000) {
    allEligibleCards.push(cards.liquid);
  }
  if (user.employment === "student") {
    allEligibleCards.push(cards.studentLife);
  }

  return allEligibleCards;
};

module.exports = checkEligibility;
