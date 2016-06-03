casper.test.begin('MSCschedulizer', 2, function suite(test) {
    casper.start("http://schedulizer.morrisville.edu", function() {
        test.assertTitle("MSCschedulizer", "schedulizer homepage title is the one expected");
        // test.assertExists('form[action="/search"]', "main form is found");
        // this.fill('form[action="/search"]', {
        //     q: "casperjs"
        // }, true);
    });

    // casper.then(function() {
    //     test.assertTitle("casperjs - Recherche Google", "google title is ok");
    //     test.assertUrlMatch(/q=casperjs/, "search term has been submitted");
    //     test.assertEval(function() {
    //         return __utils__.findAll("h3.r").length >= 10;
    //     }, "google search for \"casperjs\" retrieves 10 or more results");
    // });
    casper.then(function() {
        // Click on 1st result link
        this.click('.slider.btn',10,10);
    });
    casper.then(function() {
        test.assertUrlMatch(/select-classes.html/, "on the select classes page");
        this.wait(1000, function() {
            this.echo("I've waited for a second.");
        });
    });
    casper.then(function() {
        this.capture('select-classes.png');
    });

    casper.run(function() {
        test.done();
    });
});
