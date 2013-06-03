/// <reference path="../jquery-1.8.3/jquery-1.8.3-vsdoc.js" />

// Jquery Extension that resizes all images inside a given element.
(function ($) {
    var calculatedHeight = 0;
    var calculatedWidth = 0;
    
    var calcWidthAndHeight = function (givenMaxWidth, givenMaxHeight, givenImgWidth, givenImgHeight) {
        var widthRatio = (givenMaxWidth) || (givenMaxWidth !== 0) ? givenMaxWidth / givenImgWidth : 1;
        var heightRatio = (givenMaxHeight) || (givenMaxHeight !== 0) ? givenMaxHeight / givenImgHeight : 1;
        var finalRatio = (heightRatio < widthRatio) ? heightRatio : widthRatio;

        if (finalRatio <= 1) {
            calculatedWidth = Math.round(givenImgWidth * finalRatio);
            calculatedHeight = Math.round(givenImgHeight * finalRatio);
        } else {
            calculatedWidth = givenImgWidth;
            calculatedHeight = givenImgHeight;
        }
    };

    /// <summary>
    /// jQuery plugin that resizes all images contained within a given selector.
    /// Pass in 0 for instances where only one direction is computed.
    /// For example: $("img").resizeImages(0, 150);
    /// The above example will let the width be as wide as need be while the height will only be allowed to go 150px tall.
    /// </summary>
    /// <param name="maxWidth" type="Number">The given max width desired. Pass in 0 for an unconstrained width.</param>
    /// <param name="maxHeight" type="Number">The given max height desired. Pass in 0 for an unconstrained height.</param>
    $.fn.resizeImages = function (maxWidth, maxHeight) {
        if (maxWidth || maxHeight) {
            var currentMaxWidth = (maxWidth) ? maxWidth : 0;
            var currentMaxHeight = (maxHeight) ? maxHeight : 0;
            if (this.is("img")) {
                this.each(function(index, value) {
                    $(value).load(function() {
                        var imgWidth = $(value).width();
                        var imgHeight = $(value).height();
                        calcWidthAndHeight(currentMaxWidth, currentMaxHeight, imgWidth, imgHeight);
                        $(value).width(calculatedWidth);
                        $(value).height(calculatedHeight);
                    });
                });
            } else {
                $("img", this).each(function (index, value) {
                    var img = new Image();
                    img.onload = function () {
                        var imgWidth = $(value).width();
                        var imgHeight = $(value).height();
                        calcWidthAndHeight(currentMaxWidth, currentMaxHeight, imgWidth, imgHeight);
                        $(value).width(calculatedWidth);
                        $(value).height(calculatedHeight);
                    };
                    img.src = $(value).attr("src");
                });
            }
        }
        return this;
    };
})(jQuery);