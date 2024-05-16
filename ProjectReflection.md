# DJS03 Project Brief: Book Connect - Abstractions

## Project Overview 
Abstractions are a way to simplify complex systems by breaking them down into smaller, more manageable parts. In my code, there are several abstractions used to make the code more modular, reusable, and easier to understand.

## Features
1. Search for books based on title, author, and genre
2. Pagination for large result sets
3. Theming support with light and dark modes
4. Book previews with author and title information
5. Book details overlay with image, title, author, and description

## Project Breakdown 
1. **Importing data and constants from external module**: This is an example of abstraction because it hides the details of the data and constants from the main code.
2. **Function abstractions**: Functions are used throughout the code to abstract away complex tasks into simpler, reusable functions.
3. **DOM element abstraction**: The '*getElement*' function is used to abstract away the details of selecting a DOM element. Instead of using '*document.querySelector*' every time a DOM element needs to be selected, the '*getElement*' function can be used instead.
4. **Data filtering abstraction**: The '*applySearchFilters*' function is used to abstract away the details of filtering the book data based on search filters. This function takes in a set of filters and returns a new array of books that match those filters. This abstraction makes it easier to change the filtering logic in the future, without having to modify the code that uses the filtered data.
5. **Event handling abstraction**: The code uses event listeners to handle user interactions, such as clicking on a button or submitting a form. These event listeners abstract away the details of handling user interactions, making it easier to add new interactions or modify existing ones.

These abstractions make the code more modular, reusable, and easier to understand. By breaking the code down into smaller, more manageable parts, it becomes easier to modify and maintain the code over time.

## How I coded me solution:

Feature: Book Connect

  **As a user**
  I want to search for books based on various filters
  So that I can find the books I'm interested in

 **Background:**
    Given the Book Finder application is running

  **Scenario: Search for books**
    When I enter a search term in the search bar
    And I press enter to search for books
    Then I should see a list of books that match the search term

  **Scenario: Filter books by genre**
    When I select a genre from the genre dropdown
    And I press enter to search for books
    Then I should see a list of books that match the selected genre

  **Scenario: Filter books by author**
    When I select an author from the author dropdown
    And I press enter to search for books
    Then I should see a list of books that match the selected author

  **Scenario: View book details**
    When I click on a book preview
    Then I should see more details about the book

  **Scenario: Load more results**
    When I click on the "Show more" button
    Then I should see more books in the list

  **Scenario: Change theme**
    When I click on the settings button
    And I select a theme from the theme dropdown
    Then the application should change to the selected theme

  **Scenario: Close search overlay**
    When I click on the cancel button in the search overlay
    Then the search overlay should close

  **Scenario: Close settings overlay**
    When I click on the cancel button in the settings overlay
    Then the settings overlay should close

  **Scenario: Close active book overlay**
    When I click on the close button in the active book overlay
    Then the active book overlay should close