function boom() {
  document.querySelector("#message").textContent = "BOOM"
}
const button = document.querySelector("button")

button.addEventListener("click", () => {
  console.log(boom())
})
