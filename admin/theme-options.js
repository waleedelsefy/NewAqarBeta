jQuery(document).ready(function ($) {
    // Uploading files
    var file_frame;
    $('.upload_image_button').on('click', function (event) {
        event.preventDefault();
        var field_id = $(this).data('field');
        // If the media frame already exists, reopen it.
        if (file_frame) {
            file_frame.open();
            return;
        }
        // Create the media frame.
        file_frame = wp.media.frames.file_frame = wp.media({
            title: $(this).data('uploader_title'),
            button: {
                text: $(this).data('uploader_button_text'),
            },
            multiple: false, // Set to true to allow multiple files to be selected
        });
        // When an image is selected, run a callback.
        file_frame.on('select', function () {
            var attachment = file_frame.state().get('selection').first().toJSON();
            $('#' + field_id).val(attachment.url);
            $('#' + field_id + '_preview').attr('src', attachment.url);
        });
        // Finally, open the modal.
        file_frame.open();
    });
});
jQuery(document).ready(function ($) {
    $('.color-picker').wpColorPicker();
});
// لحفظ "مساحة الوحدة" في الوحدات
(function ($) {
    $(document).on('click', 'button[name="save_unit_button"]', function (e) {
        e.preventDefault();
        // جمع البيانات من حقل مساحة الوحدة
        var unitSpaceValue = $(this).closest('tr').find('input[name^="unit_details[unit_space]"]').val();
        // إنشاء البيانات التي سترسل إلى الخادم
        var data = {
            action: 'save_unit_space',
            post_id: $(this).closest('tr').attr('id').replace('post-', ''),
            unit_space: unitSpaceValue
        };
        // إرسال البيانات إلى الخادم باستخدام AJAX
        $.ajax({
            type: 'POST',
            url: ajaxurl,
            data: data,
            success: function (response) {
                console.log('تم حفظ مساحة الوحدة بنجاح.');
            },
            error: function (error) {
                console.error('حدث خطأ أثناء حفظ مساحة الوحدة.');
            }
        });
    });
})(jQuery);
// لحفظ "سعر المتر في المشروع" في المشروعات
(function ($) {
    $(document).on('click', 'button[name="save_project_button"]', function (e) {
        e.preventDefault();
        // جمع البيانات من حقل سعر المتر في المشروع
        var projectPriceValue = $(this).closest('tr').find('input[name^="project_details[project_price]"]').val();
        // إنشاء البيانات التي سترسل إلى الخادم
        var data = {
            action: 'save_project_price',
            post_id: $(this).closest('tr').attr('id').replace('post-', ''),
            project_price: projectPriceValue
        };
        // إرسال البيانات إلى الخادم باستخدام AJAX
        $.ajax({
            type: 'POST',
            url: ajaxurl,
            data: data,
            success: function (response) {
                console.log('تم حفظ سعر المتر في المشروع بنجاح.');
            },
            error: function (error) {
                console.error('حدث خطأ أثناء حفظ سعر المتر في المشروع.');
            }
        });
    });
})(jQuery);
