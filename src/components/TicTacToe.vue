<template>
    <div>
      <h1>Play TicTacToe</h1>
      <div id="turn">{{ currentTurn }}'s Turn</div>
      <!-- Table for the game -->
      <table>
        <tbody>
          <tr v-for="(row, rowIndex) in board" :key="rowIndex">
            <td v-for="(cell, cellIndex) in row" :key="cellIndex" @click="makeMove(rowIndex, cellIndex)">
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        board: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ],
        currentTurn: "x" // Initial turn
      };
    },
    methods: {
      makeMove(row, col) {
        if (this.board[row][col] === "") {
          // Set the current player's move
          this.board[row][col] = this.currentTurn; // Directly assign the value
  
          // Switch turn between 'x' and 'o'
          this.currentTurn = this.currentTurn === "x" ? "o" : "x";
  
          // Update the turn display
          document.getElementById("turn").innerText = `${this.currentTurn}'s Turn`;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  table {
    align-items: center;
  }
  /* Table cell styling */
  td {
    border: 5px solid black;
    width: 100px;
    height: 100px;
    font-size: 3em;
    text-align: center;
    font-family: sans-serif;
  }
  
  /* Remove left border for the first column */
  td:nth-child(1) {
    border-left: none;
  }
  
  /* Remove right border for the last column */
  td:nth-child(3) {
    border-right: none;
  }
  
  /* Remove top border for the first row */
  tr:nth-child(1) > td {
    border-top: none;
  }
  
  /* Remove bottom border for the last row */
  tr:nth-child(3) > td {
    border-bottom: none;
  }
  
  /* Turn display styling */
  #turn {
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    font-size: 16pt;
    color: white;
    background-color: #7703c5;
    width: 340px;
    margin-bottom: 10px;
    margin-left: 200px;
  }
  table {
    margin-left: 200px;
  }
  </style>
  