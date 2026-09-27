function runVisualize() {
  stopPlay();
  const code = cmEditor.getValue().trim();
  if (!code) { showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> Please enter a C program.'); return; }
  setStatus('running', 'Interpreting…');
  clearOutput();
  heapPositions = {};
  try {
    interp = new CInterpreter(code, stdinQ.slice());
    if (interp.errors.length) {
      showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> ' + interp.errors.join('<br>'));
      setStatus('error', 'Parse error'); updateCtrl(); return;
    }
    if (!interp.steps.length) {
      showWalk('err', 'No steps generated.'); setStatus('error', 'No steps'); return;
    }
    curStep = 0; renderStep(0); updateCtrl();
    setStatus('ok', `Ready — ${interp.steps.length} steps`);
  } catch(e) {
    showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> ' + (e.message || String(e)));
    setStatus('error', 'Error');
  }
}

// ── Direct "Run" — behaves exactly like Visualize (same parse/interpret,
// same error surfacing, same output/heap/frame rendering) but instead of
// landing on step 1 for manual step-through, it jumps straight to the final
// step so the person sees the finished program output immediately, like
// running a compiled program end-to-end.
function directRunVisualize() {
  stopPlay();
  const code = cmEditor.getValue().trim();
  if (!code) { showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> Please enter a C program.'); return; }
  setStatus('running', 'Running…');
  clearOutput();
  heapPositions = {};
  try {
    interp = new CInterpreter(code, stdinQ.slice());
    if (interp.errors.length) {
      showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> ' + interp.errors.join('<br>'));
      setStatus('error', 'Parse error'); updateCtrl(); return;
    }
    if (!interp.steps.length) {
      showWalk('err', 'No steps generated.'); setStatus('error', 'No steps'); return;
    }
    curStep = interp.steps.length - 1;
    renderStep(curStep);
    updateCtrl();
    setStatus('ok', `Finished — ran ${interp.steps.length} steps`);
  } catch(e) {
    showWalk('err', '<i class="fa-solid fa-triangle-exclamation"></i> ' + (e.message || String(e)));
    setStatus('error', 'Error');
  }
}
