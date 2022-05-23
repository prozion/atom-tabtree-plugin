'use babel';

import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tabtree-package:fold1': () => this.foldi(1),
      'tabtree-package:fold2': () => this.foldi(2),
      'tabtree-package:fold3': () => this.foldi(3),
      'tabtree-package:fold4': () => this.foldi(4),
      'tabtree-package:fold5': () => this.foldi(5),
      'tabtree-package:fold6': () => this.foldi(6),
      'tabtree-package:fold7': () => this.foldi(7),
      'tabtree-package:fold8': () => this.foldi(8),
      'tabtree-package:fold9': () => this.foldi(9)
      // 'tabtree-package:subfold1': () => this.foldi(1)
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  foldi(i) {
    const editor = atom.workspace.getActiveTextEditor();
    if (editor) editor.foldAllAtIndentLevel(i-1);
  },

  // subfoldi(i) {
  //   const editor = atom.workspace.getActiveTextEditor();
  //   // const current_line_number = editor.getCurrentParagraphBufferRange().start.row;
  //   if (editor) editor.foldBufferRow(editor.getLastBufferRow());
  // },



};
