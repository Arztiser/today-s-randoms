// Function to fetch random data from various APIs
const fetchRandomData = async () => {
  try {
    // Animal
    const animalResponse = await fetch('https://zoo-animal-api.herokuapp.com/animals/rand');
    const animalData = await animalResponse.json();
    document.getElementById('animal').textContent = animalData.name;

    // Book (Open Library random book)
    const bookResponse = await fetch('https://openlibrary.org/works/OL45883W.json');
    const bookData = await bookResponse.json();
    document.getElementById('book').textContent = bookData.title;

    // Color
    const colorResponse = await fetch('https://www.colr.org/json/color/random');
    const colorData = await colorResponse.json();
    document.getElementById('color').textContent = `#${colorData.new_color}`;

    // Date (current date)
    document.getElementById('date').textContent = new Date().toLocaleDateString();

    // Emoji
    const emojiResponse = await fetch('https://emojihub.herokuapp.com/api/random');
    const emojiData = await emojiResponse.json();
    document.getElementById('emoji').innerHTML = emojiData.htmlCode;

    // Fact
    const factResponse = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
    const factData = await factResponse.json();
    document.getElementById('fact').textContent = factData.text;

    // Food
    const foodResponse = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const foodData = await foodResponse.json();
    document.getElementById('food').textContent = foodData.meals[0].strMeal;

    // Joke
    const jokeResponse = await fetch('https://official-joke-api.appspot.com/random_joke');
    const jokeData = await jokeResponse.json();
    document.getElementById('joke').textContent = `${jokeData.setup} - ${jokeData.punchline}`;

    // Name
    const nameResponse = await fetch('https://randomuser.me/api/');
    const nameData = await nameResponse.json();
    document.getElementById('name').textContent = `${nameData.results[0].name.first} ${nameData.results[0].name.last}`;

    // Number
    document.getElementById('number').textContent = Math.floor(Math.random() * 100);

    // Word
    const wordResponse = await fetch('https://random-word-api.herokuapp.com/word');
    const wordData = await wordResponse.json();
    document.getElementById('word').textContent = wordData[0];

  } catch (error) {
    console.error('Error fetching random data:', error);
  }
};

// Fetch random data on page load
document.addEventListener('DOMContentLoaded', fetchRandomData);
