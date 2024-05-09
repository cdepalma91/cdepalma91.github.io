
function applyStyles() {
    var textArea = document.getElementById("textArea");
    var fancyRadio = document.getElementById("fancy");
    if (fancyRadio.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
    } else {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "black"; // Reset color to black
      textArea.style.textDecoration = "none";
    }
  }
  
document.getElementById("biggerButton").addEventListener("click", function() {
    document.getElementById("textArea").style.fontSize = "24pt";
  });
  
  
  
  
  document.getElementById("mooButton").addEventListener("click", function() {
    var textArea = document.getElementById("textArea");
    var text = textArea.value;
    
    // Split the text into sentences based on period character
    var sentences = text.split(".");
    
    // Loop through each sentence
    for (var i = 0; i < sentences.length; i++) {
      var sentence = sentences[i].trim(); // Trim whitespace
      if (sentence !== "") {
        // Split the sentence into words
        var words = sentence.split(" ");
        // Add "-Moo" to the last word
        words[words.length - 1] += "-Moo";
        // Join the words back into a sentence
        sentences[i] = words.join(" ");
      }
    }
    
    // Join the sentences back into a single string
    text = sentences.join(".");
    
    // Uppercase the entire text
    text = text.toUpperCase();
    
    // Update the text area with the modified text
    textArea.value = text;
  });
  
