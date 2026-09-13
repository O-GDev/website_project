module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  // The template reuses hundreds of legacy class names. A handful collide
  // with Tailwind's core utility names (e.g. the Bootstrap nav uses the literal
  // class "collapse"), and Tailwind would generate overrides that break the
  // template CSS. Block them so they can never become utilities.
  blocklist: ['collapse', 'block', 'visible', 'invisible', 'hidden', 'flex', 'grid', 'fixed', 'relative', 'absolute'],
  theme: {
    extend: {},
  },
  plugins: [],
}
