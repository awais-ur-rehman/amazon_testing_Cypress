# Amazon Cypress Tests

This repository contains automated tests for the Amazon website using Cypress. The tests cover several user scenarios such as signing up, logging in, searching for items, adding them to the cart, managing the shopping cart, and handling address book entries.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Cypress installed globally or in your project. To install Cypress, run:

```
npm install cypress --save-dev
```

### Installation

1. Clone the repository:

```
git clone https://github.com/awais-ur-rehman/amazon_testing_Cypress.git
```

2. Navigate to the project directory:

```
cd LAB CYPRESS
```

3. Install the dependencies:

```
npm install
```

### Running the Tests

To run the tests, run the following command:

```
npx cypress open
```

This will open the Cypress test runner, where you can select the tests you want to run.

This command will open the Cypress Test Runner, where you can select and run individual test files.

Alternatively, you can run the tests headlessly using:

```
npx cypress run
```

## Built With

- [Cypress](https://www.cypress.io/)

## Tested On

- [Amazon](https://www.amazon.com/)

## Test Scenarios

The tests include the following scenarios:

- **Sign Up**: Tests the sign-up process, including error handling if the email is already used.
- **Log In**: Verifies the login process and checks the greeting message.
- **Search Item**: Tests the item search functionality.
- **Add Item to Cart**: Combines searching for an item and adding it to the shopping cart.
- **Manage Cart**: Includes tests for navigating to the cart, increasing item quantity, and deleting an item.
- **Address Book**: Tests adding, editing, and deleting addresses in the user's address book.

Each test is designed to be run independently, handling its own setup and cleanup.

## Contributing

Feel free to fork this repository and submit pull requests to contribute to the tests. You can also open issues to report bugs or suggest enhancements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Contact

Awais Ur Rehman - awaisjarral37@gmail.com
