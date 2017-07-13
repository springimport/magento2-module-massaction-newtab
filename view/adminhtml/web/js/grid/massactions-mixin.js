define([
    'newTabForm',
    'mageUtils'
], function (newTabForm, utils) {
    'use strict';

    return function (target) {
        return target.extend({
            /**
             * Default action callback. Sends selections data
             * via POST request or POST form
             *
             * @param {Object} action - Action data.
             * @param {Object} data - Selections data.
             */
            defaultCallback: function (action, data) {
                var itemsType = data.excludeMode ? 'excluded' : 'selected',
                    selections = {};

                selections[itemsType] = data[itemsType];

                if (!selections[itemsType].length) {
                    selections[itemsType] = false;
                }

                _.extend(selections, data.params || {});

                /* check if need open action in new tab */
                if (action.inNewTab) {
                    var params = {
                        action: action.url,
                        data: selections
                    };
                    params.data.form_key = FORM_KEY;

                    var form = newTabForm.getForm();
                    form.buildForm.apply(form, [params]);
                    form.submitForm.apply(form);
                } else {
                    utils.submit({
                        url: action.url,
                        data: selections
                    });
                }
            }
        });
    };
});
