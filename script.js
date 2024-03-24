function calculateCompatibility() {
    var name1 = document.getElementById("name1").value.toLowerCase();
    var name2 = document.getElementById("name2").value.toLowerCase();
    
    // Generate a random compatibility score between 0 and 100
    var compatibilityScore = Math.floor(Math.random() * 101);
    
    var result = document.getElementById("result");
    
    if (compatibilityScore > 80) {
        result.innerHTML = `Congratulations! The love compatibility between ${name1.capitalize()} and ${name2.capitalize()} is ${compatibilityScore}%. You are a perfect match! 💖`;
    } else if (compatibilityScore > 60) {
        result.innerHTML = `The love compatibility between ${name1.capitalize()} and ${name2.capitalize()} is ${compatibilityScore}%. You have a good chance together. Keep the romance alive! 😊`;
    } else if (compatibilityScore > 40) {
        result.innerHTML = `The love compatibility between ${name1.capitalize()} and ${name2.capitalize()} is ${compatibilityScore}%. Hmm... There's potential, but you might need to work on it. 😉`;
    } else {
        result.innerHTML = `The love compatibility between ${name1.capitalize()} and ${name2.capitalize()} is ${compatibilityScore}%. Uh-oh... It might be a rocky road ahead. Better brace yourselves! 😅`;
    }
}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
