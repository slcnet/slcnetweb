$('a[data-email-ug]').click(function(e) {
  var target = 'mailto:';
  target += 'slc.netug';
  target += '@';
  target += 'gmail.com';
  e.target.href = target;
});
