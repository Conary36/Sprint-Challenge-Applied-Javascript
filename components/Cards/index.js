// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
// const itemsList = [
//     [javascript],
//     [bootstrap],
//     [technology],
//     [jquery],
//     [node]
// ];

const newArticles = (items) => {
    //component elements
    const card = document.createElement('div');
    const headLine = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    //classes
    card.classList.add('card');
    headLine.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    //appending elements
    card.append(headLine, author);
    author.append(imgContainer, authorName);
    imgContainer.appendChild(img);

    //text Content

    headLine.textContent = items.headline;
    img.src = items.authorPhoto;
    authorName.textContent = items.authorName;

    return card;

}

const newsCards = document.querySelector('.cards-container');

axios
    .get("https://lambda-times-backend.herokuapp.com/articles")
    .then(response => {
        const theseKeys = Object.keys(response.data.articles);

        theseKeys.forEach(alpha => {
            response.data.articles[alpha].forEach(items => {
                console.log(response.data)
                const chosenCard = newArticles(items);
                newsCards.append(chosenCard);
            })
        })
    })
    .catch(err => {
        console.log('O MY GOSH!', err)
    });