<?php 

// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }
class dd_schedule 
{

    /* ---------------------------------------------------------------
    #  __construct() {
    --------------------------------------------------------------- */
    function __construct() {

        add_action( 'wp', [$this,'setup_schedule_daily'] );
        add_action( 'dido_daily_event', [$this,'dido_do_daily_event'] );

    }


    /* ---------------------------------------------------------------
    # setup_schedule_daily
    --------------------------------------------------------------- */
    function setup_schedule_daily()
    {
        if ( ! wp_next_scheduled( 'dido_daily_event' ) ) {
            wp_schedule_event( time(), 'daily', 'dido_daily_event');
        }
    }

    /* ---------------------------------------------------------------
    # dido_do_daily_event
    --------------------------------------------------------------- */
    function dido_do_daily_event() {
        $this->dido_update_currency();

    }

    /* ---------------------------------------------------------------
    # dido_update_currency
    --------------------------------------------------------------- */
    function dido_update_currency() {
        
        $file = ROOT_DIR."/storage/data/currency.json";

        $array['method'] = 'GET';
        $array['headers'] = ['Content-type: application/x-www-form-urlencoded'];
        $exdata = wp_remote_post( 'http://api.currencylayer.com/live?access_key=b6a6bfd43b8f64c557d803a9021ed107', $array);
        if( $exdata['response']['code'] == 200 ){
            $data = json_decode($exdata['body']);
            if( isset( $data->quotes ) )
            {
                file_put_contents($file, json_encode($data->quotes) );
            }
        }

    }

}

new dd_schedule();