jQuery.resizeImages
===================

A jQuery plugin that provides the ability to resize images based on a maximum width and maximum height while maintaining the aspect ratio.


How It Works
=============

This plugin resizes all images contained within a jQuery selector object. The ratio is maintained as well so there are no distorted images.

    // This call would resize all images in the DOM to have a max width of 250 or a max height of 200
    $("img").resizeImages(250, 200); 
    
    // This call would resize all images inside the "#someDivElement" element to have a max width of 250 or a max height of 200
    $("#someDivElement").resizeImages(250, 200);
    

If you want the resize to only occur in one direction then pass in 0 to the incidental direction

    //Resizes the images to be a max width of 250 and allows the height to be any size relative to the width while maintaining the aspect ratio.
    $("img").resizeImages(250, 0);
    
Please report any issues that are found.
