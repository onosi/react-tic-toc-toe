import { Square } from "../App";
import type { StoryObj } from "@storybook/react-vite";

const meta = {
  title: "component/Square",
  component: Square,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "X",
    onSquareClick: () => {},
  },
};
