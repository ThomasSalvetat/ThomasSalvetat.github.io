ace.define(
    'ace/theme/ayu-dark',
    ['require', 'exports', 'module', 'ace/lib/dom'],
    function (acequire, exports, module) {
        exports.isDark = false
    exports.cssClass = 'ace-ayu-dark'
    exports.cssText = '.ace-ayu-dark .ace_gutter {\
    background: #0F1419;\
    color: rgb(123,123,116)\
    }\
    \
    .ace-ayu-dark .ace_print-margin {\
    width: 1px;\
    background: #e8e8e8\
    }\
    \
    .ace-ayu-dark {\
    background-color: #0F1419;\
    color: #E6E1CF\
    }\
    \
    .ace-ayu-dark .ace_cursor {\
    color: #F29718\
    }\
    \
    .ace-ayu-dark .ace_marker-layer .ace_selection {\
    background: #253340\
    }\
    \
    .ace-ayu-dark.ace_multiselect .ace_selection.ace_start {\
    box-shadow: 0 0 3px 0px #0F1419;\
    border-radius: 2px\
    }\
    \
    .ace-ayu-dark .ace_marker-layer .ace_step {\
    background: rgb(198, 219, 174)\
    }\
    \
    .ace-ayu-dark .ace_marker-layer .ace_bracket {\
    margin: -1px 0 0 -1px;\
    border: 1px solid #FF0000\
    }\
    \
    .ace-ayu-dark .ace_marker-layer .ace_active-line {\
    background: #151A1F\
    }\
    \
    .ace-ayu-dark .ace_gutter-active-line {\
    background-color: #151A1F\
    }\
    \
    .ace-ayu-dark .ace_marker-layer .ace_selected-word {\
    border: 1px solid #253340\
    }\
    \
    .ace-ayu-dark .ace_fold {\
    background-color: #FFB454;\
    border-color: #E6E1CF\
    }\
    \
    .ace-ayu-dark .ace_keyword.ace_operator {\
    color: #F29668\
    }\
    \
    .ace-ayu-dark .ace_constant.ace_language {\
    color: #FFEE99;\
    }\
    \
    .ace-ayu-dark .ace_constant.ace_numeric {\
    color: #FFEE99\
    }\
    \
    .ace-ayu-dark .ace_constant.ace_character {\
    color: #FFEE99\
    }\
    \
    .ace-ayu-dark .ace_constant.ace_character.ace_escape {\
    color: #95E6CB\
    }\
    \
    .ace-ayu-dark .ace_constant.ace_other {\
    color: #FFEE99\
    }\
    \
    .ace-ayu-dark .ace_support.ace_function {\
    color: #F07178\
    }\
    \
    .ace-ayu-dark .ace_support.ace_constant {\
    font-style: italic;\
    color: #F29668\
    }\
    \
    .ace-ayu-dark .ace_support.ace_class {\
    font-style: italic;\
    color: #39BAE6\
    }\
    \
    .ace-ayu-dark .ace_support.ace_type {\
    font-style: italic;\
    color: #39BAE6\
    }\
    \
    .ace-ayu-dark .ace_storage, .ace-ayu-dark .ace_keyword {\
    color: #FF7733\
    }\
    \
    .ace-ayu-dark .ace_storage.ace_type {\
    color: #FF7733\
    }\
    \
    .ace-ayu-dark .ace_invalid {\
    color: #FF3333\
    }\
    \
    .ace-ayu-dark .ace_invalid.ace_deprecated {\
    color: #FFFFFF;\
    background-color: #FF7733\
    }\
    \
    .ace-ayu-dark .ace_string {\
    color: #C2D94C\
    }\
    \
    .ace-ayu-dark .ace_string.ace_regexp {\
    color: #95E6CB\
    }\
    \
    .ace-ayu-dark .ace_comment {\
    font-style: italic;\
    color: #5C6773\
    }\
    \
    .ace-ayu-dark .ace_variable {\
    color: #ff7733\
    }\
    \
    .ace-ayu-dark .ace_variable.ace_language {\
    font-style: italic;\
    color: #39BAE6\
    }\
    \
    .ace-ayu-dark .ace_variable.ace_parameter {\
    color: #FFEE99\
    }\
    \
    .ace-ayu-dark .ace_entity.ace_other.ace_attribute-name {\
    color: #FFB454\
    }\
    \
    .ace-ayu-dark .ace_entity.ace_name.ace_function {\
    color: #FFB454;\
    }\
    \
    .ace-ayu-dark .ace_entity.ace_name.ace_tag {\
    color: #39BAE6\
    }'

    var dom = acequire('../lib/dom')
    dom.importCssString(exports.cssText, exports.cssClass)
    });
(function () {
    ace.require(["ace/theme/ayu-dark"], function (m) {
        if (typeof module == "object" && typeof exports == "object" && module) {
            module.exports = m;
        }
    });
})();
