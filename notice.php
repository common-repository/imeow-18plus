<?php if (!defined('ABSPATH')) {exit;} ?>

<div id="imeow18_wrapper" style="<?php echo esc_attr($status);?>" >
    <div class="imeow18_box">
        <?php echo esc_html__('You must be over 18 years old to access this site.','imeow-18plus').'<br>'.esc_html__('If you are younger, please click the exit button.','imeow-18plus');?>
        <div class="imeow18_row imeow18_content_center">
            <div class="imeow18_col-6">
                <?php echo esc_html__('Please enter your year of birth','imeow-18plus');?>
            </div>
        </div>
        <div class="imeow18_row imeow18_content_center">
            <div class="imeow18_col-6">
                <input type="number" min="1" max="9" name="imeow18_rok1" class="imeow18_age_input">
                <input type="number" min="0" max="9" name="imeow18_rok2" class="imeow18_age_input">
                <input type="number" min="0" max="9" name="imeow18_rok3" class="imeow18_age_input">
                <input type="number" min="0" max="9" name="imeow18_rok4" class="imeow18_age_input">
            </div>
        </div>
        <div id="imeow18_msg_wrap" class="imeow18_row imeow18_content_center"  style="display: none">
            <div class="imeow18_col-6">
                <small>
                    <span id="imeow18_err_msg1" style="display: none">
                        <?php echo esc_html__('Please enter your real year of birth.','imeow-18plus');?>
                    </span>
                    <span id="imeow18_err_msg2" style="display: none">
                        <?php echo esc_html__('You must be at least 18 years old to enter the website.','imeow-18plus');?>
                    </span>
                    <span id="imeow18_err_msg3" style="display: none">
                        <?php echo esc_html__('Please enter your real year of birth.','imeow-18plus');?>
                    </span>
                </small>
            </div>
        </div>
        <div class="imeow18_row">
            <div class="imeow18_col-6">
                <a href="https://google.com/" rel="nofollow" class="imeow18_btn"><?php echo esc_html__('Exit','imeow-18plus');?></a>
            </div>
            <div class="imeow18_col-6">
                <a href="#" id="imeow18_access" class="imeow18_btn imeow18_btn-success"><?php echo esc_html__('Enter','imeow-18plus');?></a>
            </div>
        </div>
        <small><?php echo esc_html__('By clicking the enter button, you agree to the storage of Cookies, confirming your choice for the purpose of future verification.','imeow-18plus'); ?></small>
    </div>
</div>