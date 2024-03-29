ace.define(
    'ace/theme/ayu-light',
    ['require', 'exports', 'module', 'ace/lib/dom'],
    function (acequire, exports, module) {
        exports.isDark = false
        exports.cssClass = 'ace-ayu-light'
        exports.cssText = '.ace-ayu-light .ace_gutter {\
    background: #FAFAFA;\
    color: rgb(180,184,189)\
    }\
    \
    .ace-ayu-light .ace_print-margin {\
    width: 1px;\
    background: #e8e8e8\
    }\
    \
    .ace-ayu-light {\
    background-color: #FAFAFA;\
    color: #6E7580\
    }\
    \
    .ace-ayu-light .ace_cursor {\
    color: #FF6A00\
    }\
    \
    .ace-ayu-light .ace_marker-layer .ace_selection {\
    background: #F0EEE4\
    }\
    \
    .ace-ayu-light.ace_multiselect .ace_selection.ace_start {\
    box-shadow: 0 0 3px 0px #FAFAFA;\
    border-radius: 2px\
    }\
    \
    .ace-ayu-light .ace_marker-layer .ace_step {\
    background: rgb(198, 219, 174)\
    }\
    \
    .ace-ayu-light .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid #FF0000\
    }\
    \
    .ace-ayu-light .ace_marker-layer .ace_active-line {\
    background: #F2F2F2\
    }\
    \
    .ace-ayu-light .ace_gutter-active-line {\
    background-color: #F2F2F2\
    }\
    \
    .ace-ayu-light .ace_marker-layer .ace_selected-word {\
    border: 1px solid #F0EEE4\
    }\
    \
    .ace-ayu-light .ace_fold {\
    background-color: #F29718;\
    border-color: #6E7580\
    }\
    \
    .ace-ayu-light .ace_keyword.ace_operator {\
    color: #ED9366\
    }\
    \
    .ace-ayu-light .ace_constant.ace_language {\
    color: #A37ACC\
    }\
    \
    .ace-ayu-light .ace_constant.ace_numeric {\
    color: #A37ACC\
    }\
    \
    .ace-ayu-light .ace_constant.ace_character {\
    color: #A37ACC\
    }\
    \
    .ace-ayu-light .ace_constant.ace_character.ace_escape {\
    color: #4CBF99\
    }\
    \
    .ace-ayu-light .ace_constant.ace_other {\
    color: #A37ACC\
    }\
    \
    .ace-ayu-light .ace_support.ace_function {\
    color: #F07171\
    }\
    \
    .ace-ayu-light .ace_support.ace_constant {\
    font-style: italic;\
    color: #ED9366\
    }\
    \
    .ace-ayu-light .ace_support.ace_class {\
    font-style: italic;\
    color: #55B4D4\
    }\
    \
    .ace-ayu-light .ace_support.ace_type {\
    font-style: italic;\
    color: #55B4D4\
    }\
    \
    .ace-ayu-light .ace_storage {\
    color: #FA6E32\
    }\
    \
    .ace-ayu-light .ace_storage.ace_type {\
    color: #FA6E32\
    }\
    \
    .ace-ayu-light .ace_invalid {\
    color: #F51818\
    }\
    \
    .ace-ayu-light .ace_invalid.ace_deprecated {\
    color: #FFFFFF;\
    background-color: #FA6E32\
    }\
    \
    .ace-ayu-light .ace_string {\
    color: #86B300\
    }\
    \
    .ace-ayu-light .ace_string.ace_regexp {\
    color: #4CBF99\
    }\
    \
    .ace-ayu-light .ace_comment {\
    font-style: italic;\
    color: #ABB0B6\
    }\
    \
    .ace-ayu-light .ace_variable {\
    color: #6E7580\
    }\
    \
    .ace-ayu-light .ace_variable.ace_language {\
    font-style: italic;\
    color: #55B4D4\
    }\
    \
    .ace-ayu-light .ace_variable.ace_parameter {\
    color: #A37ACC\
    }\
    \
    .ace-ayu-light .ace_entity.ace_other.ace_attribute-name {\
    color: #F29718\
    }\
    \
    .ace-ayu-light .ace_entity.ace_name.ace_function {\
    color: #F29718\
    }\
    \
    .ace-ayu-light .ace_entity.ace_name.ace_tag {\
    color: #55B4D4\
    }'

        var dom = acequire('../lib/dom')
        dom.importCssString(exports.cssText, exports.cssClass)
    });
(function () {
    ace.require(["ace/theme/ayu-light"], function (m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
