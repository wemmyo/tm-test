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
