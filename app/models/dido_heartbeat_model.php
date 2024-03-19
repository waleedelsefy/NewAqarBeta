<?php 

/*
// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }

add_filter( 'heartbeat_received', 'Dido_meeting_geartbeat', 10, 2 );
function Dido_meeting_geartbeat( $response, $data ) {

    if ( empty( $data['meetingclicked'] ) ) { return $response; }

    // sanitize
    $meetingclicked = $data['meetingclicked'];

    $GLOBALS['meeting'][] = $meetingclicked;

    wp_localize_script('theme-script', 'script_vars', $GLOBALS['meeting'] );
    wp_enqueue_script(theme-script);

    // optional response
    $send_data_back = true;
    if ( $send_data_back ) {

    $response['location'] = $location;
    $response['userid'] = $userID;

    }

  // send response
  return $response;
}
*/