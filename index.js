function titleCased() {
    const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];

  const titleCasedTutorials = [] 
    for (const tutorial of tutorials) {
      const words = tutorial.split(" ");
      const titleCasedName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      titleCasedTutorials.push(titleCasedName);
    }
    return titleCasedTutorials;
}
console.log(titleCased());