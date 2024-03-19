<?php

// files are not executed directly
if ( ! defined( 'ABSPATH' ) ) {	die( 'Invalid request.' ); }

// NameSpaces
use PostTypes\PostType;
use PostTypes\Taxonomy;
use Carbon_Fields\Carbon_Fields;
use Carbon_Fields\Container;
use Carbon_Fields\Field;



class DidoSiteData
{

  /* ---------------------------------------------------------------
  # construct
  --------------------------------------------------------------- */
  function __construct() {

    // Post Types
    $this->doPostTypes();

    // Post Types Taxonomies
    $this->doTaxonomies();

    // Boot
    Carbon_Fields::boot();

    // Settings
    $this->doSettings();

    // MetaBoxs
    $this->doMetaBoxs();

    // UserMeta
    $this->doUserMeta();

    // Home Meta
    $this->dohomePageMeta();

    // For Yoast
    add_action( 'after_setup_theme', [$this,'carbon_yoast'] );
    add_action( 'admin_enqueue_scripts', [$this,'carbon_scripts'] );

  }

  /* ---------------------------------------------------------------
  # postTypes
  --------------------------------------------------------------- */
  function postTypes()
  {

    // simple options
    $projects_options = [
      'menu_position' => 2,
      'supports' => ['title', 'editor', 'thumbnail','author','excerpt','comments','revisions'],
      'rewrite' => ['with_front' => false, 'slug' => '%city_slug%', ] 
    ];

    $simple_options = [
      'menu_position' => 2,
      'supports' => ['title', 'editor', 'thumbnail','author','excerpt','comments','revisions'],
      'rewrite' => ['with_front' => false ] 
    ];

    // Post Types
    return [
      [
        'options' => $projects_options,
        'data' => ['name' => 'projects','singular' => __('project','dido'),'plural' => __('projects','dido')],
        'icon' => 'dashicons-location-alt',
      ],




    ];

  }


  /* ---------------------------------------------------------------
  # Taxonomies
  --------------------------------------------------------------- */
  function Taxonomies()
  {

    // Taxonomies
    return [
      [
        'data' => ['name' => 'city','singular' => __('city'),'plural' => __('cities'),'slug' => 'city'],
        'options' => [ 'rewrite' => ['slug' => 'city', 'with_front' => false] ],
        'posttype' => 'projects',
      ],
      [
        'data' => ['name' => 'developer','singular' => __('developer'),'plural' => __('developers'),'slug' => 'developer'],
        'options' => [ 'rewrite' => ['slug' => 'developer', 'with_front' => false] ],
        'posttype' => 'projects',
      ],
      [
        'data' => ['name' => 'type','singular' => __('type'),'plural' => __('types')],
        'options' => [ 'rewrite' => ['slug' => 'type', 'with_front' => false] ],
        'posttype' => 'projects',
      ],
      [
        'data' => ['name' => 'facility','singular' => __('facility'),'plural' => __('Facilities'),'slug' => 'facility'],
        'options' => [ 'rewrite' => ['slug' => 'facility', 'with_front' => false] ],
        'posttype' => 'projects',
      ],
      [
        'data' => ['name' => 'unit-type','singular' => __('unit-type'),'plural' => __('unit-types'),'slug' => 'unit-type'],
        'options' => [ 'rewrite' => ['slug' => 'unit-type', 'with_front' => false] ],
        'posttype' => 'projects',
      ],
      [
        'data' => ['name' => 'delivery-date','singular' => __('delivery-date'),'plural' => __('delivery-date'),'slug' => 'delivery-date'],
        'options' => [ 'rewrite' => ['slug' => 'delivery-date', 'with_front' => false] ],
        'posttype' => 'projects',
      ],
      [
        'data' => ['name' => 'videos','singular' => __('videos category'),'plural' => __('videos category'),'slug' => 'videos'],
        'options' => [ 'rewrite' => ['slug' => 'videos', 'with_front' => false] ],
        'posttype' => 'videos',
      ],

      [
        'data' => ['name' => 'category','singular' => __('category'),'plural' => __('category'),'slug' => 'category'],
        'options' => [ 'rewrite' => ['slug' => 'category', 'with_front' => false] ],
        'posttype' => 'blog',
      ],
      [
        'data' => ['name' => 'post_tag','singular' => __('post_tag'),'plural' => __('post_tag'),'slug' => 'tag'],
        'options' => [ 'rewrite' => ['slug' => 'tag', 'with_front' => false] ],
        'posttype' => 'blog',
      ],

    ];

  }


  /* ---------------------------------------------------------------
  # doMetaBoxs
  --------------------------------------------------------------- */
  function dohomePageMeta()
  {


    $cities = new WP_Term_Query(['taxonomy' => 'city','orderby' => 'name','order' => 'ASC','fields' => 'id=>name','hide_empty' => false]);
    $types = new WP_Term_Query(['taxonomy' => 'type','orderby' => 'name','order' => 'ASC','fields' => 'id=>name','hide_empty' => false]);


    return Container::make( 'post_meta', 'إعدادات الصفحة الرئيسية' )
    ->where( 'post_template', '=','page-home.php' )
    ->add_fields( array(

      // h1
      Field::make( 'text', 'dd_home_h1', __( 'h1' ) ),
      Field::make( 'text', 'dd_home_st', __( 'search text' ) ),

      // slider projects
      Field::make( 'association', 'dd_home_slider', __( 'Slider Projects' ) )->set_types([['type'=>'post','post_type'=>'projects',]])->set_max( 5 ),

      /*

      */

      Field::make( 'separator', 'crb_separator', __( 'Sections' ) ),

      Field::make( 'complex', 'dd_home_sections', __( 'Sections' ) )
      ->add_fields( array(

        Field::make( 'radio_image', 'dd_home_section_type', __( 'section Type' ) )
        ->set_options( array(
          'cities' => THEME_URL.'/assets/images/section-options/1.png',
          'city' => THEME_URL.'/assets/images/section-options/2.png',
          'contact' => THEME_URL.'/assets/images/section-options/3.png',
          'developers' => THEME_URL.'/assets/images/section-options/4.png',
          'blog' => THEME_URL.'/assets/images/section-options/5.png',
        ) ),

        Field::make( 'separator', 'dd_city_separator', __( 'Choose City' ) )->set_conditional_logic([['field' => 'dd_home_section_type','value' => 'city']]),
        Field::make( 'select', 'dd_city_id', __( 'Choose City' ) )->add_options($cities->terms)->set_conditional_logic([['field' => 'dd_home_section_type','value' => 'city']]),
        Field::make( 'multiselect', 'dd_types', __( 'Choose Types' ) )->add_options($types->terms)->set_conditional_logic([['field' => 'dd_home_section_type','value' => 'city']]),

        Field::make( 'separator', 'dd_blog_separator', __( 'Blog text' ) )->set_conditional_logic([['field' => 'dd_home_section_type','value' => 'blog']]),
        Field::make( 'textarea', 'dd_blog_text', __( 'Blog text' ) )->set_conditional_logic([['field' => 'dd_home_section_type','value' => 'blog']]),


      ) ),

      





    ) );

  }


  /* ---------------------------------------------------------------
  # settings
  --------------------------------------------------------------- */
  function settings()
  {

    // settings
    return [
      'id' => 'theme_options',
      'title' => 'dido Settings',
      'icon' => 'dashicons-carrot',

      'fields' => [
        ['text','dido_address_ar','Address_ar'],
        ['text','dido_address_en','Address_en'],
        ['text','dido_phone','Phone Number'],
        ['text','dido_whatsapp','Whatsapp'],
        ['text','dido_email','Email'],
        ['textarea','dido_about_ar','about_ar'],
        ['textarea','dido_about_en','about_en'],
      ],

      'pages' => [
        [
          'id' => 'theme_options',
          'title' => 'Site Settings',
          'page-url' => 'dido-site-options',
          'tabs' => [
            [
              'title' => 'Social Links',
              'fields' => [
                ['text','dido_facebook_link','Facebook Link'],
                ['text','dido_twitter_link','Twitter Link'],
                ['text','dido_youtube_link','YouTube Link'],
                ['text','dido_instagram_link','Instagram Link'],
              ]
            ],
            [
              'title' => 'Pages',
              'fields' => [
                ['select','dido_page_blog','Blog page',Template::pagesList()],
                ['select','dido_page_projects','Projects page',Template::pagesList()],
                ['select','dido_page_thankyou','Thank-you page',Template::pagesList()],
                ['select','dido_page_cities','Cities page',Template::pagesList()],
                ['select','dido_page_developers','Developers page',Template::pagesList()],
                ['select','dido_page_videos','videos page',Template::pagesList()],
              ]
            ]
          ]
        ],
        [
          'id' => 'theme_options',
          'title' => 'Header & Footer Scripts',
          'page-url' => 'dido-scripts-options',
          'tabs' => [
            [
              'title' => 'Header & Footer Scripts',
              'fields' => [
                ['header_scripts','dido_header_scripts','header scripts'],
                ['footer_scripts','dido_footer_scripts','footer scripts'],
              ]
            ]
          ]
        ],
        [
          'id' => 'theme_options',
          'title' => 'search page settings',
          'page-url' => 'search-options',
          'tabs' => [
            [
              'title' => 'search page settings',
              'fields' => [
                ['image','dido_search_bg','search page Background'],
              ]
            ]
          ]
        ],
      ]
    ];

  }

  /* ---------------------------------------------------------------
  # settings
  --------------------------------------------------------------- */
  function MetaBoxs()
  {

    // MetaBoxs
    return [

      /* ------------------------------------------------------------
      // projects MetaBoxs
      ------------------------------------------------------------ */

      [
        'type' => 'post_meta',
        'title' => 'Project Settings',
        'where' => ['dataType' => 'post_type','condation' => 'IN','value' => ['projects']],
        'tabs' => [
          [
            'title' => 'Project Details',
            'fields' => [
              ['html','dido_title_0965224','','<h2>مشروع مميز</h2>'],
              ['checkbox','dido_featured','مميز'],
              ['html','dido_title_0009124','','<h2>بيانات المشروع</h2>'],
              ['text','dido_price','السعر يبدأ من (رقم فقط بدون فوصل او كلمات)'],
              ['text','dido_space','المساحات تبدأ من'],
              ['text','dido_down_payment','المقدم'],
              ['text','dido_installment','تقسيط على'],
              ['text','dido_finishing','نوع التشطيب'],
              ['text','dido_location','موقع المشروع'],

              ['html','dido_title_096roi224','','<h2>ROI</h2>'],
              ['text','dido_roi','ROI'],
            ]
          ],
          [
            'title' => 'Map',
            'fields' => [
              ['textarea','dido_map_code','Map Code'],
            ]
          ],
          [
            'title' => 'Media AND Gallery',
            'fields' => [
              ['image','dido_outline','مخطط المشروع'],
              ['media_gallery','dido_media_gallery','Images Gallery'],
            ]
          ],
          [
            'title' => 'FAQ',
            'fields' => [
              ['complex','dido_faq','FAQ','fields' =>
                [
                  ['text','dido_faq_title','Question'],
                  ['textarea','dido_faq_description','Answer'],
                ]
              ],
            ]
          ],
        ]
      ],



      /* ------------------------------------------------------------
      // videos MetaBoxs
      ------------------------------------------------------------ */

      [
        'type' => 'post_meta',
        'title' => 'videos Settings',
        'where' => ['dataType' => 'post_type','condation' => 'IN','value' => ['videos']],
        'tabs' => [
          [
            'title' => 'video Details',
            'fields' => [
              ['html','dido_title_0965224','','<h2>Youtube Url</h2>'],
              ['text','dido_yt_url','Youtube Url'],
            ]
          ],
        ]
      ],



      /* ------------------------------------------------------------
      // Post MetaBoxs
      ------------------------------------------------------------ */

      [
        'type' => 'post_meta',
        'title' => 'Post Settings',
        'where' => ['dataType' => 'post_type','condation' => 'IN','value' => ['post']],
        'tabs' => [
          [
            'title' => 'FAQ',
            'fields' => [
              ['complex','dido_faq','FAQ','fields' =>
                [
                  ['text','dido_faq_title','Question'],
                  ['text','dido_faq_description','Answer'],
                ]
              ],
            ]
          ],
        ]
      ],


      /* ------------------------------------------------------------
      // city MetaBoxs
      ------------------------------------------------------------ */
      [
        'type' => 'term_meta',
        'title' => 'City Settings',
        'where' => ['dataType' => 'term_taxonomy','condation' => '=','value' => 'city'],
        'tabs' => [
          [
            'title' => 'City Settings',
            'fields' => [
              ['image','dido_city_cover','Cover Image'],
            ]
          ],
        ]
      ],

      /* ------------------------------------------------------------
      // developer MetaBoxs
      ------------------------------------------------------------ */
      [
        'type' => 'term_meta',
        'title' => 'City Settings',
        'where' => ['dataType' => 'term_taxonomy','condation' => '=','value' => 'developer'],
        'tabs' => [
          [
            'title' => 'developer Settings',
            'fields' => [
              ['image','dido_dev_logo','developer logo'],
              ['textarea','dido_dev_summary','developer summary'],
            ]
          ],
        ]
      ],

      /* ------------------------------------------------------------
      // facility MetaBoxs
      ------------------------------------------------------------ */
      [
        'type' => 'term_meta',
        'title' => 'City Settings',
        'where' => ['dataType' => 'term_taxonomy','condation' => '=','value' => 'facility'],
        'tabs' => [
          [
            'title' => 'facility Settings',
            'fields' => [
              ['textarea','dido_facility','facility svg code'],
            ]
          ],
        ]
      ],


      /* ------------------------------------------------------------
      // facility MetaBoxs
      ------------------------------------------------------------ */
      [
        'type' => 'term_meta',
        'title' => 'City Settings',
        'where' => ['dataType' => 'term_taxonomy','condation' => '=','value' => 'type'],
        'tabs' => [
          [
            'title' => 'type Settings',
            'fields' => [
              ['textarea','dido_type','type svg code'],
            ]
          ],
        ]
      ],


    ];

  }

  /*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*
  # Factory
  *-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*-_.-*/








  /* ---------------------------------------------------------------
  # postTypes
  --------------------------------------------------------------- */
  function doPostTypes()
  {

    $post_types = $this->postTypes();

    // Do Post Types
    if ( is_array($post_types) AND count($post_types) > 0 ) {
      foreach ($post_types as $post_type) {
        $keys = [
          ['name' => 'data','type' => 'array'],
          ['name' => 'options','type' => 'array'],
          ['name' => 'icon','type' => 'string'],
        ];
        if ( DidoValidator::KeysRules($keys,$post_type) ) {
          $pt = new PostType( $post_type['data'],$post_type['options']  );
          $pt->icon( $post_type['icon'] );
          $pt->register();
        }
      }
    }

  }



  /* ---------------------------------------------------------------
  # doTaxonomies
  --------------------------------------------------------------- */
  function doTaxonomies()
  {

    // Taxonomies
    $taxonomies = $this->Taxonomies();

    // Do Post Types
    if ( is_array($taxonomies) AND count($taxonomies) > 0 ) {
      foreach ($taxonomies as $taxonomy) {
        $keys = [
          ['name' => 'data','type' => 'array'],
          ['name' => 'options','type' => 'array'],
          ['name' => 'posttype','type' => 'string'],
        ];
        if ( DidoValidator::KeysRules($keys,$taxonomy) ) {
          $data = isset( $taxonomy['data'] ) ? $taxonomy['data'] : [];
          $options = isset( $taxonomy['options'] ) ? $taxonomy['options'] : [];
          $txnmy = new Taxonomy($data,$options);
          $txnmy->posttype($taxonomy['posttype']);
          $txnmy->register();
        }
      }
    }

  }


  /* ---------------------------------------------------------------
  # Taxonomies
  --------------------------------------------------------------- */
  function doSettings()
  {

    $data = $this->settings();

      $keys = [
        ['name' => 'id','type' => 'string'],
        ['name' => 'title','type' => 'string'],
        ['name' => 'icon','type' => 'string'],
        ['name' => 'pages','type' => 'array'],
      ];

      if ( DidoValidator::KeysRules($keys,$data) ) {

        // Container
        $container = Container::make($data['id'],$data['title']);

        if ( method_exists('Container','set_page_file') ) {
          $container->set_page_file($data['id']);
        }
        if ( method_exists('Container','set_icon') ) {
          $container->set_icon($data['icon']);
        }


        if( isset($data['fields']) )
        {
          $fields_array = [];
          foreach ($data['fields'] as $field) {
            $fields_array[] = $this->settingsSetField(...$field);
          }
          $container->add_fields($fields_array);
        }

        // Home Tabs
        if ( isset($data['tabs']) AND is_array($data['tabs']) ) {
          foreach ($data['tabs'] as $tab) {
            $tab_keys = [
              ['name' => 'title','type' => 'string'],
              ['name' => 'fields','type' => 'array'],
            ];
            if ( DidoValidator::KeysRules($tab_keys,$tab) ) {
              $fields_array = [];
              foreach ($tab['fields'] as $field) {
                $fields_array[] = $this->settingsSetField(...$field);
              }
              $container->add_tab($tab['title'],$fields_array);
            }
          }
        }

        // Pages
        foreach ($data['pages'] as $page) {

          $page_keys = [
            ['name' => 'id','type' => 'string'],
            ['name' => 'title','type' => 'string'],
            ['name' => 'page-url','type' => 'string'],
            ['name' => 'tabs','type' => 'array'],
          ];

          if ( DidoValidator::KeysRules($page_keys,$page) ) {

            $page_container = Container::make($page['id'],$page['title'])->set_page_file($page['page-url'])->set_page_parent($container);

            // Tabs
            foreach ($page['tabs'] as $tab) {

              $tab_keys = [
                ['name' => 'title','type' => 'string'],
                ['name' => 'fields','type' => 'array'],
              ];

              if ( DidoValidator::KeysRules($tab_keys,$tab) ) {

                $fields_array = [];
                foreach ($tab['fields'] as $field) {
                  $fields_array[] = $this->settingsSetField(...$field);
                }

                $page_container->add_tab($tab['title'],$fields_array);

              }

            }

          }

        }

        return $container;

      }

  }



  /* ---------------------------------------------------------------
  # doMetaBoxs
  --------------------------------------------------------------- */
  function doMetaBoxs()
  {

    $MetaBoxs = $this->MetaBoxs();

    if ( is_array($MetaBoxs) ) {
      foreach ($MetaBoxs as $MetaBox) {

        $keys = [
          ['name' => 'type','type' => 'string'],
          ['name' => 'title','type' => 'string'],
          ['name' => 'where','type' => 'array'],
          ['name' => 'tab','type' => 'array'],
        ];

        // 'where' => ['dataType' => 'post_type','condation' => 'IN','value' => ['projects']],

        if ( DidoValidator::KeysRules($keys,$MetaBox) ) {

          // Container
          $container = Container::make($MetaBox['type'],$MetaBox['title']);

          if ( $MetaBox['where'] ) {
            $container->where( $MetaBox['where']['dataType'], $MetaBox['where']['condation'], $MetaBox['where']['value'] );
          }

          // Home Tabs
          if ( isset($MetaBox['tabs']) AND is_array($MetaBox['tabs']) ) {
            foreach ($MetaBox['tabs'] as $tab) {
              $tab_keys = [
                ['name' => 'title','type' => 'string'],
                ['name' => 'fields','type' => 'array'],
              ];
              if ( DidoValidator::KeysRules($tab_keys,$tab) ) {
                $fields_array = [];
                foreach ($tab['fields'] as $field) {
                  $fields_array[] = $this->settingsSetField(...$field);
                }
                $container->add_tab($tab['title'],$fields_array);
              }
            }
          }

          $container;

        }


      }
    }

  }








  /* ---------------------------------------------------------------
  # doMetaBoxs
  --------------------------------------------------------------- */
  function doUserMeta()
  {

    return Container::make( 'user_meta', 'بيانات المستخدم' )
    ->add_fields( array(

        Field::make( 'text', 'dd_usr_fb', 'facebook account' ),
        Field::make( 'text', 'dd_usr_insta', 'insta account' ),
        Field::make( 'text', 'dd_usr_linked', 'linkedin account' ),
        Field::make( 'image', 'dd_usr_img', __( 'photo' ) ),











    ) );

  }








  /* -------------------------------------------------------------------
  # Field
  ------------------------------------------------------------------- */
  function settingsSetField($type,$id,$name,$options = [],$fields = [])
  {

    // allowed Types
    $allowedTypes = ['text','textarea','rich_text','select','html','image','footer_scripts','header_scripts','media_gallery','complex','multiselect','checkbox','radio_image'];

    // options
    $options_types = ['select','multiselect'];


    if ( in_array($type,$allowedTypes) ) {

      // Make Field
      $Field = Field::make($type,$id,$name);

      // If options
      if ( in_array($type,$options_types) AND is_array($options) ) {
        $Field->add_options($options);
      }

      //
      if ( $type == 'radio_image' ) {
        $Field->set_options($options);
      }

      // If HTML
      if ( $type == "html" ) {
        $Field->set_html($options);
      }

      // IF complex
      if ( $type == 'complex' AND isset( $fields ) ) {
        $complex_fields = [];
        foreach ($fields as $complex_field) {
          $complex_fields[] = $this->settingsSetField(...$complex_field);
        }
        $Field->add_fields($complex_fields);
      }

      // Return
      return $Field;

    }

  }


  /* -------------------------------------------------------------------
  # carbon_yoast
  ------------------------------------------------------------------- */
  function carbon_yoast() {
  	new \Carbon_Fields_Yoast\Carbon_Fields_Yoast;
  }

  /* -------------------------------------------------------------------
  # carbon_scripts
  ------------------------------------------------------------------- */
  function carbon_scripts() {
  	wp_enqueue_script( 'crb-admin', get_stylesheet_directory_uri() . '/assets/js/carbon-fields-yoast.js', array( 'carbon-fields-yoast' ) );
  }

}


// Run
new DidoSiteData();
