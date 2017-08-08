tinymce.PluginManager.add('salutation', function(editor, url) {
  var insertSalutation = function () {
    editor.execCommand('mceInsertContent', false, '{{salutation}}');
  };

  //editor.addCommand('mceSalutation', insertSalutation);

  editor.addButton('salutation', {
    tooltip: 'Insert salutation placeholder',
    // icon: false,
    icon: 'https://sportsboard.github.io/mosaico-standalone/mosaico/img/salutationIcon.png',
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
    tooltip: 'Insert locker link placeholder',
    // icon: false,
    icon: 'https://sportsboard.github.io/mosaico-standalone/mosaico/img/lockerIcon.png',
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
    editor.execCommand('mceInsertContent', false, '{{evaluation}}');
  };

  //editor.addCommand('mceEvaluation', insertEvaluation);

  editor.addButton('evaluation', {
    tooltip: 'Insert evaluation placeholder',
    // icon: false,
    icon: 'https://sportsboard.github.io/mosaico-standalone/mosaico/img/evaluationIcon.png',
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
    tooltip: 'Insert signature placeholder',
    // icon: false,
    icon: 'https://sportsboard.github.io/mosaico-standalone/mosaico/img/signatureIcon.png',
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
