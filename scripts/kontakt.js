const handleSubmit = (e) => {
  e.preventDefault();
  const message = document.querySelector(".message");
  message.classList.add("visible");
  const form = document.querySelector("form");
  form.reset();
};
