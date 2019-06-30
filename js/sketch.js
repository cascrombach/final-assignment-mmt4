$(document).ready(function () {
    $(function () {
        $("#accordion").accordion({
            animate: 500,
            heightStyle: "content",
            collapsible: true, header: ".container2 h3"
        });
    });

    window.onscroll = function () { myFunction() };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }

    $('.switchknop').click(function () {
        $('.switchknop').toggleClass('active')
        $('body').toggleClass('night')
    });

    $('video').each(function () {
        var player = videojs(this.id);
        let geklikt = false;

        $(this).parents(".videoContainer").find(".rewind").click(function () {
            player.currentTime(player.currentTime() - 10);
        });

        $(this).parents('.videoContainer').find('.toggle').click(function () {
            if (!geklikt) {
                player.play();
                $('.toggle').addClass('pause');
                geklikt = true;
            } else {
                player.pause();
                $('.toggle').removeClass('pause');
                geklikt = false;
            }
        });

        $(this).parents('.videoContainer').find('.vinkje2').click(function () {
            $(this).parents('.container2').find('.vinkje1').css({ 'display': 'inline' });

        });

        $(this).parents('.videoContainer').find('.vinkje2').click(function () {
            $(this).parents('.container2').find('.modal').css({ 'display': 'block' });
        });

        $(this).parents('.videoContainer').find('.close').click(function () {
            $(this).parents('.container2').find('.modal').css({ 'display': 'none' });
        });
    });
});