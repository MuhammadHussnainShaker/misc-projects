document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form")

  form.addEventListener("submit", handleSubmit)

  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(form)
    const formDataObj = Object.fromEntries(formData.entries())

    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const symbols = "!@#$%^&*()-+=_[]{}|;:,./"
    const numbers = "0123456789"
    let passwordPicker = ""
    let finalPassword = ""

    if (
      formDataObj["lowercase"] != "on" &&
      formDataObj["uppercase"] != "on" &&
      formDataObj["symbols"] != "on" &&
      formDataObj["numbers"] != "on"
    ) {
      alert(
        "Please select at least one set of characters from lowercases, uppercases, symbols and numbers."
      )
      return
    }

    if (formDataObj["lowercase"] === "on") {
      passwordPicker += lowercaseLetters
    }

    if (formDataObj["uppercase"] === "on") {
      passwordPicker += uppercaseLetters
    }

    if (formDataObj["symbols"] === "on") {
      passwordPicker += symbols
    }

    if (formDataObj["numbers"] === "on") {
      passwordPicker += numbers
    }

    for (let i = 0; i < formDataObj["char-input"]; i++) {
      finalPassword +=
        passwordPicker[Math.floor(Math.random() * passwordPicker.length)]
    }

    const resultField = document.querySelector(".result-field")

    resultField.innerText = finalPassword

    const span = document.querySelector(".result-field")
    const container = document.querySelector(".result")
    const mainContainer = document.querySelector("#main-container")

    const fontSize = getComputedStyle(span).fontSize
    const lineHeight = parseFloat(fontSize) * 1.2
    const lines = span.clientHeight / lineHeight
    const linesRounded = Math.floor(lines)

    if (linesRounded === 1) {
      container.style.height = "30px"
    } else if (linesRounded === 2) {
      container.style.height = "60px"
      mainContainer.style.height = "470px"
    } else if (linesRounded === 3) {
      container.style.height = "90px"
      mainContainer.style.height = "500px"
    }
  }
})
