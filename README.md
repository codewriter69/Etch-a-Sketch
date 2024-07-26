# Etch-a-Sketch

A simple web application that creates a grid of `div` elements that change color on hover which acts as a sketch-board. Users can adjust the grid size or clear the colors of the grid.

## Features

- **Create Grid**: Generate a grid of `div` elements with customizable dimensions.
- **Hover Effect**: Each `div` changes to a random color when hovered over.
- **Clear Colors**: Reset all `div` background colors to white without removing the `div` elements.

## Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/codewriter69/Etch-a-Sketch/
    ```

2. Navigate into the project directory:

    ```bash
    cd grid-color-changer
    ```

3. Open `index.html` in your web browser.

## Usage

1. **Create Grid**: Click the "Add" button and enter the number of `div` elements you want per direction. For example, entering `16` will create a 16x16 grid.

2. **Hover to Change Color**: Hover over any `div` to see its background color change to a random color.

3. **Clear Colors**: Click the "Clear" button to reset the background colors of all `div` elements to white.

## Code Explanation

- **JavaScript**:
  - `getRandomColor()`: Generates a random RGB color.
  - `createSquareDivs(quantity)`: Creates a grid of `div` elements based on the given quantity and applies hover effects.
  - `userDivs()`: Prompts the user to input a new grid size and updates the grid accordingly.
  - `clearBtn Event Listener`: Resets the background color of all `div` elements to white when the "Clear" button is clicked.

- **CSS**:
  - `.container`: Container for the grid of `div` elements.
  - `.add`, `.clear`: Styles for the buttons.

