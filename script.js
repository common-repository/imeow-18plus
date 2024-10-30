jQuery(document).ready(function() {
        jQuery('.imeow18_age_input').on('input', function() {
            if(jQuery(this).val().length===1){
                var nextInput = jQuery(this).next('.imeow18_age_input');
                nextInput.focus();
            }
        });
    });

jQuery('#imeow18_access').on('click',function(){
    var im_rok1 = jQuery('input[name="imeow18_rok1"]').val(),
        im_rok2 = jQuery('input[name="imeow18_rok2"]').val(),
        im_rok3 = jQuery('input[name="imeow18_rok3"]').val(),
        im_rok4 = jQuery('input[name="imeow18_rok4"]').val();
    
    // Zadaný rok narození
    var im_rok = im_rok1+im_rok2+im_rok3+im_rok4;
    // Aktuální rok
    let aktualniRok = new Date().getFullYear();
    
    var vek = parseInt(aktualniRok)-parseInt(im_rok);
    
    if(im_rok1.length === 0 || im_rok2.length === 0 || im_rok3.length === 0 || im_rok4.length === 0){
        // R1
        if (im_rok1.length === 0) {
            jQuery('input[name="imeow18_rok1"]').addClass("imeow18_err_inp");
            jQuery('input[name="imeow18_rok1"]').removeClass("imeow18_ok_inp");
        }
        else {
            jQuery('input[name="imeow18_rok1"]').addClass("imeow18_ok_inp");
            jQuery('input[name="imeow18_rok1"]').removeClass("imeow18_err_inp");
        }
        // R2
        if (im_rok2.length === 0) {
            jQuery('input[name="imeow18_rok2"]').addClass("imeow18_err_inp");
            jQuery('input[name="imeow18_rok2"]').removeClass("imeow18_ok_inp");
        }
        else {
            jQuery('input[name="imeow18_rok2"]').addClass("imeow18_ok_inp");
            jQuery('input[name="imeow18_rok2"]').removeClass("imeow18_err_inp");
        }
        // R3
        if (im_rok3.length === 0) {
            jQuery('input[name="imeow18_rok3"]').addClass("imeow18_err_inp");
            jQuery('input[name="imeow18_rok3"]').removeClass("imeow18_ok_inp");
        }
        else {
            jQuery('input[name="imeow18_rok3"]').addClass("imeow18_ok_inp");
            jQuery('input[name="imeow18_rok3"]').removeClass("imeow18_err_inp");
        }
        // R4
        if (im_rok4.length === 0) {
            jQuery('input[name="imeow18_rok4"]').addClass("imeow18_err_inp");
            jQuery('input[name="imeow18_rok4"]').removeClass("imeow18_ok_inp");
        }
        else {
            jQuery('input[name="imeow18_rok4"]').addClass("imeow18_ok_inp");
            jQuery('input[name="imeow18_rok4"]').removeClass("imeow18_err_inp");
        }
        
        jQuery('#imeow18_msg_wrap').show();
        jQuery('#imeow18_err_msg1').hide();
        jQuery('#imeow18_err_msg2').hide();
        jQuery('#imeow18_err_msg3').show();
    }
    else {
        jQuery('#imeow18_msg_wrap').hide();
        jQuery('.imeow18_age_input').addClass("imeow18_ok_inp");
        jQuery('.imeow18_age_input').removeClass("imeow18_err_inp");
        
        if(vek>=18&&vek<110){
            // Potvrdím vstup standardně
            var date = new Date();
            date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + date.toUTCString();
            document.cookie = "imeow18status=true;"+expires+";path=/";
            jQuery('#imeow18_wrapper').hide();
        }
        else {
            jQuery('input[name="imeow18_rok1"]').addClass("imeow18_err_inp");
            jQuery('input[name="imeow18_rok2"]').addClass("imeow18_err_inp");
            jQuery('input[name="imeow18_rok3"]').addClass("imeow18_err_inp");
            jQuery('input[name="imeow18_rok4"]').addClass("imeow18_err_inp");
            
            jQuery('#imeow18_msg_wrap').show();
            
            if(vek>110){
                jQuery('#imeow18_err_msg1').show();
                jQuery('#imeow18_err_msg2').hide();
                jQuery('#imeow18_err_msg3').hide();
            }
            if(vek<18){
                jQuery('#imeow18_err_msg1').hide();
                jQuery('#imeow18_err_msg2').show();
                jQuery('#imeow18_err_msg3').hide();
            }
        }
    }
});