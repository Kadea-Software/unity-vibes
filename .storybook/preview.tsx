import type { Preview } from "@storybook/react";
import "../src/app/globals.css";
import { Provider } from "../src/app/provider";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(Story) => <Provider>{<Story />}</Provider>],
};

export default preview;
