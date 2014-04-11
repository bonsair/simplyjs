console.log('Simply.js demo!');

simply.on('singleClick', function(e) {
  console.log(util2.format('single clicked $button!', e));
  simply.subtitle('Pulsado ' + e.button + '!');
});

simply.on('longClick', function(e) {
  console.log(util2.format('long clicked $button!', e));
  simply.vibe();
  simply.scrollable(e.button !== 'select');
});

simply.on('accelTap', function(e) {
  console.log(util2.format('tapped accel axis $axis $direction!', e));
  simply.subtitle('Pulasdo ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});

simply.setText({
  title: 'Demostracion!',
  body: 'Dale a los botones!',
}, true);
