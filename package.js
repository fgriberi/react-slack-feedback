Package.describe({
  name: 'react-slack-feedback',
  version: '0.0.1',
  summary: '...',
  git: 'https://github.com/fgriberi/rect-slack-feedback',
  documentation: 'README.md'
});

Npm.depends({
  'classnames': '2.2.5',
  'prop-types': '15.5.10'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.4');
  api.use('ecmascript');
  api.addAssets('SlackFeedback.scss', 'client');
  api.addFiles('SlackIcon.js', 'client');
  api.mainModule('SlackFeedback.js', 'client');
});