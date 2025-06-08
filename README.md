
# Cypress Testing Project – DEALLS

This project was created to complete the **Dealls Jobs - QA Software Engineer / SDET Challenge**. It contains automated end-to-end (E2E) tests written using [Cypress](https://www.cypress.io/), designed to demonstrate testing capabilities for the DEALLS platform.

The complete document of the challenges (1-3) can be found in
👉 [Dealls Jobs Challenge](Dealls%20Jobs.docx)

## 📁 Project Structure

```
.github/workflows/     # CI/CD configuration (GitHub Actions)
cypress/
│
├── downloads/         # Downloaded files during tests
├── e2e/               # End-to-end test specs
├── fixtures/          # Static test data (JSON)
├── objects/           # Reusable page objects/selectors
├── pages/             # UI page functions
├── plugins/           # Cypress plugin setup
├── screenshots/       # Test failure screenshots
├── support/           # Custom commands and configuration
├── videos/            # Video recordings of test runs
│
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14 or above)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nyxx-lgtm/cypress-chllng-dealls.git
   cd cypress-chllng-dealls
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run tests:
   ```bash
   npm run cy:open    # Launch Cypress UI
   npx cypress open   # Launch Cypress UI
   npx run cy:run     # Run tests in headless mode
   npx cypress run    # Run tests in headless mode
   ```

## 🧪 Writing Tests

- Add your test specs in the `cypress/e2e/` directory.
- Use reusable selectors and functions from `cypress/pages/` and `cypress/objects/`.

## 🛠 Configuration

You can configure the Cypress settings inside `cypress.config.js`, including base URL, timeouts, and environment variables.

## 🧩 Continuous Integration

The `.github/workflows/w1.yml` file defines a GitHub Actions workflow to run tests automatically on push or pull request events.

---

Happy Testing Everyone!
