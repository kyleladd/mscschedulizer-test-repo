casper.test.begin('MSCschedulizer', 3, function suite(test) {
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
    });
    casper.then(function() {
        this.waitForSelectorTextChange("#dept_class_list");
    });
    casper.then(function() {
        this.capture('select-classes.png');
    });
    casper.then(function() {
        // Click on 1st result link
        this.click('#dept_class_list a',10,10);
    });
    casper.then(function() {
        this.clickLabel('Generate', 'a');
    });
    casper.then(function() {
        test.assertUrlMatch(/generate.html/, "on the generate page");
        this.waitForSelectorTextChange("#schedules");
    });
    casper.then(function() {
        this.capture('generate.png');
    });
    casper.run(function() {
        test.done();
    });
});
