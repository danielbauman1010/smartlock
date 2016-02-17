if (Meteor.isClient) {
  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
Router.route('/', {
  name: 'product',
  template:   'product'
});
Router.route('/specs', {
  name:   'specs',
  template:   'specs'
});
Router.route('/purchase', {
  name:   'purchase',
  template:   'purchase'
});
Router.route('/about', {
  name:   'about',
  template:   'about'
});
