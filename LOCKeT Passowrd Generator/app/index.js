document.addEventListener("DOMContentLoaded", function () {
  
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const symbols = "!@#$%^&*()-+=_[]{}|;:,./"
  const numbers = "0123456789"
  let passwordPicker = ""
  let finalPassword = ""
  
  const form = document.querySelector("#form")
  
  form.addEventListener("submit", handleSubmit)

  function handleSubmit(event) {

    finalPassword = ""

    event.preventDefault()

    const formData = new FormData(form)
    const formDataObj = Object.fromEntries(formData.entries())

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

    const container = document.querySelector(".result")
    const mainContainer = document.querySelector("#main-container")

    // Code to calculate the number of lines finalPassword is wrapping to adjust the height of container accordingly
    const fontSize = getComputedStyle(resultField).fontSize
    const lineHeight = parseFloat(fontSize) * 1.2
    const lines = resultField.clientHeight / lineHeight
    const linesRounded = Math.floor(lines)

    const smallScreen = window.matchMedia("(max-width: 480px)")

    if (smallScreen.matches) {
      if (linesRounded === 1) {
        container.style.height = "30px"
        mainContainer.style.height = "570px"
      } else if (linesRounded === 2) {
        container.style.height = "60px"
        mainContainer.style.height = "600px"
      } else if (linesRounded === 3) {
        container.style.height = "90px"
        mainContainer.style.height = "630px"
      } else if (linesRounded === 4) {
        container.style.height = "120px"
        mainContainer.style.height = "660px"
      } else if (linesRounded >= 5) {
        container.style.height = "150px"
        mainContainer.style.height = "690px"
      }
    } else {
      if (linesRounded === 1) {
        container.style.height = "30px"
        mainContainer.style.height = "440px"
      } else if (linesRounded === 2) {
        container.style.height = "60px"
        mainContainer.style.height = "470px"
      } else if (linesRounded === 3) {
        container.style.height = "90px"
        mainContainer.style.height = "500px"
      } else if (linesRounded === 4) {
        container.style.height = "120px"
        mainContainer.style.height = "530px"
      } else if (linesRounded >= 5) {
        container.style.height = "150px"
        mainContainer.style.height = "560px"
      }
    }

  }

  const clipboardIcon = document.querySelector(".clipboard-icon")
  clipboardIcon.addEventListener("click", copyPassword)
  function copyPassword(event) {
    navigator.clipboard.writeText(finalPassword)
    alert("Copied to clipboard")
  }
  
})
