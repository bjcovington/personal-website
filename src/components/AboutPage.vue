<template>
    <div class="aboutpage">
      <div class="container">
        <div class="left-column">
          <h1>About Me</h1>
          <ul class="favorite-list">
            <li>Cars</li>
            <li>Batman</li>
            <li>Avatar</li>
            <li>IT</li>
          </ul>
          <a class="favorite-link" href="https://www.roblox.com">Favorite Website Click Me!</a>
        </div>
        <div class="middle-column">
          <div class="image-wrapper">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cars_Logo_Black.svg/330px-Cars_Logo_Black.svg.png" alt="Favorite Image" />
          </div>
        </div>
        <div class="right-column">
          <div class="embed-resource">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/A4Wb-FQDfzY" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AboutPage'
  };
  </script>
  
  <style scoped>
  .aboutpage {
    margin: 0 auto;
  }
  
  /* Flexbox layout for three columns */
  .container {
    display: flex; /* Enable flexbox */
    justify-content: space-around; /* Distribute space evenly among columns */
    align-items: flex-start; /* Align columns at the start */
  }
  
  /* Left column styling */
  .left-column {
    flex: 1; /* Take up remaining space */
    text-align: left; /* Left align text */
    padding: 0 10px; /* Optional padding for spacing */
  }
  
  /* Middle column styling */
  .middle-column {
    flex: 1; /* Take up remaining space */
    display: flex; /* Center the image */
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
  }
  
  /* Right column styling */
  .right-column {
    flex: 1; /* Take up remaining space */
    text-align: center; /* Center content in the right column */
    padding: 0 10px; /* Optional padding for spacing */
  }
  
  .favorite-list {
    list-style-type: disc;
    padding: 0;
    margin-bottom: 20px;
  }
  
  .favorite-list li {
    font-size: 1.2rem;
    margin: 5px 0;
  }
  
  .favorite-link {
    display: block;
    margin: 20px 0;
    font-size: 1.2rem;
    color: blue;
  }
  
  .image-wrapper {
    margin: 20px 0;
  }
  
  .embed-resource {
    margin-top: 20px;
  }
  </style>
  