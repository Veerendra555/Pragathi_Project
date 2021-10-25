var KTBootstrapDatepicker = function () {
    var t;
    t = KTUtil.isRTL() ? {
        leftArrow: '<i class="la la-angle-right"></i>', rightArrow: '<i class="la la-angle-left"></i>'
    }
        : {
            leftArrow: '<i class="la la-angle-left"></i>', rightArrow: '<i class="la la-angle-right"></i>'
        }
        ;
    return {
        init: function () {
            $("#kt_datepicker_1, #kt_datepicker_1_validate").datepicker({
                rtl: KTUtil.isRTL(), todayHighlight: !0, orientation: "bottom left", templates: t
            }
            ),
                //$("#cphBody_txtpdDOB, #cphBody_txtdfmDOB1,#cphBody_txtweDateEmpFrom,#cphBody_txtweDateEmpTo,cphBody_txtpeDateEmpFrom,#cphBody_txtpeDateEmpTo, #cphBody_txtdfmDOB2, #cphBody_txtdfmDOB3, #cphBody_txtdfmDOB4, #cphBody_txtdfmDOB5, #cphBody_txtdfmDOB6, #cphBody_txtadIssueDate, #cphBody_txtadValidtill, #cphBody_txtadWeddingDate").datepicker({
                //    rtl: KTUtil.isRTL(), todayHighlight: !0, orientation: "bottom left", templates: t, language: "fr"
                //}
                //),










                $("#kt_datepicker_1_modal").datepicker({
                    rtl: KTUtil.isRTL(), todayHighlight: !0, orientation: "bottom left", templates: t
                }
                ),
                $("#kt_datepicker_2, #kt_datepicker_2_validate").datepicker({
                    rtl: KTUtil.isRTL(), todayHighlight: !0, orientation: "bottom left", templates: t
                }
                ),
                $("#kt_datepicker_2_modal").datepicker({
                    rtl: KTUtil.isRTL(), todayHighlight: !0, orientation: "bottom left", templates: t
                }
                ),
                $("#kt_datepicker_3, #kt_datepicker_3_validate").datepicker({
                    rtl: KTUtil.isRTL(), todayBtn: "linked", clearBtn: !0, todayHighlight: !0, templates: t
                }
                ),
                $("#kt_datepicker_3_modal").datepicker({
                    rtl: KTUtil.isRTL(), todayBtn: "linked", clearBtn: !0, todayHighlight: !0, templates: t
                }
                ),
                $("#kt_datepicker_4_1").datepicker({
                    rtl: KTUtil.isRTL(), orientation: "top left", todayHighlight: !0, templates: t
                }
                ),
                $("#kt_datepicker_4_2").datepicker({
                    rtl: KTUtil.isRTL(), orientation: "top right", todayHighlight: !0, templates: t
                }
                ),
                $("#kt_datepicker_4_3").datepicker({
                    rtl: KTUtil.isRTL(), orientation: "bottom left", todayHighlight: !0, templates: t
                }
                ),
                $("#kt_datepicker_4_4").datepicker({
                    rtl: KTUtil.isRTL(), orientation: "bottom right", todayHighlight: !0, templates: t
                }
                ),
                $("#kt_datepicker_5").datepicker({
                    rtl: KTUtil.isRTL(), todayHighlight: !0, templates: t
                }
                ),
                $("#kt_datepicker_6").datepicker({
                    rtl: KTUtil.isRTL(), todayHighlight: !0, templates: t
                }
                ),
                $("#kt_datepicker_7, #cphBody_txtpdDOB, #cphBody_txtPostClosingDate, #cphBody_txtweDateEmpFrom,  #cphBody_txtweDateEmpTo, #cphBody_txtpeDateEmpFrom, #cphBody_txtpeDateEmpTo, #cphBody_txtperStartDate1, #cphBody_txtperEndDate1, #cphBody_txtperStartDate2, #cphBody_txtperEndDate2, #cphBody_txtperStartDate3, #cphBody_txtperEndDate3, #cphBody_txtacaMonthYear1, #cphBody_txtacaMonthYear2, #cphBody_txtacaMonthYear3, #cphBody_txtacaMonthYear4, #cphBody_txtacaMonthYear5, #cphBody_txtdfmDOB1, #cphBody_txtdfmDOB2, #cphBody_txtdfmDOB3, #cphBody_txtdfmDOB4, #cphBody_txtdfmDOB5, #cphBody_txtdfmDOB6, #cphBody_txtadIssueDate, #cphBody_txtadValidtill, #cphBody_txtadWeddingDate, #cphBody_txtadSelectionProcessMonthYear ").datepicker({
                    rtl: KTUtil.isRTL(), todayHighlight: !0, orientation: "bottom left", templates: t, language: "en"
                }
                )
        }
    }
}



















    ();
jQuery(document).ready(function () {
    KTBootstrapDatepicker.init()
}

);