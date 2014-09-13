/*
 * jquery.fillcontainer.js
 * Make a child element fill its container
 * https://github.com/FreshFlesh/jquery-fillcontainer
 *
 * Copyright (c) 2012-2014 Thomas Charbit
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 */

;(function( $, window, document, undefined ) {
 
    $.fn.fillContainer = function( options ) {
        var defaults = {
            aspectRatio : null,
            parent      : '',
            fillMode    : 'fill',
            continuous  : true,
            cropFactor  : [ 1, 1 ],
            offset      : [ 0, 0 ]
        };

        options = $.extend( defaults, options );

        this.each(function() {
            var element = $( this );
            // merge options from inline attributes
            var elementOptions = $.extend( options, element.data() );

            // get basic infos about element
            var elementWidth = element.width();
            var elementHeight = element.height();
            var parentElement = elementOptions.parent ? element.parents( elementOptions.parent ) : element.parent();

            if ( null === elementOptions.aspectRatio ) {
                elementOptions.aspectRatio = element.width() / element.height();
            }

            if ( -1 === $.inArray( elementOptions.fillMode, ['fill', 'fit'] ) ) {
                elementOptions.fillMode = 'fill';
            }

            // resize element to fit parent, now and then
            resizeElement();

            if ( true === elementOptions.continuous ) {
                $(window).on( 'resize.fillcontainer', resizeElement );
            }
            
            function resizeElement ( ) {
                var parentWidth = parentElement.width();
                var parentHeight = parentElement.height();
                var parentRatio = parentWidth / parentHeight;
                
                if ( ( ( 'fill' === elementOptions.fillMode ) && ( parentRatio > elementOptions.aspectRatio ) )
                   || ( ( 'fit' === elementOptions.fillMode ) && ( parentRatio < elementOptions.aspectRatio ) ) ) {
                    element.css({
                        'width'       : parentWidth,
                        'height'      : Math.ceil( parentWidth / elementOptions.aspectRatio ),
                        'margin-left' : 0 + elementOptions.offset[0],
                        'margin-top'  : - Math.ceil( ( parentWidth / elementOptions.aspectRatio - parentHeight ) / 2 ) + elementOptions.offset[1]
                    });
                }
                else {
                    element.css({
                        'height'      : parentHeight,
                        'width'       : Math.ceil( parentHeight * elementOptions.aspectRatio ),
                        'margin-top'  : 0 + elementOptions.offset[1],
                        'margin-left' : - Math.ceil( ( parentHeight * elementOptions.aspectRatio - parentWidth ) / 2 ) + elementOptions.offset[0]
                    });
                }
            }
        });
 
        return this;

    };
 
}( jQuery, window, document, undefined ));