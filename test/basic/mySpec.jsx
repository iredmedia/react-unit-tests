/**
 * @jsx React.DOM
 */

"use strict";

var ReactTestUtils;

describe("Hello world test",function(){
    var someText = "Some Text We Need for Test";

    beforeEach(function() {
        // Setup react test utils for each 'it()' function
        ReactTestUtils = React.addons.TestUtils;
    });

    it("should contain some text", function () {
        var label = <HelloWorld>{someText}</HelloWorld>;

        // Render it
        ReactTestUtils.renderIntoDocument(label);

        // Assert that its defined, and what its text should contain!
        expect(label.refs.p).toBeDefined();
        expect(label.refs.p.props.children).toBe(someText)
    });

    it("is clicked", function () {
        var label = <HelloWorld>{someText}</HelloWorld>;

        // Render it
        ReactTestUtils.renderIntoDocument(label);

        // Click, and assert!
        expect(label.refs.p.props.children).not.toBe("Hello World");
        ReactTestUtils.Simulate.click(label.refs.p);
        expect(label.refs.p.props.children).toBe("Hello World");
    });
});
