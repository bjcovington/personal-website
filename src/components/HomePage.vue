<template>
  <div class="homepage">
    <!-- Flex container for two-column layout -->
    <div class="content-container">
      
      <!-- Left Column: Text Content -->
      <div class="text-content">
        <h1>Welcome to My Personal Website</h1>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
        </p> <br>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
        </p> <br>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
        </p> <br>
        <p><strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
          <strong>Lorem ipsum</strong> dolor sit amet, <em>consectetur</em> adipiscing elit.<strong>Lorem ipsum</strong>
        </p>
      </div>
      
      <!-- Right Column: Tic-Tac-Toe Game -->
      <div class="game-container">
        <h2>Tic-Tac-Toe Game</h2>
        <TicTacToe />
      </div>
      
    </div>
  </div>
</template>

<script>
import TicTacToe from './TicTacToe.vue';  // Make sure to import the Tic-Tac-Toe component

export default {
  components: {
    TicTacToe
  }
};
</script>

<style scoped>
/* Overall page styling */
.homepage {
  padding: 20px;
}

/* Flex container to align text and game side by side */
.content-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;  /* Align items to the top of the columns */
  gap: 20px;  /* Space between the columns */
}

/* Left column for text */
.text-content {
  flex: 1;  /* Takes up one part of the flexbox */
  max-width: 50%;  /* Ensures text content doesn't take too much space */
}

/* Right column for the game */
.game-container {
  flex: 1;  /* Takes up one part of the flexbox */
  max-width: 50%;  /* Ensures the game doesn't take too much space */
  text-align: center;
}

/* Styling for the Tic-Tac-Toe board */
.tictactoe-board {
  display: grid;
  grid-template-columns: repeat(3, 100px);  /* Create a 3x3 grid */
  grid-gap: 10px;
  justify-content: center;
  margin: 20px auto;
}

.tictactoe-board button {
  width: 100px;
  height: 100px;
  font-size: 2rem;
  background-color: #f4f4f4;
  border: 2px solid #333;
  cursor: pointer;
}
</style>
