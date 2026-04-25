Array.from(document.querySelectorAll(".btn")).forEach((b) =>
  b.addEventListener("click", (e) => {
    console.log("click");
  }),
);
