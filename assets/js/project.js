const Gimages = document.querySelectorAll('.fancybox');Gimages.forEach(el => el.addEventListener('click', event => {    const lightboxdiv = document.createElement("div");    lightboxdiv.id = "ImageLightBox";    lightboxdiv.classList.add("imageLightBox");    const lightboxside = document.createElement("div");    lightboxside.classList.add("imageLightBoxside");    const lightboxmain= document.createElement("div");    lightboxmain.classList.add("imageLightBoxmain");    const lightboxclose= document.createElement("div");    lightboxclose.classList.add("imageLightBoxclose");    lightboxclose.id = "closeImageLightBox";    lightboxclose.innerHTML = "×";    lightboxdiv.appendChild(lightboxside);    lightboxdiv.appendChild(lightboxmain);    lightboxdiv.appendChild(lightboxclose);    if( typeof GalleryImages !== "undefined"  )    {        for (let i = 0; i < GalleryImages.length; i++) {            var imgsrc = GalleryImages[i];            const lightboximg= document.createElement("img");            lightboximg.classList.add("GLBsideimage");            lightboximg.src = imgsrc;            lightboxside.appendChild(lightboximg);        }        const lightboxmainimg= document.createElement("img");        lightboxmainimg.classList.add("mainimage");        lightboxmainimg.src = GalleryImages[0];        lightboxmainimg.id = "GLBmainimage";        lightboxmain.appendChild(lightboxmainimg);    }    document.body.appendChild(lightboxdiv);}));document.addEventListener("click", function(e){const GLBsideimage = e.target.closest(".GLBsideimage");if(GLBsideimage){    var imgsrc = GLBsideimage.src;    document.getElementById("GLBmainimage").src = imgsrc;}const closeImageLightBox = e.target.closest("#closeImageLightBox"); if(closeImageLightBox){ document.getElementById("ImageLightBox").remove(); }});// project_map_buttondocument.addEventListener("click", function(e){    const project_map_button = e.target.closest(".project_map_button");    if(project_map_button){        let html = document.getElementById("project_map_box").innerHTML;        document.getElementById("project_map_container").innerHTML = html;    }});/* Post Content Accordion*/$(function() {    $('.lwptoc_header').click(function(j) {            var dropDown = $(this).closest('.lwptoc').find('.lwptoc_items');      $(this).closest('.acc').find('.lwptoc_items').not(dropDown).slideUp();            if ($(this).hasClass('active')) {        $(this).removeClass('active');      } else {        $(this).closest('.acc').find('.lwptoc_header.active').removeClass('active');        $(this).addClass('active');      }            dropDown.stop(false, true).slideToggle();      j.preventDefault();    });  });    /* Faq Accordion  $(function() {    $('.acc__title').click(function(j) {            var dropDown = $(this).closest('.acc__card').find('.acc__panel');      $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();            if ($(this).hasClass('active')) {        $(this).removeClass('active');      } else {        $(this).closest('.acc').find('.acc__title.active').removeClass('active');        $(this).addClass('active');      }            dropDown.stop(false, true).slideToggle();      j.preventDefault();    });  });*///search filter dropdownif ( document.querySelector(".acc__title") ) {    var buttons = document.querySelectorAll(".acc__title");    buttons.forEach(button => button.addEventListener('click', ()=>{         let options_div = button.parentElement.querySelector(".acc__panel");        dd_resetAlllinksElse(options_div);        button.classList.toggle("active");        if (button.classList.contains("active")) { options_div.style.display = "block";}         else {options_div.style.display = "none";}    }));}function dd_resetAlllinksElse(thisdiv){    var buttons = document.querySelectorAll(".acc__title");    var options = document.querySelectorAll(".acc__panel");    buttons.forEach((button)=>{ !thisdiv.contains(button) ? button.classList.remove("active") : null;});    options.forEach((option)=>{ !thisdiv.contains(option) ? option.style.display = "none" : null;});}// roi if ( document.querySelector("#roi-space") && typeof project_roi !== 'undefined' && typeof project_price !== 'undefined' ) {  set_roi(project_roi,project_price);  document.querySelector("#roi-space").addEventListener('input', function (evt) {    set_roi(project_roi,project_price);  });}function get_roi_space(){  var space = document.getElementById("roi-space").value;  if( isNaN(space) ){ return 0; }  else { return space; }}function set_roi(roi,price){    var space = get_roi_space();  var annual_roi = parseInt(space) * parseInt(price) * ( parseInt(roi) / 100 );  var monthly_roi = annual_roi / 12;  document.getElementById("roi-annual").innerText = annual_roi.toFixed();  document.getElementById("roi-monthly").innerText = monthly_roi.toFixed();}