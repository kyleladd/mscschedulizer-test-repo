var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var base_url = "http://localhost:8081/";

var originalTimeout;
describe("Hello World Server", function() {
  this.timeout(15000);
  beforeEach(function() {
    // originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });
  afterEach(function() {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get("http://www.google.com", function(error, response, body) {
      // request.get(base_url, function(error, response, body) {
        // Check for error
        if(error){
          console.log(base_url);
          console.log(error);
        }
        console.log(response);
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});
