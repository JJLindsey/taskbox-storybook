import '../src/index.css'
//configures Storybook to log the actions (onArchive & onPinTask) in the UI
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
