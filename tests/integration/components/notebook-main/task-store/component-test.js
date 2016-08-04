import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('notebook-main/task-store', 'Integration | Component | notebook main/task store', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{notebook-main/task-store}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#notebook-main/task-store}}
      template block text
    {{/notebook-main/task-store}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
