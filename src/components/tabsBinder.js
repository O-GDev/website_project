// Shared tab-switching logic for all tab widgets site-wide.
//
// - Scoped: a button only ever touches its own tab level, so nested tab sets
//   (e.g. `.tabs-box-2` inside `.tabs-box`) can never blank each other out.
// - Variant-aware: buttons inside `.tabs-box-2` toggle `active-btn-2` /
//   `active-tab-2`; everywhere else toggles `active-btn` / `active-tab`.
// - Idempotent: each button is bound once, so the per-page <Tabs> component
//   and the global TabsInit can both run without stacking handlers.
// - In-page only: switching tabs never navigates; it just swaps panels.
export function bindTabs(root) {
  if (!root || typeof root.querySelectorAll !== 'function') return () => {}
  const cleanups = []
  const btns = Array.from(root.querySelectorAll('[data-tab]'))

  btns.forEach((btn) => {
    if (btn.dataset.tabsBound) return
    btn.dataset.tabsBound = '1'

    const innerScope = btn.closest('.tabs-box-2')
    const scope = innerScope || btn.closest('.tabs-box') || root
    const btnActive = innerScope ? 'active-btn-2' : 'active-btn'
    const panelActive = innerScope ? 'active-tab-2' : 'active-tab'
    const panelSel = innerScope ? '.tab-2' : '.tab'

    const showPanel = (selector) => {
      try {
        const panel = scope.querySelector(selector)
        if (panel) panel.classList.add(panelActive)
      } catch (err) { /* ignore invalid selectors */ }
    }

    const onClick = (e) => {
      e.preventDefault()
      const target = btn.getAttribute('data-tab')
      Array.from(scope.querySelectorAll('[data-tab]')).forEach((b) => b.classList.remove(btnActive))
      btn.classList.add(btnActive)
      Array.from(scope.querySelectorAll(panelSel)).forEach((t) => t.classList.remove(panelActive))
      showPanel(target)
    }

    btn.addEventListener('click', onClick)
    cleanups.push(() => {
      btn.removeEventListener('click', onClick)
      delete btn.dataset.tabsBound
    })

    // if initially active, ensure the linked panel is shown
    if (btn.classList.contains(btnActive)) showPanel(btn.getAttribute('data-tab'))
  })

  return () => cleanups.forEach((fn) => fn())
}
