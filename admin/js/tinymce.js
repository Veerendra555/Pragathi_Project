"use strict";
var KTTinymce = {
    init: function () {
        tinymce.init({
            selector: "#kt-tinymce-1", toolbar: !1, statusbar: !1
        }
        ),
           
            tinymce.init({
                selector: "#CphBody_txtWordDescription"
            }
            ),
            tinymce.init({
                selector: "#CphBody_txtPhaseDescription"
            }
            ),

            tinymce.init({
                selector: "#cphBody_txtAboutPosition"
            }
            ),

            tinymce.init({
                selector: "#cphBody_txtAboutCompany"
            }
            ),
            tinymce.init({
                selector: "#cphBody_txtResponsibility"
            }
            ),
            tinymce.init({
                selector: "#cphBody_txtLookFor"
            }
            ),
            tinymce.init({
                selector: "#cphBody_txtGaianNews"
            }
            ),


            //tinymce.init({
            //    selector: "#cphBody_txtAboutCompany, #cphBody_txtAboutPosition, #cphBody_txtLookFor, #cphBody_txtPostDescription, ", toolbar: "advlist | autolink | link image | lists charmap | print preview", plugins: "advlist autolink link image lists charmap print preview"
            //}
            //),
            //tinymce.init({
            //    selector: "#cphBody_txtAboutCompany", toolbar: "advlist | autolink | link image | lists charmap | print preview", plugins: "advlist autolink link image lists charmap print preview"
            //}
            //),
            //tinymce.init({
            //    selector: "#cphBody_txtAboutPosition", toolbar: "advlist | autolink | link image | lists charmap | print preview", plugins: "advlist autolink link image lists charmap print preview"
            //}
            //),
            //tinymce.init({
            //    selector: "#cphBody_txtLookFor", toolbar: "advlist | autolink | link image | lists charmap | print preview", plugins: "advlist autolink link image lists charmap print preview"
            //}
            //),
            //tinymce.init({
            //    selector: "#cphBody_txtPostDescription", toolbar: "advlist | autolink | link image | lists charmap | print preview", plugins: "advlist autolink link image lists charmap print preview"
            //}
            //),
            tinymce.init({ 
                selector: "#kt-tinymce-3", toolbar: "advlist | autolink | link image | lists charmap | print preview", plugins: "advlist autolink link image lists charmap print preview"
            }
            ),
            tinymce.init({
                selector: "#kt-tinymce-4", menubar: !1, toolbar: ["styleselect fontselect fontsizeselect", "undo redo | cut copy paste | bold italic | link image | alignleft aligncenter alignright alignjustify", "bullist numlist | outdent indent | blockquote subscript superscript | advlist | autolink | lists charmap | print preview |  code"], plugins: "advlist autolink link image lists charmap print preview code"
            }
            )
    }
}

    ;
jQuery(document).ready(function () {
    KTTinymce.init()
}

);