let form = document.getElementById("my-form");
async function handleSubmit(e) {
  e.preventDefault();
  var t = document.getElementById("my-form-status"),
    n = new FormData(e.target);
  fetch(e.target.action, {
    method: form.method,
    body: n,
    headers: { Accept: "application/json" },
  })
    .then((e) => {
      (t.innerHTML = "Thanks for your submission!"), form.reset();
    })
    .catch((e) => {
      t.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);
