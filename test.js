const { add, subtract } = require("./index");

// Simple tests
let testsPassed = true;

try {
  if (add(2, 3) !== 5) testsPassed = false;
  if (subtract(5, 2) !== 3) testsPassed = false;
} catch (err) {
  console.error("Error:", err.message);
  testsPassed = false;
}

if (testsPassed) {
  console.log("All tests passed!");
  process.exit(0);
} else {
  console.error("Some tests failed!");
  process.exit(1);
}
