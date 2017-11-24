class FormJsonizer {
  constructor(options = {}) {
    this.defaults = {
      json: true,
      includeDisabled: false,
    };

    this.options = Object.assign(this.defaults, options);
  }

  /**
   * Finds all form fields
   * @static
   * @param {Object} form
   * @returns {array}
   */
  static getFields(form) {
    return Array.from(form.querySelectorAll('input, textarea'));
  }

  /**
   * Evaluates fields value and replace it if necessary
   * @static
   * @param {Object} field
   * @returns {Object}
   */
  static evaluateField(field) {
    const type = ['checkbox'];
    return type.includes(field.type) ? { value: field.value, checked: field.checked } : field.value;
  }

  /**
   * Filter fields removing unsupported types and disabled fields
   * @private
   * @param {array} fields
   * @returns {array}
   */
  filterFields(fields) {
    const unsupported = ['button', 'file', 'image', 'reset', 'submit'];
    return fields
      .filter(field => !unsupported.includes(field.type))
      .filter(field => field.type !== 'radio' || field.checked)
      .filter(field => !field.disabled || (this.options.includeDisabled && field.disabled));
  }

  /**
   * Serializes form to object
   * @private
   * @param {Object} form
   * @returns {Object}
   */
  toObject(form) {
    const obj = {};
    const fields = this.filterFields(FormJsonizer.getFields(form));

    /* for (const field of fields) {
      obj[field.name] = FormJsonizer.evaluateField(field);
    } */
    fields.map((field) => {
      obj[field.name] = FormJsonizer.evaluateField(field);
      return obj;
    });

    return obj;
  }

  /**
   * Serializes to JSON an object representing the form.
   * @public
   * @param {Object} object
   * @returns {string}
   * @returns {Object}
   */
  serialize(form) {
    const obj = this.toObject(form);
    return this.options.json ? JSON.stringify(obj) : obj;
  }
}

module.exports = FormJsonizer;
