// Simple arithmetic functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Run sample operations if executed directly
if (require.main === module) {
  console.log("2 + 3 =", add(2, 3));
  console.log("5 - 2 =", subtract(5, 2));
}

// Export functions for testing
moduledule.exports = { add, subtract };
