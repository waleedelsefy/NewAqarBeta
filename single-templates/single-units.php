<head xmlns="http://www.w3.org/1999/html">
    <?php
    get_header();
    $unit_project = get_post_meta($post->ID, '_unit_project_id', true);
    $theme_settings = get_option('newaqar_theme_settings');
    $whatsapp_number = esc_attr($theme_settings['whatsapp_number']);
    $sales_number = esc_attr($theme_settings['phone_number']);
    $developer_terms = get_the_terms($unit_project, 'developer');
    $city_terms = get_the_terms( $unit_project, 'city');
    $unit_location = get_post_meta($post->$unit_project, 'unit_location', true);
    $types_terms = get_the_terms($unit_project, 'types');
    $project_details = get_post_meta($unit_project, 'project_details', true);
    $project_price = isset($project_details['project_price']) ? esc_attr($project_details['project_price']) : 0;
    $unit_details = get_post_meta($post->ID, 'unit_details', true);
    $unit_space = isset($unit_details['unit_space']) ? esc_attr($unit_details['unit_space']) : '';
    $unit_price_auto = is_numeric($project_price) && is_numeric($unit_space) ? $project_price * $unit_space : 0;
    $payment_systems = isset($unit_details['payment_systems']) ? esc_attr($unit_details['payment_systems']) : '';
    $unit_price = isset($unit_details['unit_price']) ? esc_attr($unit_details['unit_price']) : $unit_price_auto;
    $delivery = isset($unit_details['delivery']) ? esc_attr($unit_details['delivery']) : '';
    $down_payment = isset($unit_details['down_payment']) ? esc_attr($unit_details['down_payment']) : '';
    $installment = isset($unit_details['installment']) ? esc_attr($unit_details['installment']) : '';
    if ($types_terms && !is_wp_error($types_terms)) {
        $first_term = reset($types_terms);
        $types_name = esc_html($first_term->name);
        $types_link = get_term_link($first_term);
    }
    if ($developer_terms && !is_wp_error($developer_terms)) {
        $first_term = reset($developer_terms);
        $developer_name = esc_html($first_term->name);
        $developer_link = get_term_link($first_term);
    }
    if ($city_terms && !is_wp_error($city_terms)) {
        $first_term = reset($city_terms);
        $city_name = esc_html($first_term->name);
        $city_link = get_term_link($first_term);
    }
    ?>
</head>
<?php
$post_type = get_post_type();
if ($post_type === 'units' || $post_type === 'projects') {
    // Check if the number of paragraphs is greater than 5
    if (get_the_content() && substr_count(get_the_content(), '<p>') > 5) {
        // Check if the custom field '_your_custom_field' is set
        $custom_field_value = get_post_meta(get_the_ID(), '_your_custom_field', true);
        if (!empty($custom_field_value)) {
            // Display the Fluent Form with ID 4
            echo do_shortcode('[fluentform id="7"]');
        } else {
            echo 'Custom field is not set.';
        }
    }
}
?>
<style>
    a {
        color: var(--primary-have-color-collapse) !important;
        text-decoration: none;
    }
    .breadcrumbs a:hover{color: #8DBF6A}
    .project-main-title h1{font-size: 1.2rem;line-height: 2rem; font-weight: 700; margin:0 ;transition: 0.2s }
    .project-main-title h1:hover{color: #8DBF6A}
    @media only screen and (min-width:992px){
        .project-main-title h1{font-size: 1.6rem;line-height: 2.4rem; }
    }
    .main-price-box .p-price{display: flex; align-items: center;justify-content: center}
    .main-price-box .main-price-range{font-size: 1.8rem; line-height: 2.6rem;font-weight: bold; color: #9BB73D;margin-inline-end: 7px}
    .main-price-box .small-txt{font-size: 0.9rem;color: #8F959B}
    @media only screen and (min-width:992px){
        .main-price-box .main-price-box{margin-top:20px;}
    }
    .main-cta a{border-radius: 5px;display: flex;align-items: center;justify-content: center;width:100%;height:30px;line-height: 28px;text-align: center;color:var(--primary-color-collapse);margin:5px;font-size: 0.8rem;transition: 0.3s;background-color: #FFFFFF;border:1px solid #9A9A9A;white-space: nowrap; overflow: hidden;font-weight: 600;z-index: 1;position:relative}
    .main-cta a:hover{background-color: var(--primary-color-collapse);color: #FFFFFF;border-color:var(--primary-color-collapse)}
    .main-cta i{font-size: 0.9rem;margin-inline-end: 2px;margin-inline-start: -5px; color: #8CC2C8}
    .main-cta .cta-wts i{color: #9BB73D}
    .main-cta .cta-phone i{color: var(--primary-color-collapse)}
    @media only screen and (min-width:992px){
        .main-cta a{height:36px;line-height: 34px;font-size: 0.9rem;}
        .main-cta i{font-size: 1.1rem;margin-inline-end: 5px}
    }
    .project-gallery *{transition: 0.5}
    .project-gallery-img-big img, .project-gallery-img img{width:100%;height:300px; object-fit: cover;display: block}
    .project-gallery-img img{height:80px}
    .project-gallery .more-images{position: absolute;top:0; bottom:0; left:0; margin-inline-start: 0;background-color: rgba(35,63,90,0.6);display: flex; align-items: center;justify-content: center;font-size: 0.9rem;line-height: 1.2rem; font-weight: bold; color: #FFFFFF;text-align: center;transition: 0.2s;text-shadow: 1px 1px 2px rgba(0,0,0,0.5)}
    .project-gallery .more-images:hover{background-color: rgba(35,63,90,0.8)}
    @media only screen and (min-width:992px){
        .project-gallery-img img{height:200px}
        .project-gallery-img-big img{height:420px}
        .project-gallery .more-images{font-size: 1.1rem;line-height: 1.5rem}
    }
    .content-box{background-color: #FFFFFF;padding:0px;margin-bottom: 25px;overflow: hidden;border-radius: 10px;color: #313A52;box-shadow: 0 0 3px rgba(0,0,0,0.1)}
    .content-box ul{padding-inlne-start: 25px}
    .content-box li{padding:5px}
    .content-box h3{color:var(--primary-link-color)}
    .content-box img{max-width: 100%;height:auto}
    .content-box .headline-p {line-height: 30px;transition: 0.5s;text-align: start;font-size: 1.2rem;position: relative;font-weight: bold;margin: 15px 0;color: var(--primary-have-color-collapse);padding-right:10px;border-right: 4px solid var(--primary-have-color-collapse)}
    .project-sub-title{display: flex; font-weight: bold;font-size: 1.1rem;margin-bottom: 25px; margin-top: 25px;position: relative}
    .project-sub-title::before, .project-sub-title::after{content: "";position:absolute;width:6px;border-radius: 10px;height:6px;background-color: var(--primary-have-color-collapse);bottom:-10px; }
    .project-sub-title::after{margin-inline-start:10px; width:80px;height: 4px;background-color: #8CC2C8; ;bottom:-9px;}
    table.infotable {border-collapse: collapse;width:calc(100% + 30px);color: #646A70;margin:0px 0px 0px -7px;}
    table.infotable tr:nth-child(even){background-color: #F9F9F9}
    table.infotable th.ttitle {width: 35%;font-size: 0.8rem;padding-left:0;border-left:1px solid #e0dcd6;background-color: var(--primary-color-collapse); color:  #FFFFFF}
    table.infotable tr:nth-child(even) th.ttitle{background-color:#212529}
    table.infotable td, table.infotable th {margin: 0; padding: 7px 10px; text-align: start;font-size: 0.9rem}
    table.infotable a:hover{color: var(--primary-have-color-collapse)}
    @media only screen and (min-width:992px){
        table.infotable th.ttitle {font-size: 0.9rem; width: 15%}
        table.infotable td, table.infotable th {font-size: 1rem; padding: 7px 25px 7px 15px}
    }
    .facility-img img{height:25px;width:auto;display: block; margin-inline-end: 5px}
    @media only screen and (min-width:992px){
        .facility-img img{height:30px;}
    }
    .p-quick-link-img img{display: block; width:100%; height:100px; object-fit: cover; transition: 0.5s}
    .p-quick-link-img img:hover{opacity: 0.7; transform: scale(1.05)}
    position: absolute;
    transition: .5s ease-in-out;
    left: 50%;
    z-index: 1;
    padding: 10px 20px;
    width: 700px;
    max-width: 90%;
    top: 50px;
    transform: translateX(-50%);
    border-radius: 10px;
    overflow: hidden;
    background-color: #FFFFFF;
    }
    .quick-link-lightbox iframe {
        width: 100%;
        border-radius: 10px;
        margin-top: 10px;
    }
    @media only screen and (min-width:992px){
        .p-quick-link-img img{height:150px;}
    }
    .lwptoc_items a:hover{color: var(--primary-link-color)}
    .faq .acc {margin: 0 auto;}
    .faq .acc__card {margin: 10px 0; position: relative;}
    .faq .acc__title {background: #FFF; color: var(--primary-color-collapse); cursor: pointer; display: block; padding: 10px 15px; position: relative; text-align: start;border-radius: 5px;box-shadow: 1px 1px 2px rgba(0,0,0,0.3)}
    .faq .acc__title::after  { width: 8px; height: 8px; border-left: 3px solid var(--primary-color-collapse); border-top: 3px solid var(--primary-color-collapse);  position: absolute; left: 20px; content: " "; top: 50%; transform: rotate(-45deg) translateY(-50%); transition: all 0.2s ease-in-out;}
    .faq .acc__title.active{background-color: var(--primary-have-color-collapse);color:#FFFFFF}
    .faq .acc__title.active::after { transform: rotate(-135deg) translateY(50%); transition: all 0.2s ease-in-out;border-color:#FFFFFF}
    .faq .acc__panel {background-color: #FFFFFF;border:2px solid var(--primary-have-color-collapse); color: #575E65;  display: none; margin: 0; padding: 20px; text-align: start;border-radius: 0 0 5px 5px;margin-top:-5px}
    /*author-box*/
    .author-box{width:100%;padding: 15px; display: flex; flex-wrap: wrap; justify-content: center;text-align: center}
    .author-img{ border-radius: 100px; overflow: hidden;flex-shrink: 0}
    .author-img img{width:100px; height:100px;object-fit: cover; display: block}
    .author-name{font-size:1rem; font-weight: 700;margin-top: 10px}
    .author-name:hover{color: var(--primary-have-color-collapse)}
    .author-data{display: flex; flex-direction: column;width:100%}
    ul.author-contacts{display:flex;list-style-type: none; padding: 0;margin: 0 -4px;justify-content: center}
    .author-contacts li{margin: 4px;color: var(--primary-color-collapse);padding: 0}
    .author-contacts li a:hover{color: var(--primary-link-color)}
    .author-txt{font-size: 0.9rem; color: #8F959B}
    @media only screen and (min-width:992px){
        .author-box{flex-wrap: nowrap; align-items: center; text-align: inherit;}
        .author-img{ margin-inline-end: 25px;}
        .author-name{font-size:1.1rem; margin: 0}
        ul.author-contacts{justify-content: flex-start}
    }
    /*side-bar*/
    .side-bar{position: sticky; top:100px}
    /*payment-plan*/
    .payment-plan {border: 2px solid var(--primary-have-color-collapse); border-radius: 10px;display: flex;flex-direction: column; margin-bottom: 0; margin-top:20px}
    /*side-title*/
    .side-title{text-align: center; font-weight: 700; font-size: 1.1rem; color: var(--primary-link-color); background-color: #fcfcfd.fluentform; display: inline-block; margin-top: -20px; align-self: center; padding: 0 20px;line-height: 40px}
    /*side-details*/
    .side-details{display: flex; margin:10px; margin-bottom: 15px}
    .side-details .side-details-box{background-color: #FFFFFF; border-radius: 10px;box-shadow: 0 0 3px rgba(0,0,0,0.05); display: flex; flex-direction: column; font-size: calc(var(--p-content-font-size) - 20%); color: #8F959B; justify-content: center;padding:10px; text-align: center; margin:5px; width:100%; border:1px solid var(--primary-have-color-collapse)}
    .side-details .big-detail{font-size: var(--p-content-font-size); font-weight: 600; color: var(--primary-color-collapse)}
    .price-last-update{background-color: var(--primary-have-color-collapse);color: #FFF; border-radius: 0 0 9px 9px; text-align: center}
    .side-bar .payment-plan{display: block}
    @media only screen and (min-width:992px){
        .payment-mobile{display:none}
        .side-bar .payment-plan{display: flex; margin-top: 5px}
    }
    /*side-contact*/
    .side-contact form{display:block;padding:0 10px}
    .side-contact .form-title{font-weight: 700; font-size: 1.1rem}
    .side-contact .form-bg,.side-contact .comment{width:100%;padding-right:15px;height:40px;line-height:38px;color:var(--primary-color-collapse);display:block;font-family:"Cairo";font-size:0.85rem;margin-top:15px;border:1px solid #C0C0C0;font-weight: bold;background-color: #FFFFFF;border-radius: 10px}
    .side-contact .comment{height:100px;}
    .side-contact .search-select{appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
        background-position: 2%;
        background-repeat: no-repeat;
        color: rgba(35,63,90,0.7);}
    .side-contact .form-bg::placeholder,.side-contact .comment::placeholder{opacity:.5}
    .side-contact .submit{margin:15px 0;float:left;background-color:var(--primary-color-collapse);line-height:32px;padding:0 20px 3px;color:#FFF;font-size:1rem;border:0;transition:0.5s;border-radius: 10px;font-family: 'Cairo', sans-serif;}
    .side-contact .submit:hover{cursor:pointer;background-color: var(--primary-color-collapse)}
    /*side-bar main-cta*/
    .side-bar .main-cta{}
    .side-bar .main-cta a{background-color: #8CC2C8;color:#FFF;border:none;}
    .side-bar .main-cta a:hover{transform: translateY(3px)}
    .side-bar .main-cta i{font-size: 0.9rem;margin-inline-end: 2px;margin-inline-start: -5px}
    .side-bar .main-cta .cta-wts {background-color: var(--primary-have-color-collapse)}
    .side-bar .main-cta .cta-phone {background-color: var(--primary-color-collapse)}
    .side-bar .main-cta .cta-wts i, .side-bar .main-cta .cta-phone i{color:#FFFFFF }
    .contact-form.project-form{padding:10px 2%}
    .contact-form.project-form .form-title{padding-top:10px;padding-right:15px;font-size: 1.2rem;margin-bottom: 0}
    /*related-projects*/
    .related-projects{padding:20px 0;margin-top:20px}
    @media only screen and (min-width:992px){
        .related-projects{padding:60px 0;}
    }
    /*.schedule-meeting*/
    .schedule-meeting form{display: flex; flex-wrap: wrap;padding:15px; justify-content: space-between}
    .schedule-meeting .form-inside-title{font-weight: bold; font-size: 0.9rem;margin-bottom: 5px; padding-right: 5px}
    .schedule-meeting .input-box{width:98%;margin:0 1%}
    .schedule-meeting .input-box label{font-size: 0.9rem;margin-bottom: 5px; font-weight: bold}
    .schedule-meeting .form-bg,.schedule-meeting .comment{width:100%;padding-right:15px;height:40px;line-height:38px;color:var(--primary-color-collapse);display:block;font-family:"Cairo";font-size:0.85rem;margin-bottom:15px;border:1px solid #C0C0C0;font-weight: bold;background-color: #FFFFFF;border-radius: 10px}
    .schedule-meeting .comment{height:100px;}
    .schedule-meeting .search-select{appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
        background-position: 2%;
        background-repeat: no-repeat;
        color: rgba(35,63,90,0.7);}
    .schedule-meeting .form-bg::placeholder,.schedule-meeting .comment::placeholder{opacity:.5; }
    .schedule-meeting .submit{margin:15px 0;background-color:var(--primary-color-collapse);line-height:32px;padding:0 20px 3px;color:#FFF;font-size:1rem;border:0;transition:0.5s;border-radius: 10px;font-family: 'Cairo', sans-serif; align-self: flex-end}
    .schedule-meeting .submit:hover{cursor:pointer;background-color: var(--primary-have-color-collapse)}
    /*radio*/
    .schedule-meeting .radio-box{
        display: flex; overflow-x: auto;width:100%;list-style-type: none;padding-right: 0; margin-bottom: 15px
    }
    .schedule-meeting  .radio-box [type="radio"]{display: none}
    .schedule-meeting  .radio-box label{display: flex; justify-content: space-between; align-items: center;text-align: center; padding:5px 10px; width:100%; background-color: #F9F9F9; color: #70777E; font-size: 0.9rem; border-radius: 10px; cursor: pointer; border:2px solid #DADADA;transition: 0.2s;}
    .schedule-meeting  .radio-box label:hover, .schedule-meeting  .radio-box input:checked ~ label{background-color: #EDF5F6;border-color:#00B0C4; color: #00B0C4}
    @media only screen and (min-width:992px){
        .schedule-meeting .input-box{width:48%;margin:0 1%}
        .schedule-meeting .search-select{width:60%}
        .schedule-meeting .submit{margin-top:50px; margin-bottom: 0}
    }
</style>
<div class="container">
    <div class="breadcrumbs-wrapper my-4">
        <?php
        the_breadcrumb();
        ?>
    </div>
    <div class="row">
        <div class="col-12 col-sm-9 col-lg-9 left-side-bar">
             <div class="main-content">
                <main id="content" class="column main-content">
                    <div class="post-thumbnail d-flex justify-content-center align-items-center">
                    <?php the_post_thumbnail() ?>
                    </div>
                    <div class="project-sub-title"><?php echo __('Unit details', 'newaqar'); ?></div>
                    <div class="content-box">
                        <table class="infotable">
                            <tbody>
                                    <tr>
                                        <th class="ttitle"><?php _e('Unit Name', 'newaqar'); ?></th>
                                        <td class="tvalue"><?php echo get_the_title(); ?></td>
                                    </tr>
                                    <?php
                                    if (isset($unit_project)) {
                                        ?>
                                        <tr>
                                            <th class="ttitle"><?php _e('Project Name', 'newaqar'); ?></th>
                                            <td class="tvalue"><a href="<?php echo get_permalink($unit_project); ?>"><?php echo get_the_title($unit_project); ?></a></td>
                                        </tr>
                                        <?php
                                    }
                                    if (isset($developer_name) && isset($developer_link)) {
                                        ?>
                                        <tr>
                                            <th class="ttitle"><?php _e('Developing Company', 'newaqar'); ?></th>
                                            <td class="tvalue"><a href="<?php echo $developer_link; ?>"><?php echo $developer_name; ?></a></td>
                                        </tr>
                                        <?php
                                    }
                                    if (isset($types_name) && isset($types_link)) {
                                    ?>
                                    <tr>
                                        <th class="ttitle"><?php _e('Unit Types', 'newaqar'); ?></th>
                                        <td class="tvalue"><a href="<?php echo $types_link; ?>"><?php echo $types_name; ?></a></td>
                                    </tr>
                                    <?php
                                    }
                                    if (isset($city_name) && isset($city_link)) {
                                        ?>
                                        <tr>
                                            <th class="ttitle"><?php _e('Unit Location', 'newaqar'); ?></th>
                                            <td class="tvalue"><a href="<?php echo $city_link; ?>"><?php echo $city_name; ?></a></td>
                                        </tr>
                                        <?php
                                    }
                                    if (isset($unit_price) && isset($unit_price)) {
                                        ?>
                                        <tr>
                                            <th class="ttitle"><?php _e('Unit price', 'newaqar'); ?></th>
                                            <td class="tvalue"><span><?php echo $unit_price . ' ' . esc_html__('EGP', 'newaqar'); ?></span></td>
                                        </tr>
                                        <?php
                                    }
                                    if ($sales_number && !is_wp_error($sales_number)) {
                                        ?>
                                        <tr>
                                            <th class="ttitle"><?php _e('Sales Number', 'newaqar'); ?></th>
                                            <td class="tvalue"><a href="tel:+2<?php echo esc_attr($sales_number); ?>"><?php echo esc_html($sales_number); ?></a></td>
                                        </tr>
                                        <?php
                                    }
                                    ?>
                                    </tbody>
                                </table>
                        </div>
                    <div>
                            <?php echo do_shortcode('[newaqar_cta]') ?>
                    </div>
                    <div class="side-bar-mob">
                        <?php if ($down_payment != "") : ?>
                            <div class="payment-plan">
                                <div class="side-title"><?php echo __('Payment System', 'newaqar'); ?></div>
                                <div class="side-details">
                                    <?php if ($down_payment != "") : ?>
                                        <div class="side-details-box">
                                            <span><?php echo __('Deposit', 'newaqar'); ?></span>
                                            <span class="big-detail"><?php echo $down_payment; ?> %</span>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ($installment != "") : ?>
                                        <div class="side-details-box">
                                            <span><?php echo __('installment', 'newaqar'); ?></span>
                                            <?php
                                            if ($installment > 10) {$installment_text = 'سنة';} else { $installment_text = 'سنوات';}?>
                                            <span class="big-detail"><?php echo $installment; ?> <?php echo esc_html($installment_text); ?></span>
                                        </div>
                                    <?php endif; ?>
                                    <?php if ($delivery != "") : ?>
                                        <div class="side-details-box">
                                            <span><?php echo __('Receipt', 'newaqar'); ?></span>
                                            <span class="big-detail"><?php echo $delivery; ?> </span>
                                        </div>
                                    <?php endif; ?>
                                </div>
                                <div class="price-last-update">
                                    <?php
                                    if (get_the_modified_date() != get_the_date()) {
                                        echo '<p>' . __('Last updated in:', 'newaqar') . get_the_modified_date() . '</p>';
                                    }
                                    ?>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                    <div class="table-content my-2 py-3 px-3 ">
                    <?php echo do_shortcode('[social_share_box]'); ?>
                            <?php the_content(); ?>
                        </div>
                    <?php
                    if (function_exists('pll_current_language')) {
                        $current_language = pll_current_language();

                        if ($current_language === 'ar') {
                            echo do_shortcode('[fluentform id="9"]');
                        } elseif ($current_language === 'en') {
                            echo do_shortcode('[fluentform id="10"]');
                        }
                    }
                    ?>

                        <div class="container-accordion">
                            <div class="accordion" id="accordionFAQ">
                                <?php
                                $unserialized_data = (get_post_meta($post->ID, '_faqs', true));
                                if ($unserialized_data && is_array($unserialized_data)) {
                                    foreach ($unserialized_data as $index => $qa_pair) :
                                        ?>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="heading<?php echo esc_attr($index + 1); ?>">
                                                <button class="accordion-button <?php echo ($index === 0) ? 'collapsed' : ''; ?>" type="button" data-bs-toggle="collapse" data-bs-target="#collapse<?php echo esc_attr($index + 1); ?>" aria-expanded="<?php echo ($index === 0) ? 'true' : 'false'; ?>" aria-controls="collapse<?php echo esc_attr($index + 1); ?>">
                                                    <?php echo esc_html($qa_pair['question']); ?>
                                                </button>
                                            </h2>
                                            <div id="collapse<?php echo esc_attr($index + 1); ?>" class="accordion-collapse collapse <?php echo ($index === 0) ? 'show' : ''; ?>" aria-labelledby="heading<?php echo esc_attr($index + 1); ?>" data-bs-parent="#accordionFAQ">
                                                <div class="accordion-body">
                                                    <strong><?php echo esc_html($qa_pair['answer']); ?></strong>
                                                </div>
                                            </div>
                                        </div>
                                    <?php
                                    endforeach;
                                }
                                ?>
                            </div>
                        </div>
                    <div class="row related-section my-5 d-flex justify-content-center">
                        <h3><?php echo __('Similar units', 'newaqar'); ?></h3>
                        <?php
                        $unit_project_id = get_post_meta($post->ID, '_unit_project_id', true);
                        $args = array(
                            'post_type'      => 'units',
                            'post_status'    => 'publish',
                            'posts_per_page' => 4,
                            'orderby'        => 'rand',
                            'post__not_in'   => array($post->ID),
                            'meta_query'     => array(
                                array(
                                    'key'     => '_unit_project_id',
                                    'value'   => $unit_project_id,
                                    'compare' => 'EXISTS',
                                ),
                            ),
                        );
                        $relatedPosts = new WP_Query($args);
                        if ($relatedPosts->have_posts()) {
                            while ($relatedPosts->have_posts()) {
                                $relatedPosts->the_post();
                                ?>
                                <div class="col-lg-6 col-md-6 w-45 col-12 mt-4">
                                    <?php get_template_part('template-parts/single-card'); ?>
                                </div>
                                <?php
                            }
                            $remaining_units = 4 - $relatedPosts->post_count;
                            if ($remaining_units > 0) {
                                $random_args = array(
                                    'post_type'      => 'units',
                                    'post_status'    => 'publish',
                                    'posts_per_page' => $remaining_units,
                                    'orderby'        => 'rand',
                                    'post__not_in'   => array_merge(array($post->ID), wp_list_pluck($relatedPosts->posts, 'ID')),
                                );
                                $randomPosts = new WP_Query($random_args);
                                if ($randomPosts->have_posts()) {
                                    while ($randomPosts->have_posts()) {
                                        $randomPosts->the_post();
                                        ?>
                                        <div class="col-lg-6 col-md-6 w-45 col-12 mt-4">
                                            <?php get_template_part('template-parts/single-card'); ?>
                                        </div>
                                        <?php
                                    }
                                }
                                wp_reset_postdata();
                            }
                        } else {
                            echo __('No similar units', 'newaqar');
                        }
                        wp_reset_postdata();
                        ?>
                    </div>
                </main>
            </section>
        </div>
        </div>
        <div class="col-12 col-sm-3 col-lg-3 right-side-bar">
            <div class="side-bar">
                <?php if ($down_payment != "") : ?>
                    <div class="payment-plan">
                        <div class="side-title"><?php echo __('Payment System', 'newaqar'); ?></div>
                        <div class="side-details">
                            <?php if ($down_payment != "") : ?>
                                <div class="side-details-box">
                                    <span><?php echo __('Deposit', 'newaqar'); ?></span>
                                    <span class="big-detail"><?php echo $down_payment; ?> %</span>
                                </div>
                            <?php endif; ?>
                            <?php if ($installment != "") : ?>
                                <div class="side-details-box">
                                    <span><?php echo __('installment', 'newaqar'); ?></span>
                                    <?php
                                    if ($installment > 10) {$installment_text = 'year';} else { $installment_text = 'years';}?>
                                    <span class="big-detail"><?php echo $installment; ?> <?php echo esc_html($installment_text); ?></span>
                                </div>
                            <?php endif; ?>
                            <?php if ($delivery != "") : ?>
                                <div class="side-details-box">
                                    <span><?php echo __('Receipt', 'newaqar'); ?></span>
                                    <span class="big-detail"><?php echo $delivery; ?> </span>
                                </div>
                            <?php endif; ?>
                        </div>
                        <div class="price-last-update">
                            <?php
                            if (get_the_modified_date() != get_the_date()) {
                                echo '<p>' . __('Last updated in:', 'newaqar') . get_the_modified_date() . '</p>';
                            }
                            ?>
                        </div>
                    </div>
                <?php endif; ?>
                <div class="message-section">
                     <?php
                        if (function_exists('pll_current_language')) {
                            $current_language = pll_current_language();

                            if ($current_language === 'ar') {
                                echo do_shortcode('[fluentform id="7"]');
                            } elseif ($current_language === 'en') {
                                echo do_shortcode('[fluentform id="11"]');
                            }
                        }
                        ?>
                </div>
            </div>
        </div>
    </div>
</div>
    <?php echo get_footer(); ?>
