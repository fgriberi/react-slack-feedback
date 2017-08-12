Package.describe({
  name: 'fgriberi:react-slack-feedback',
  version: '1.0.0',
  summary: 'Meteor package for gathering user feedback to send to slack.',
  git: 'https://github.com/fgriberi/react-slack-feedback',
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