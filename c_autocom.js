(function attachCAutocomplete(cm) {
  if (!cm) { console.warn('C Autocomplete: cmEditor not found.'); return; }

  const WORDS = [
    'int', 'float', 'double', 'char', 'long', 'short',
    'unsigned', 'signed', 'void', 'const', 'static', 'extern',
    'struct', 'union', 'enum', 'typedef', 'volatile', 'size_t',

    'if', 'else', 'for', 'while', 'do', 'switch', 'case',
    'default', 'break', 'continue', 'return', 'goto',

    'printf', 'scanf', 'sprintf', 'sscanf', 'fprintf', 'fscanf',
    'malloc', 'calloc', 'realloc', 'free', 'sizeof',
    'strlen', 'strcpy', 'strncpy', 'strcat', 'strncat',
    'strcmp', 'strncmp', 'memset', 'memcpy',
    'fopen', 'fclose', 'fgets', 'fputs', 'fread', 'fwrite',
    'main', 'include', 'define', 'ifdef', 'ifndef', 'endif', 'pragma',
    'NULL', 'true', 'false'
  ];

  const style = document.createElement('style');
  style.textContent = `
    .cauto-ghost {
      opacity: 0.45;
      font-style: normal;
      pointer-events: none;
      white-space: pre;
    }
    .cauto-ghost::selection { background: transparent; }
  `;
  document.head.appendChild(style);

  let activeBookmark = null;
  let activeSuggestion = null;

  function clearSuggestion() {
    if (activeBookmark) {
      activeBookmark.clear();
      activeBookmark = null;
    }
    activeSuggestion = null;
  }

  function isInStringOrComment(pos) {
    const token = cm.getTokenTypeAt(pos);
    if (!token) return false;
    return token.indexOf('string') !== -1 || token.indexOf('comment') !== -1;
  }

  function computeSuggestion() {
    const pos = cm.getCursor();
    const line = cm.getLine(pos.line);
    const before = line.slice(0, pos.ch);
    const after = line.slice(pos.ch);

    if (/^[A-Za-z0-9_]/.test(after)) return null;

    const m = before.match(/[A-Za-z_][A-Za-z0-9_]*$/);
    if (!m) return null;
    const prefix = m[0];

    if (prefix.length < 1) return null;
    if (isInStringOrComment(pos)) return null;

    const match = WORDS.find(w => w.length > prefix.length && w.toLowerCase().startsWith(prefix.toLowerCase()));
    if (!match) return null;

    return {
      from: { line: pos.line, ch: pos.ch - prefix.length },
      to: pos,
      prefix,
      full: match,
      remainder: match.slice(prefix.length)
    };
  }

  function showSuggestion(sug) {
    clearSuggestion();
    if (!sug) return;
    const span = document.createElement('span');
    span.className = 'cauto-ghost';
    span.textContent = sug.remainder;
    activeBookmark = cm.setBookmark(sug.to, { widget: span, insertLeft: true });
    activeSuggestion = sug;
  }

  function refreshSuggestion() {
    const sug = computeSuggestion();
    showSuggestion(sug);
  }

  function acceptSuggestion() {
    if (!activeSuggestion) return false;
    const { to, remainder } = activeSuggestion;
    cm.replaceRange(remainder, to, to);
    const newPos = { line: to.line, ch: to.ch + remainder.length };
    clearSuggestion();
    cm.setCursor(newPos);
    return true;
  }

  cm.on('cursorActivity', () => {
    refreshSuggestion();
  });

  cm.on('inputRead', () => {
    refreshSuggestion();
  });

  cm.on('blur', clearSuggestion);
  cm.on('focus', refreshSuggestion);

  cm.addKeyMap({
    'Enter': function (instance) {
      if (activeSuggestion) {
        acceptSuggestion();
        return;
      }
      return CodeMirror.Pass;
    },
    'Tab': function (instance) {
      if (activeSuggestion) {
        acceptSuggestion();
        return;
      }
      return CodeMirror.Pass;
    },
    'Right': function (instance) {
      if (activeSuggestion) {
        const cur = instance.getCursor();
        if (cur.line === activeSuggestion.to.line && cur.ch === activeSuggestion.to.ch) {
          acceptSuggestion();
          return;
        }
      }
      return CodeMirror.Pass;
    },
    'Esc': function () {
      if (activeSuggestion) {
        clearSuggestion();
        return;
      }
      return CodeMirror.Pass;
    }
  }, false);

  refreshSuggestion();

  console.log('C Autocomplete (ghost-text) attached successfully.');
})(typeof cmEditor !== 'undefined' ? cmEditor : null);
