<script>
    document.documentElement.style.setProperty('--primary-color', '<?php
        $primary_color = esc_attr(get_option('newaqarr_theme_settings')['primary_color']);
        echo
        $primary_color; ?>');

    document.documentElement.style.setProperty('--secondary-color', '<?php
        $secondary_color = esc_attr(get_option('newaqarr_theme_settings')['secondary_color']);
        echo
        $secondary_color; ?>');
    document.documentElement.style.setProperty('--secondary-color-2', '<?php
        $secondary_color_2 = esc_attr(get_option('newaqarr_theme_settings')['secondary_color_2']);
        echo
        $secondary_color_2; ?>');

</script>