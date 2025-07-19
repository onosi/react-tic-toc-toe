import { Board } from "../App";
import type { StoryObj } from "@storybook/react-vite";

const meta = {
  title: "component/Board",
  component: Board,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    xIsNext: true,
    squares: ["X", "O", null, null, null, null, null, null, null],
    onPlay: (nextSquares: (string | null)[]) => {},
  },
};

export const TriangleFilledBoard = {
  args: {
    xIsNext: true,
    squares: Array(9).fill("△"),
    onClick: () => {},
  },
};
