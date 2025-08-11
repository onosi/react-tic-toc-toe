import { Game } from "../App";
import type { StoryObj } from "@storybook/react-vite";
import { expect, within, userEvent } from "storybook/test";
import "@testing-library/jest-dom/vitest";

const meta = {
  title: "component/Game",
  component: Game,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const WinScenario: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const buttons = await canvas.getAllByRole("button");

    await userEvent.click(buttons[0]); // X
    await userEvent.click(buttons[1]); // O
    await userEvent.click(buttons[4]); // X
    await userEvent.click(buttons[2]); // O
    await userEvent.click(buttons[8]); // X wins

    await expect(canvas.getByText(/Winner: X/i)).toBeInTheDocument();
  },
};
