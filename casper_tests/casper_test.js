casper.test.begin('Testing Amazon Search and Results pages', 3, function(test) {
  casper.start('http://amazon.com', function() {
    this.fill('form#nav-searchbar', {
      'field-keywords': 'javascript'
    }, true);
  });

  casper.then(function() {
    test.assertTitle('Amazon.com: javascript', 'Amazon search results page doesnt have expected title');
    test.assertField('field-keywords', 'javascript', 'Input doesnt repopulate with the search term');
    test.assertElementCount('.s-result-item', 16, 'There should be 16 results displayed at a time');
  });

  casper.run(function() {
    test.done();
  });
});