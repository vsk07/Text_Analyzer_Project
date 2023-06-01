console.log("Script works!")
uppercase.addEventListener("click", () => { 
    console.log("Transforming to Uppercase")
    inpText.value = inpText.value.toUpperCase()
})

lowercase.addEventListener("click", () => { 
   console.log("Transforming to Lowercase")
   inpText.value = inpText.value.toLowerCase()
})

removespaces.addEventListener("click", () => { 
    console.log("Removing Extra Spaces...")
    // https://stackoverflow.com/questions/16974664/how-to-remove-the-extra-spaces-in-a-string
    inpText.value = inpText.value.replace(/\s+/g, ' ').trim()
 })

 removelines.addEventListener("click", () => { 
    console.log("Removing Exttra New Lines...")
    inpText.value = inpText.value.replace(/\n+/g, '\n').trim()
  })

inpText.addEventListener("input", () => {
    console.log("changed")
    charCount.innerText = inpText.value.length
    wordCount.innerText = inpText.value.trim().split(" ").length
}) 