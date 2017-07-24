define([
    'jquery'
], function($){
    'use strict';

    var form = function () {
        this.form = null;

        var defaultOptions = {
            method: 'post',
            action: '#',
            target: '_blank',
            enctype: 'multipart/form-data',
            data: {}
        };

        var generateInputs = function(name, data, form) {
            if (data !== null && data !== undefined && typeof data !== "function") {
                if (typeof data === 'object') {
                    for (var key in data) {
                        if (!data.hasOwnProperty(key)) {
                            continue;
                        }
                        var value = data[key];
                        var deedName = (!name) ? name + key : name + '[' + key + ']';
                        generateInputs(deedName, value, form);
                    }
                } else {
                    /* append input control at end of form */
                    $('<input type="hidden">')
                        .attr('name', name)
                        .attr('value', data)
                        .appendTo(form);
                }
            }
        };

        this.buildForm = function(params) {
            var config = $.extend(defaultOptions, params);

            /* build form */
            this.form = $(document.createElement('form'));
            this.form.appendTo('body');
            this.form.attr('action', config.action);
            this.form.attr('method', config.method);
            this.form.attr('target', config.target);
            if (config.enctype) {
                this.form.attr('enctype', config.enctype);
            }
            generateInputs('', config.data, this.form);
        };

        this.submitForm = function () {
            this.form.submit();
            this.form.remove();
        }
    };

    return {
        getForm: function () {
            return new form;
        }
    };
});
