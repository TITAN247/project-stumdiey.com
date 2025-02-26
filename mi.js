const scrollRevealOption = {
    distance: "100px",
    origin: "bottom",
    duration: 1000,
  };
  ScrollReveal().reveal(".profile__card", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".profile__carde", {
    ...scrollRevealOption,
    origin: "left",
  });
