casper.test.begin('MSCschedulizer', 2, function suite(test) {
    casper.options.viewportSize = {width: 1600, height: 950};
    casper.start("http://schedulizer.morrisville.edu", function() {
        test.assertTitle("MSCschedulizer", "schedulizer homepage title is the one expected");
    });
    casper.then(function() {
        // Click on Get started button
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
