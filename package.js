Package.describe({
  name: "angular:angular2",
  summary: "Angular2 repackaged for meteor.",
  version: "2.0.0-alpha.25",
  git: "https://github.com/netanelgilad/meteor-angular2.git"
});

Package.registerBuildPlugin({
  name : 'templates',
  sources : [
    'plugin/handler.js'
  ]
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@0.9.0.1');

  // Files to load in Client only.
  api.add_files([
    // Lib Files
    'traceur-runtime.js',
    'es6-module-loader@0.16.5.js',
    'system@0.16.7.js',
    'angular2.dev.js'
  ], 'client');
});