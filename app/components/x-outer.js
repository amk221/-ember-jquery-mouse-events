import Component from '@ember/component';

export default Component.extend({
  mouseEnter() {
    this._super(...arguments);
    console.log('mouseEnter');
  },

  mouseLeave() {
    this._super(...arguments);
    console.log('mouseLeave');
  },
});
