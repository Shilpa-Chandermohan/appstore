  
(function($) {

    $.fn.screenAnimation = function (options) {
 
        options = $.extend({}, $.fn.screenAnimation.defaults, options || {});

        return $(this).each(function () {
 
            var animData = {
                currentCenterNum:       options.initialAnimation,
                divWidth:         0,
                divHeight:        0,
                bigImgWidth:      0,
                bigImgHeight:     0,
                smallImgWidth:      0,
                smallImgHeight:     0,
                totalImage:      $(this).children("div").length,
                currentlyMoving:        false,
                imageContainer:      $(this),
                featuresArray:          [],
                containerIDTag:         "#"+$(this).attr("id"),
                timeoutVar:             2,
                rotationsRemaining:     0,
                itemsToAnimate:         0,
                borderWidth:			0
            }; 
            preload(function () {
            	setDimension();
                setAnimation();
                setPosition(); 
                initiateMove(true,1);
            }); 
            function preload(callback) {
               
                if (options.preload == true) {
                    var $imageElements = animData.imageContainer.find("img");
                    var loadedImages = 0;
                    var totalImages = $imageElements.length;

                    $imageElements.each(function () { 
                        $(this).load(function () { 
                            loadedImages++;
                            if (loadedImages == totalImages) { 
                                callback();
                            }
                        });
                       
                        if (this.complete) {
                            $(this).trigger('load');
                        }
                    });
                } else {
                    
                    callback();
                }
            }

           
            function getContainer(featureNum) {
                return animData.featuresArray[featureNum-1];
            }

             
            function getBySetPos(position) {
                $.each(animData.featuresArray, function () {
                    if ($(this).data().setPosition == position)
                        return $(this);
                });
            }

            
            function getPreviousNum(num) {
                if ((num - 1) == 0) {
                    return animData.totalImage;
                } else {
                    return num - 1;
                }
            }

            
            function getNextNum(num) {
                if ((num + 1) > animData.totalImage) {
                    return 1;
                } else {
                    return num + 1;
                }
            } 
            function setDimension() {
                
                animData.divWidth = animData.imageContainer.width();
                animData.divHeight = animData.imageContainer.height();

                
                var $firstFeatureImage = $(animData.containerIDTag).find("div img:first");
 
                if (options.bigImgWidth > 1)
                    animData.bigImgWidth = options.bigImgWidth;
                else if (options.bigImgWidth > 0 && options.bigImgWidth < 1)
                    animData.bigImgWidth = $firstFeatureImage.width() * options.bigImgWidth;
                else
                    animData.bigImgWidth = $firstFeatureImage.outerWidth();
                
                if (options.bigImgHeight > 1)
                    animData.bigImgHeight = options.bigImgHeight;
                else if (options.bigImgHeight > 0 && options.bigImgHeight < 1)
                    animData.bigImgHeight = $firstFeatureImage.height() * options.bigImgHeight;
                else
                    animData.bigImgHeight = $firstFeatureImage.outerHeight();
               
                if (options.smallImgWidth > 1)
                    animData.smallImgWidth = options.smallImgWidth;
                else if (options.smallImgWidth > 0 && options.smallImgWidth < 1)
                    animData.smallImgWidth = $firstFeatureImage.width() * options.smallImgWidth;
                else
                    animData.smallImgWidth = $firstFeatureImage.outerWidth() / 2;
               
                if (options.smallImgHeight > 1)
                    animData.smallImgHeight = options.smallImgHeight;
                else if (options.smallImgHeight > 0 && options.smallImgHeight < 1)
                    animData.smallImgHeight = $firstFeatureImage.height() * options.smallImgHeight;
                else
                    animData.smallImgHeight = $firstFeatureImage.outerHeight() / 2;
            }

            
            function setAnimation() {
                 
                if (options.displayCutoff > 0 && options.displayCutoff < animData.totalImage) {
                    animData.totalImage = options.displayCutoff;
                }

               
                animData.imageContainer.children("div").each(function (index) {
                    if (index < animData.totalImage) {
                        animData.featuresArray[index] = $(this);
                    }
                }); 
                animData.imageContainer
                     
                    .children("div").each(function () {
                       
                        $(this).css({
                            'left': (animData.divWidth / 2) - (animData.smallImgWidth / 2) - (animData.borderWidth / 2),
                            'width': animData.smallImgWidth,
                            'height': animData.smallImgHeight,
                            'top': options.smallFeatureOffset + options.topPadding,
                            'opacity': 0
                        });
                    })
                    
                    .find("img:first").css({
                        'width': animData.smallImgWidth
                    });

               
                if (animData.totalImage < 4) {
                    animData.itemsToAnimate = animData.totalImage;
                } else {
                    animData.itemsToAnimate = 4;
                }

               
                animData.imageContainer.find("div > div")
                    .hide();
            } 
            function setPosition() {
                
                $.each(animData.featuresArray, function (i) {
                    $(this).data('setPosition',i+1);
                });
 
                var oneBeforeStarting = getPreviousNum(options.initialAnimation);
                animData.currentCenterNum = oneBeforeStarting;

              
                var $centerFeature = getContainer(oneBeforeStarting);
                $centerFeature.data('position',1);
 
                var $prevFeatures = $centerFeature.prevAll();
                $prevFeatures.each(function (i) {
                    $(this).data('position',(animData.totalImage - i));
                });
 
                var $nextFeatures = $centerFeature.nextAll();
                $nextFeatures.each(function (i) {
                    if ($(this).data('setPosition') != undefined) {
                        $(this).data('position',(i + 2));
                    }
                });
 
                if (options.counterStyle == 3) {
                    $.each(animData.featuresArray, function () {
                        var pos = getPreviousNum($(this).data('position'));
                        var $numberTag = $("<span></span>");
                        $numberTag.addClass("numberTag");
                        $numberTag.html("("+ pos + " of " + animData.totalImage + ") ");
                        $(this).find('div p').prepend($numberTag);
                    });
                }
            }
 
            function changeImage(oldCenter, newCenter)
            {
               
                var $blipsContainer = animData.imageContainer.find(".blipsContainer");
                var $oldCenter = $blipsContainer.find("#blip_"+oldCenter);
                var $newCenter = $blipsContainer.find("#blip_"+newCenter); 
            }
 
            function autoPlay() { 
                if (animData.timeoutVar != null) {
                    animData.timeoutVar = clearTimeout(animData.timeoutVar);
                }
 
                if (options.autoPlay != 0) {
                    var autoTime = (Math.abs(options.autoPlay) < options.animationSpeed) ? options.animationSpeed : Math.abs(options.autoPlay);
                    animData.timeoutVar = setTimeout(function () {
                        if (options.autoPlay > 0)
                            initiateMove(true,1);
                        else if (options.autoPlay < 0)
                            initiateMove(false,1);
                    }, autoTime);
                }
            }
 
            function rotatePositions(direction) {
                $.each(animData.featuresArray, function () {
                    var newPos;
                    if (direction == false) {
                        newPos = getNextNum($(this).data().position);
                    } else {
                        newPos = getPreviousNum($(this).data().position);
                    }
                    $(this).data('position',newPos);
                });
            } 
            function animateFeature($feature, direction)
            {
                var new_width, new_height, new_top, new_left, new_zindex, new_padding, new_fade;

               
                var oldPosition = $feature.data('position');
                var newPosition;
                if (direction == true)
                    newPosition = getPreviousNum(oldPosition);
                else
                    newPosition = getNextNum(oldPosition);
 
                if (newPosition == 1) {
                    new_width = animData.bigImgWidth;
                    new_height = animData.bigImgHeight;
                    new_top = options.topPadding;
                    new_zindex = $feature.css("z-index");
                    new_left = (animData.divWidth / 2) - (animData.bigImgWidth / 2) - (animData.borderWidth / 2);
                    new_fade =1.0;
                } else {
                    new_width = animData.smallImgWidth;
                    new_height = animData.smallImgHeight;
                    new_top = options.smallFeatureOffset + options.topPadding;
                    new_zindex = 1;
                    new_fade = 1;
                   
                    if (newPosition == animData.totalImage) {
                        new_left = options.sidePadding;
                 
                    } else if (newPosition == 2) {
                        new_left = animData.divWidth - animData.smallImgWidth - options.sidePadding - animData.borderWidth;
                  
                    } else {
                        new_left = (animData.divWidth / 2) - (animData.smallImgWidth / 2) - (animData.borderWidth / 2);
                        new_fade = -0.4;
                    }
                }
               
                if (newPosition != 1) {
                   
                    $feature.find("div")
                        .hide();
                }

              
                $feature
                    .animate(
                        {
                            width: new_width,
                            height: new_height,
                            top: new_top,
                            left: new_left,
                            opacity: new_fade
                        },
                        options.animationSpeed,
                        options.animationEasing,
                        function () {
                          
                            if (newPosition == 1) {
                               
                                $feature.find("div")
                                    .fadeTo("fast",0.85);
                            }
                          
                            animData.rotationsRemaining = animData.rotationsRemaining - 1;
                            
                            $feature.css("z-index", new_zindex);
                         
                            if (options.counterStyle == 1 || options.counterStyle == 2) {
                                if (newPosition == 1) {
                                 
                                    var newCenterItemNum = animData.imageContainer.children("div").index($feature) + 1;
                                    var oldCenterItemNum;
                                    if (direction == false)
                                        oldCenterItemNum = getNextNum(newCenterItemNum);
                                    else
                                        oldCenterItemNum = getPreviousNum(newCenterItemNum);
                                 
                                    changeImage(oldCenterItemNum, newCenterItemNum);
                                }
                            }

                          
                            var divide = animData.rotationsRemaining / animData.itemsToAnimate;
                            if (divide % 1 == 0) { 
                                animData.currentlyMoving = false; 
                                rotatePositions(direction); 
                                if (animData.rotationsRemaining > 0)
                                    move(direction);
                            } 
                            autoPlay();
                        }
                    )
                   
                    .find("img:first")
                       
                        .animate({
                            width: new_width,
                            height: new_height
                        },
                        options.animationSpeed,
                        options.animationEasing)
                    .end();
            }
 
            function move(direction)
            {
                
                animData.currentlyMoving = true;

                
                var $newCenter, $newLeft, $newRight, $newHidden;
                if (direction == true) {
                    // Shift features to the left
                    $newCenter = getContainer(getNextNum(animData.currentCenterNum));
                    $newLeft = getContainer(animData.currentCenterNum);
                    $newRight = getContainer(getNextNum(getNextNum(animData.currentCenterNum)));
                    animData.currentCenterNum = getNextNum(animData.currentCenterNum);
                } else {
                    $newCenter = getContainer(getPreviousNum(animData.currentCenterNum));
                    $newLeft = getContainer(getPreviousNum(getPreviousNum(animData.currentCenterNum)));
                    $newRight = getContainer(animData.currentCenterNum);
                    animData.currentCenterNum = getPreviousNum(animData.currentCenterNum);
                }

                // The z-index must be set before animations take place for certain movements
                
                if (direction) {
                    $newLeft.css("z-index", 3);
					$newRight.css("-webkit-transform");//right image
                    $newLeft.css("-webkit-transform");//left image
                    $newCenter.css("-webkit-transform");
					
					
					
                } else {
                    $newRight.css("z-index", 3);
					$newRight.css("-webkit-transform");
					
                }
                $newCenter.css("z-index", 4);
				
                if (direction) {
                    $newLeft.css("z-index", 1); 
                    $newCenter.css("-webkit-transition","-webkit-transform 1s");
                    $newRight.css("-webkit-transform");//right image
                    $newLeft.css("-webkit-transform");//left image
					$newCenter.css("-webkit-transform");
                     
                } else {
                    $newRight.css("z-index",10 );
                    $newRight.css("-webkit-transform");
                    
                }
				
				$newCenter.css("z-index", 4);
				
                if (direction) {
                    $newLeft.css("z-index", 5); 
                    $newCenter.css("-webkit-transition","-webkit-transform 1s");
                    $newRight.css("-webkit-transform");//right image
                    $newLeft.css("-webkit-transform");//left image
					$newCenter.css("-webkit-transform");
                     
                } else {
                    $newRight.css("z-index",10 );
                    $newRight.css("-webkit-transform");
                    
                }
                // Animate the features into their new positions
                animateFeature($newLeft, direction);
                animateFeature($newCenter, direction);
                animateFeature($newRight, direction);
                
                if (animData.totalImage > 3) {
                    animateFeature($newHidden, direction);
                }
            } 
            function initiateMove(direction, rotations) {
                if (animData.currentlyMoving == false) {
                    var queue = rotations * animData.itemsToAnimate;
                    animData.rotationsRemaining = queue;
                    move(direction);
                }
            }
 
            animData.imageContainer.children("div")
                .click(function () {
                    var position = $(this).data('position');
                    if (position == 2) {
                        initiateMove(true,1);
                    } else if (position == animData.totalImage) {
                        initiateMove(false,1);
                    }
                })
           
        });
    };

    $.fn.screenAnimation.defaults = {
        
        bigImgWidth :       .8,
        bigImgHeight:		 .9,
        smallImgWidth:      .5,
        smallImgHeight:		.7, 
        topPadding:          20, 
        sidePadding:         40, 
        smallFeatureOffset:	 30, 
        initialAnimation:     1, 
        animationSpeed:       1500, 
        autoPlay:             true, 
        counterStyle:         1, 
        preload:               true, 
        displayCutoff:         0, 
        animationEasing:      'swing'
    };

})(jQuery);