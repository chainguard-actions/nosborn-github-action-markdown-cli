// Custom markdownlint rule fixture for testing the 'rules' input
module.exports = {
  names: ["custom-test-rule"],
  description: "A custom test rule that always passes",
  tags: ["test"],
  function: function rule(params, onError) {
    // No violations — this rule always passes
  }
};
