// Challenge by frontendmentor.io & Coded by yonutdev.xyz

$('#shortening form').submit(function(e){
    e.preventDefault();

    let shortening_url = $('#shortening_url').val();

    $.getJSON("https://api.shrtco.de/v2/shorten?url=" + shortening_url, function(data){
        $("#shortened").append('<div class="card mt-2" style="width: 100%;"> <p style="color: hsl(257, 27%, 26%);">' + data.result.original_link + '</p><div class="d-inline"> <p style="color: hsl(180, 66%, 49%); margin-right: 1rem;">' + data.result.full_short_link + '</p><a onclick="navigator.clipboard.writeText(\'' + data.result.full_short_link + '\')" class="btn btn-primary fw-bold shortened-copy shadow-none">Copy</a> </div></div>');
        
        $('.shortened-copy').unbind('click');
        $('.shortened-copy').click(function() {
            $(this).css({'background': 'hsl(257, 27%, 26%)'});
            $(this).text('Copied!');

            setTimeout(() => {
                $(this).css({'background': 'hsl(180, 66%, 49%)'});
                $(this).text('Copy');
            }, 1500);
        });
    });

    $(this).trigger("reset");
});