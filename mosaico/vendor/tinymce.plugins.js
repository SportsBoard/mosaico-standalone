tinymce.PluginManager.add('salutation', function(editor, url) {
  var insertSalutation = function () {
    editor.execCommand('mceInsertContent', false, '{{salutation}}');
  };

  editor.addCommand('mceSalutation', insertSalutation);

  editor.addButton('salutation', {
    text: 'Insert salutation placeholder',
    icon: false,
    onclick: insertSalutation
  });

  // Adds a menu item to the insert menu
  editor.addMenuItem('salutation', {
    text: 'Insert salutation placeholder',
    context: 'insert',
    cmd: 'mceSalutation'
    //onclick: insertSalutation
  });
});

tinymce.PluginManager.add('locker', function(editor, url) {
  var insertLocker = function () {
    editor.execCommand('mceInsertContent', false, '{{link}}');
  };

  editor.addCommand('mceLocker', insertLocker);

  editor.addButton('locker', {
    text: 'Insert locker link placeholder',
    icon: false,
    onclick: insertLocker
  });

  // Adds a menu item to the insert menu
  editor.addMenuItem('locker', {
    text: 'Insert locker link placeholder',
    context: 'insert',
    cmd: 'mceLocker'
    //onclick: insertLocker
  });
});

tinymce.PluginManager.add('evaluation', function(editor, url) {
  var insertEvaluation = function () {
    editor.execCommand('mceInsertContent', false, '{{evaluation}}');
  };

  editor.addCommand('mceEvaluation', insertEvaluation);

  editor.addButton('evaluation', {
    text: 'Insert evaluation placeholder',
    icon: false,
    onclick: insertEvaluation
  });

  // Adds a menu item to the insert menu
  editor.addMenuItem('evaluation', {
    text: 'Insert evaluation placeholder',
    context: 'insert',
    cmd: 'mceEvaluation'
    //onclick: insertEvaluation
  });
});

tinymce.PluginManager.add('signature', function(editor, url) {
  var insertSignature = function () {
    editor.execCommand('mceInsertContent', false, '{{signature}}');
  };

  editor.addCommand('mceSignature', insertSignature);

  editor.addButton('signature', {
    text: 'Insert signature placeholder',
    icon: false,
    onclick: insertSignature
  });

  // Adds a menu item to the insert menu
  editor.addMenuItem('signature', {
    text: 'Insert signature placeholder',
    context: 'insert',
    cmd: 'mceSignature'
    //onclick: insertSignature
  });
});