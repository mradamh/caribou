<% if (components.ember) { %>/* global Ember: false */

<% } %>'use strict';
<% if (components.ember) { %>
window.<%= _.classify(appname) %> = Ember.Application.create();
<% } else { %>
$(function() {
  // your code here
});
<% } %>