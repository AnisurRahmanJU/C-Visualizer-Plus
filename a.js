function runDirect() {
  stopPlay();
  const code = cmEditor.getValue().trim();
  if (!code) { showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> Please enter a C program.'); return; }
  setStatus('running', 'Compiling & running…');
  clearOutput();
  heapPositions = {};
  clearLineHL();
  try {
    interp = new CInterpreter(code, stdinQ.slice());

    if (interp.errors.length) {
      showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> ' + interp.errors.join('<br>'));
      setStatus('error', 'Compile error');
      framesEl.innerHTML = '<div class="empty"><i class="fa-solid fa-box-open"></i><p>No stack frames yet.</p></div>';
      updateCtrl();
      return;
    }
    if (!interp.steps.length) {
      showWalk('err', 'No output.'); setStatus('error', 'No steps'); return;
    }

    curStep = interp.steps.length - 1;
    renderStep(curStep);
    updateCtrl();
    clearLineHL();

    setStatus('ok', `Program finished — ran ${interp.steps.length} internal steps directly`);
    walkEl.innerHTML += '<br><small style="opacity:.7">Ran directly (no stepping). Use <b>Visualize</b> to replay it step-by-step, or Prev/◀ to rewind through what happened.</small>';
  } catch(e) {
    showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> ' + (e.message || String(e)));
    setStatus('error', 'Error');
  }
}


<button class="tb-btn primary" id="direct-run-btn" title="Compile & run directly — shows final output only, no stepping">
    <i class="fa-solid fa-play"></i><span>Run</span>
  </button>
  <button class="tb-btn" id="run-btn" title="Step through execution line-by-line">
    <i class="fa-solid fa-shoe-prints"></i><span>Visualize</span>
  </button>
