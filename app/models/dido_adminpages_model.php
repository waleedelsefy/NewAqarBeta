<?php 

// Security Check
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }

add_action( 'admin_menu', 'dido_admin_pages' );
function dido_admin_pages() {
    add_menu_page("Price calculator","Price calculator",'manage_options','price-calculator','Dido_price_calc','dashicons-schedule',3);
    add_menu_page( 'Meeting', 'Meeting', 'manage_options', 'meeting', 'Dido_meeting','dashicons-format-status',3); 

}



function Dido_meeting()
{
?>
<style>
.meetingbox {
    display: flex;
    margin-bottom: 15px;
    background: #171717;
    padding: 20px;
    border-radius: 10px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    font-size: 20px;
    font-weight: 600;
}
.meetingbox.waiting {background:green;}
.meetingbox.onmeeting {background:darkorange;}
.meetingbox.finish {background:blue;}
#cloneme {display:none}
</style>
<div id="wrap">

<h1 class="wp-heading-inline"> Meeting requests </h1>

<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    if( isset( $_POST['Apply'] ) AND isset( $_POST['meetid'] ) )
    { dido_start_meeting( $_POST['meetid'] ); }

    elseif( isset( $_POST['reject'] ) AND isset( $_POST['meetid'] ) )
    { dido_edit_meeting( $_POST['meetid'] , 'reject' ); }

    elseif( isset( $_POST['finish'] ) AND isset( $_POST['meetid'] ) )
    { dido_edit_meeting( $_POST['meetid'] , 'finish' ); }

    elseif( isset( $_POST['delete'] ) AND isset( $_POST['meetid'] ) )
    { dido_delete_meeting( $_POST['meetid']); }
    

}
else {
?>


<div id="cloneme" class="meetingbox">
    <div class="name"></div>
    <div class="time"></div>
    <div class="status"></div>
    <div class="form1">
        <form action="<?php echo admin_url('admin.php?page=meeting') ?>" method="POST">
            <input type=hidden name=meetid value="">
            <input type="submit" class="button action" name="Apply" value="Apply">
        </form>
    </div>
    <div class="form2">
        <form action="<?php echo admin_url('admin.php?page=meeting') ?>" method="POST">
            <input type=hidden name=meetid value="">
            <input type="submit" class="button action" name="reject" value="reject">
        </form>
    </div>
    <div class="form2">
        <form action="<?php echo admin_url('admin.php?page=meeting') ?>" method="POST">
            <input type=hidden name=meetid value="">
            <input type="submit" class="button action" name="finish" value="finish">
        </form>
    </div>
    <div class="form2">
        <form action="<?php echo admin_url('admin.php?page=meeting') ?>" method="POST">
            <input type=hidden name=meetid value="">
            <input type="submit" class="button action" name="delete" value="delete">
        </form>
    </div>
</div>

<div id="meet"></div>

<script>
    const getMachineAction = async () => {
    try {
        const response = await fetch('<?php echo THEME_URL.'/storage/data/meeting.json';?>?v='+ generateRandomInteger(10));
        if (response.status === 200) {
            const myJson = await response.json();
            dido_meeting_results( myJson );
        } else {
            console.log("not a 200");
        }
    } catch (err) {
        console.log(err);
    } finally {
        setTimeout(getMachineAction , 5000);
    }
};
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}
getMachineAction();
function dido_meeting_results( data )
{
    if (data.hasOwnProperty('meeting')) {
        var meetingdata = data['meeting'];
        if (is_object(meetingdata)) {
            
            for (const key in meetingdata) {
                if (meetingdata.hasOwnProperty(key)) {
                    
                    var meetingID = key;
                    var thisdata = meetingdata[key];

                    if (is_object(thisdata)) {

                        var status = thisdata['status'];
                        var time = thisdata['time'];
                        var name = thisdata['name'];

                        var mainBox = document.getElementById("meet");

                        var this_element = document.getElementById("meeting-" + meetingID);

                        if( this_element == null )
                        {

                            const box = document.getElementById('cloneme');
                            const clone = box.cloneNode(true);
                            clone.id = "meeting-" + meetingID;
                            clone.classList.add( status );
                            var namebox = clone.querySelector('.name');
                            var timebox = clone.querySelector('.time');
                            var statusbox = clone.querySelector('.status');
                            var inputs = clone.querySelectorAll('[name=meetid]');

                            namebox.innerHTML = name;
                            timebox.innerHTML = time;
                            statusbox.innerHTML = status;
                            [].forEach.call(inputs, function(input) {
                                input.value = meetingID;
                            });

                            mainBox.prepend(clone);

                        }
                    }
                }
            }
        }
    }
}
function is_object(x)
{
    return typeof x === 'object' && !Array.isArray(x) && x !== null;
}
</script>

</div>
<?php
}
}


function dido_delete_meeting($id)
{
    $json = file_get_contents(Dido_meeting_conf);
    $data = json_decode($json,true);

    if( is_array($data) AND isset( $data['meeting'] ) AND is_array($data['meeting']) AND isset( $data['meeting'][$id] ) )
    {
        unset( $data['meeting'][$id] );
        $json_data = json_encode( $data );
        $update = file_put_contents( Dido_meeting_conf , $json_data );
        if( $update )
        {
            ?>
            <style>
                .buttonarea {padding:100px 20px;}
                .buttonarea a {display:block;width:auto;height:45px;line-height:45px;background:green;color:#fff;padding:0 35px;border-radius:5px;text-align:center;font-weight:900;}
            </style>
            <div class="buttonarea">
                <a href="<?php echo admin_url('admin.php?page=meeting') ?>">تم التحديث بنجاح اضغط للعودة للفحة السابقة</a>
            </div>
            <?php
        }

    }
}

function dido_edit_meeting($id,$action)
{

    $json = file_get_contents(Dido_meeting_conf);
    $data = json_decode($json,true);

    if( is_array($data) AND isset( $data['meeting'] ) AND is_array($data['meeting']) AND isset( $data['meeting'][$id] ) )
    {
        $data['meeting'][$id]['status'] = $action;

        $json_data = json_encode( $data );

        $update = file_put_contents( Dido_meeting_conf , $json_data );
        if( $update )
        {
            ?>
            <style>
                .buttonarea {padding:100px 20px;}
                .buttonarea a {display:block;width:auto;height:45px;line-height:45px;background:green;color:#fff;padding:0 35px;border-radius:5px;text-align:center;font-weight:900;}
            </style>
            <div class="buttonarea">
                <a href="<?php echo admin_url('admin.php?page=meeting') ?>">تم التحديث بنجاح اضغط للعودة للفحة السابقة</a>
            </div>
            <?php
        }

    }

}



function dido_start_meeting( $id )
{
    $json = file_get_contents(Dido_meeting_conf);
    $data = json_decode($json,true);

    $roomID = uniqid();

    if( is_array($data) AND isset( $data['meeting'] ) AND is_array($data['meeting']) AND isset( $data['meeting'][$id] ) )
    {
        $data['meeting'][$id]['roomID'] = $roomID;
        $data['meeting'][$id]['status'] = 'onmeeting';

        $json_data = json_encode( $data );

        $update = file_put_contents( Dido_meeting_conf , $json_data );
        if( $update )
        {
            ?>
            <style>
                .buttonarea {padding:20px;}
            </style>
            <div class="buttonarea">
            <form action="<?php echo admin_url('admin.php?page=meeting') ?>" method="POST">
            <input type=hidden name=meetid value="<?php echo $id; ?>">
            <input type="submit" class="button action" name="finish" value="تم الانتهاء من المقابلة">
            </form>
            </div>
            <div id="mymeeting"></div>
            <script src='https://meet.jit.si/external_api.js'></script>
            <script>
            const domain = 'meet.jit.si';
            const options = {
                roomName: 'newaqar-<?php echo $roomID; ?>',
                width: 900,
                height: 600,
                parentNode: document.querySelector('#mymeeting'),
                lang: 'ar'
            };
            const api = new JitsiMeetExternalAPI(domain, options);
            </script>
            <?php
        }
    }
}









function Dido_price_calc() {
?>
<div id="wrap">

<h1 class="wp-heading-inline"> Price change tool </h1>

<div class="tablenav top">

    <div class="alignleft actions bulkactions">
        <form action="<?php echo admin_url('admin.php?page=price-calculator') ?>" method="POST">
            <label for="bulk-action-price" class="screen-reader-text">Select catrgory</label>
            <select name="category" id="bulk-action-price">
                <?php $tour_categories = []; ?>
                <?php if( !empty($tour_categories) ): ?>
                <?php foreach ($tour_categories as $key => $category): ?>
                    <option value="<?php echo $key ?>"><?php echo $category ?></option>
                <?php endforeach; ?>
                <?php endif; ?>
            </select>
            <input type="submit" class="button action" value="Apply">
        </form>
    </div>
    <br class="clear">

</div>

    <?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    if( isset( $_POST['category'] ) AND is_numeric( $_POST['category'] ) )
    {

        packages_tabel($_POST['category']);

    }

    elseif( isset( $_POST['post'] ) AND isset( $_POST['increasep'] ) AND is_numeric( $_POST['increasep'] ) AND isset( $_POST['letschangeit'] ) )
    {

        Dido_do_edit_prices( $_POST['post'], $_POST['increasep'] );

    }

    elseif( isset( $_POST['post'] ) AND isset( $_POST['increasep'] ) AND is_numeric( $_POST['increasep'] ) )
    {

        Dido_edit_prices( $_POST['post'], $_POST['increasep'] );

    }
    

}

    ?>
</div>
<?php
}







function packages_tabel($cat_ID)
{
    echo '<form action="'.admin_url("admin.php?page=price-calculator").'" method="POST">';
    echo '<table class="wp-list-table widefat fixed striped table-view-list posts"><thead><tr>
    <td id="cb" class="manage-column column-cb check-column"><label class="screen-reader-text" for="cb-select-all-1">Select All</label><input id="cb-select-all-1" type="checkbox"></td>
    <td>Name</td><td>Price</td><td>Price before discount</td><td>Price last update</td></tr></thead><tbody>';
    $packages = new WP_Query([
        'posts_per_page' => -1,
        'post_type' => 'package',
        'post_status' => 'publish',
        'tax_query' => [['taxonomy'  => 'tourcategory','field' => 'term_id','terms' => intval( $cat_ID ),]]
    ]);
    while ( $packages->have_posts() ) : $packages->the_post();
    $id = get_the_ID();
    $price = carbon_get_post_meta( $id , 'crb_price' );
    $price_bd = carbon_get_post_meta( $id , 'crb_price_bd' );
    $lastupdate = carbon_get_post_meta( $id , 'lastpriceupdate', false );
    echo '<tr>
    <th scope="row" class="check-column"><input id="cb-select-'.$id.'" type="checkbox" name="post[]" value="'.$id.'"></th>
    <td>'.wp_trim_words(
        get_the_title($id ),
        12,
        '...'
    ).'</td>
    <td>'.$price.'</td>
    <td>'.$price_bd.'</td>
    <td>'.$lastupdate.'</td>
    </tr>';
    endwhile;
    echo '</tbody></table>';

    ?>
    <div class="tablenav bottom">
    <div class="alignleft actions bulkactions">
    <label for="increasep">percentage increase</label>
    <input id="increasep" type="text" name="increasep">
    <input type="submit" class="button action" value="Apply">
    </div>
    <br class="clear">
    </div>
    </form>
    <?php
}


function Dido_edit_prices( $posts, $increasep )
{

    echo '<form action="'.admin_url("admin.php?page=price-calculator").'" method="POST">';
    echo '<input type=hidden name="letschangeit" value="ok">';
    echo '<input type=hidden name="increasep" value="'.$increasep.'">';
    echo '<table class="wp-list-table widefat fixed striped table-view-list posts"><thead><tr>
    <td id="cb" class="manage-column column-cb check-column"><label class="screen-reader-text" for="cb-select-all-1">Select All</label><input id="cb-select-all-1" type="checkbox"></td>
    <td>Name</td><td>Price</td> <td>New Price</td> <td>Price before discount</td> <td>New Price before discount</td></tr></thead><tbody>';
    $packages = new WP_Query([
        'posts_per_page' => -1,
        'post_type' => 'package',
        'post_status' => 'publish',
        'post__in' => $posts
    ]);
    while ( $packages->have_posts() ) : $packages->the_post();
    $id = get_the_ID();
    $price = carbon_get_post_meta( $id , 'crb_price' );
    $price_bd = carbon_get_post_meta( $id , 'crb_price_bd' );

    $new_price = ceil( ( intval($price) * intval( intval($increasep) + 100 ) ) / 100 );
    $new_price_bd =  ceil( ( intval($price_bd) * intval( intval($increasep) + 100 ) ) / 100 );

    echo '<tr>
    <th scope="row" class="check-column"><input id="cb-select-'.$id.'" type="checkbox" name="post[]" value="'.$id.'"></th>
    <td>'.wp_trim_words(
        get_the_title($id ),
        12,
        '...'
    ).'</td>
    <td>'.$price.'</td>
    <td><span style="color:green">'. $new_price .'</span></td>
    <td>'.$price_bd.'</td>
    <td><span style="color:green">'. $new_price_bd .'</span></td>
    </tr>';
    endwhile;
    echo '</tbody></table>';

    ?>
    <div class="tablenav bottom">
    <div class="alignleft actions bulkactions">
    <input type="submit" class="button action" value="Yes, update prices now">
    </div>
    <br class="clear">
    </div>
    </form>
    <?php

}


function Dido_do_edit_prices( $posts, $increasep )
{

    if( is_array($posts) AND is_numeric($increasep) )
    {

        echo '<table class="wp-list-table widefat fixed striped table-view-list posts"><thead><tr>
        <td>Name</td><td>Price</td> <td>Price before discount</td> <td>Price last update</td> </tr></thead><tbody>';

        foreach ($posts as $postID) {

            $price = carbon_get_post_meta( $postID , 'crb_price' );
            $price_bd = carbon_get_post_meta( $postID , 'crb_price_bd' );

            $new_price = ceil( ( intval($price) * intval( intval($increasep) + 100 ) ) / 100 );
            $new_price_bd =  ceil( ( intval($price_bd) * intval( intval($increasep) + 100 ) ) / 100 );

            update_post_meta( $postID, '_crb_price', $new_price );
            update_post_meta( $postID, '_crb_price_bd', $new_price_bd );
            update_post_meta( $postID, '_lastpriceupdate', date("Y-m-d") );

            echo '<tr>
            <td>'.wp_trim_words(get_the_title($postID ),12,'...').'</td>
            <td><span style="color:green">'. $new_price .'</span></td>
            <td><span style="color:green">'. $new_price_bd .'</span></td>
            <td>'.date("Y-m-d").'</td>
            </tr>';

        }
        
        echo '</tbody></table>';

    }

}