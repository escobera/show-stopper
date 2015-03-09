import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  attrs: {
      createdAt: { serialize: false },
      updatedAt: { serialize: false }
    }
});
