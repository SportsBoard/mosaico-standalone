tinymce.PluginManager.add('salutation', function(editor, url) {
  var insertSalutation = function () {
    editor.execCommand('mceInsertContent', false, '{{salutation}}');
  };

  //editor.addCommand('mceSalutation', insertSalutation);

  editor.addButton('salutation', {
    // text: 'Insert salutation placeholder',
    tooltip: 'Insert salutation placeholder',
    icon: true,
    image: 'https://sportsboard.github.io/mosaico-standalone/mosaico/img/salutationIcon.png',
    onclick: insertSalutation
  });

  // Adds a menu item to the insert menu
  editor.addMenuItem('salutation', {
    text: 'Insert salutation placeholder',
    context: 'insert',
    //cmd: 'mceSalutation'
    onclick: insertSalutation
  });
});

tinymce.PluginManager.add('locker', function(editor, url) {
  var insertLocker = function () {
    editor.execCommand('mceInsertContent', false, '{{link}}');
  };

  //editor.addCommand('mceLocker', insertLocker);

  editor.addButton('locker', {
    // text: 'Insert locker link placeholder',
    tooltip: 'Insert locker link placeholder',
    icon: true,
    image: 'https://sportsboard.github.io/mosaico-standalone/mosaico/img/lockerIcon.png',
    onclick: insertLocker
  });

  // Adds a menu item to the insert menu
  editor.addMenuItem('locker', {
    text: 'Insert locker link placeholder',
    context: 'insert',
    //cmd: 'mceLocker'
    onclick: insertLocker
  });
});

tinymce.PluginManager.add('evaluation', function(editor, url) {
  var insertEvaluation = function () {
    editor.execCommand('mceInsertContent', false,
      '{% if download_url %}' +
        'Download your exported file here: <a href="{{download_url}}">{{download_url}}</a>' +
      '{% elif view_url %}' +
        'View your digital evaluation here: <a href="{{view_url}}">{{view_url}}</a>' +
      '{% endif %}' +
      '{{links|safe}}');
  };

  //editor.addCommand('mceEvaluation', insertEvaluation);

  editor.addButton('evaluation', {
    // text: 'Insert evaluation placeholder',
    tooltip: 'Insert evaluation placeholder',
    icon: true,
    image: 'https://sportsboard.github.io/mosaico-standalone/mosaico/img/evaluationIcon.png',
    onclick: insertEvaluation
  });

  // Adds a menu item to the insert menu
  editor.addMenuItem('evaluation', {
    text: 'Insert evaluation placeholder',
    context: 'insert',
    //cmd: 'mceEvaluation'
    onclick: insertEvaluation
  });
});

tinymce.PluginManager.add('signature', function(editor, url) {
  var insertSignature = function () {
    editor.execCommand('mceInsertContent', false, '{{signature}}');
  };

  //editor.addCommand('mceSignature', insertSignature);

  editor.addButton('signature', {
    // text: 'Insert signature placeholder',
    tooltip: 'Insert signature placeholder',
    icon: true,
    image: 'https://sportsboard.github.io/mosaico-standalone/mosaico/img/signatureIcon.png',
    onclick: insertSignature
  });

  // Adds a menu item to the insert menu
  editor.addMenuItem('signature', {
    text: 'Insert signature placeholder',
    context: 'insert',
    //cmd: 'mceSignature'
    onclick: insertSignature
  });
});
