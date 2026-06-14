// Custom markdownlint rule for testing
module.exports = {
  names: ["custom-test-rule"],
  description: "A custom test rule that never fires",
  tags: ["test"],
  function: function rule(params, onError) {
    // This rule never fires - it's just for testing the rules input
  }
};
