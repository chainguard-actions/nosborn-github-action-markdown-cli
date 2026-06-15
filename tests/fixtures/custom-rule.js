// Custom markdownlint rule for testing
module.exports = {
  names: ["custom-test-rule"],
  description: "A custom test rule that never triggers",
  tags: ["test"],
  function: function rule(params, onError) {
    // This rule never triggers - it's just for testing custom rule loading
  }
};
