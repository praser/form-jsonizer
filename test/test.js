const expect = require('chai').expect;
const FormJsonizer = require('../src/form-jsonizer.js');
const markup = require('./fixtures/html.js');

document.body.innerHTML = markup;
const form = document.getElementById('myForm');

describe('FormJsonizer', () => {
  let instance;
  beforeEach(() => {
    instance = new FormJsonizer();
  });

  describe('getInstance static method', () => {
    it('is expected to return an array', () => {
      expect(FormJsonizer.getFields(form)).to.be.an('array');
    });

    it('is expected to have 25 fields', () => {
      expect(FormJsonizer.getFields(form).length).to.equal(25);
    });
  });

  describe('evaluateField static method', () => {
    it('is expected to return an object when eval checkbox', () => {
      const field = form.querySelector('input[name=checkbox]');
      expect(FormJsonizer.evaluateField(field)).to.be.an.instanceOf(Object);
    });

    it('is expected to return a string when not eval checkbox', () => {
      const field = form.querySelector('input[name=text]');
      expect(FormJsonizer.evaluateField(field)).to.be.an('string');
    });
  });

  describe('filterFields private method', () => {
    let fields,
      unsupported;

    beforeEach(() => {
      fields = FormJsonizer.getFields(form);
      unsupported = ['button', 'file', 'image', 'reset', 'submit'];
      instance = new FormJsonizer();
    });

    it('is expected to remove button, file, image, reset and submit fields', () => {
      expect(instance.filterFields(fields)
        .some(field => unsupported.includes(field.type))).to.be.false;
    });

    it('id expected to remove all unchecked radios', () => {
      const uncheked = form.querySelector('input[type=radio]:not(:checked)');
      expect(instance.filterFields(fields)).to.not.include(uncheked);
    });

    it('is expected to not include disabled fields when includeDisabled option is false', () => {
      const disabledFields = Array.from(form.querySelectorAll('input:disabled'));
      expect(instance.filterFields(fields)).to.not.include.members(disabledFields);
    });

    it('is expected to include disabled fields when includeDisabled option is true', () => {
      const disabledFields = Array.from(form.querySelectorAll('input:disabled'));
      instance = new FormJsonizer({ includeDisabled: true });
      expect(instance.filterFields(fields)).to.include.members(disabledFields);
    });
  });

  describe('toObject private method', () => {
    it('is expected to return an instance of Object', () => {
      expect(instance.toObject(form)).to.be.an.instanceOf(Object);
    });

    it('is expected to contain all keys of filterFields', () => {
      const keys = instance.filterFields(FormJsonizer.getFields(form)).map(field => field.name);
      expect(Object.keys(instance.toObject(form))).to.have.members(keys);
    });
  });

  describe('serialize public method', () => {
    it('is expected to return a string where json option is true', () => {
      expect(instance.serialize(form)).to.be.a('string');
    });

    it('is expected to return an intance of object when json option is false', () => {
      instance = new FormJsonizer({ json: false });
      expect(instance.serialize(form)).to.be.an.instanceOf(Object);
    });
  });
});
