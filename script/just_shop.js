(function($){

    const shop = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.footer();
        },
        header(){
            $('.menu-btn').on({
                mouseenter(){
                    $('.sub').stop().show(0);
                },
                focus(){ 
                    $('.sub').stop().show(0);
                }
            });

            $('#nav').on({
                mouseleave(){
                    $('.sub').stop().hide(0);
                }
            });

        },
        section1(){

            let cnt=0;
            function mainSlide(){ 
               $('.slide-wrap').stop().animate({top:`${-300*cnt}px`}, 600,function(){
                    if(cnt>2) cnt=0;
                    $('.slide-wrap').stop().animate({top:`${-300*cnt}px`}, 0);
               });
            }


            function mextCount(){
                cnt++;
                mainSlide();
            }


            function autotimer(){
                setInterval(mextCount, 3000);
            }
            autotimer();

        },
        section2(){
           
            $('.gallery-btn').on({
                click(){
                    $('.gallery-btn').addClass('on');
                    $('.notice-btn').addClass('on');
                    $('.notice-box').hide(0);
                    $('.gallery-box').show(0);
                }
            })

             $('.notice-btn').on({
                click(){
                    $('.gallery-btn').removeClass('on');
                    $('.notice-btn').removeClass('on');
                    $('.notice-box').show(0);
                    $('.gallery-box').hide(0);
                }
            })
            $('.popup-btn').on({
                click(){
                    $('.popup').css({display:'flex'});
                }
            });

            $('.close-btn').on({
                click(){
                    $('.popup').css({display:'none'});
                }
            });

        },
        footer(){
            
        }
    }
    shop.init();

})(jQuery);