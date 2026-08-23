(function attachCAutocomplete(cm) {
  if (!cm) { console.warn('C Autocomplete: cmEditor not found.'); return; }


  
  function isMobileDevice() {
    const ua = navigator.userAgent || navigator.vendor || '';
    const uaLooksMobile = /Android|iPhone|iPad|iPod|IEMobile|BlackBerry|Opera Mini|Mobile/i.test(ua);


    
    const isCoarsePointer = typeof window.matchMedia === 'function' &&
      window.matchMedia('(pointer: coarse)').matches;
    const isTouchOnly = (('ontouchstart' in window) || navigator.maxTouchPoints > 0) &&
      typeof window.matchMedia === 'function' &&
      !window.matchMedia('(pointer: fine)').matches;

    return uaLooksMobile || (isCoarsePointer && isTouchOnly);
  }

  if (isMobileDevice()) {
    console.log('C Autocomplete: skipped (mobile/touch device detected, desktop-only feature).');
    return;
  }
  // -------------------------------------------------------------------------

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

  function getUserIdentifiers() {
    const text = cm.getValue();
    const re = /[A-Za-z_][A-Za-z0-9_]*/g;
    const seen = new Set();
    const result = [];
    let match;
    while ((match = re.exec(text)) !== null) {
      const w = match[0];
      if (WORDS.indexOf(w) !== -1) continue;
      if (seen.has(w)) continue;
      seen.add(w);
      result.push(w);
    }
    return result;
  }

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

    let match = WORDS.find(w => w.length > prefix.length && w.toLowerCase().startsWith(prefix.toLowerCase()));

    if (!match) {
      const userIds = getUserIdentifiers();
      match = userIds.find(w => w.length > prefix.length && w.startsWith(prefix));
    }

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
