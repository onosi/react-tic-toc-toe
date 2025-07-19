import { Game } from "../App";

import type { StoryObj } from "@storybook/react-vite";

const meta = {
  title: "component/Game",
  component: Game,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
