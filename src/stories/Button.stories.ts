
/**
 * Storybook stories for the Button component.
 *
 * Demonstrates primary, secondary, and error variants with different props.
 */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "../components/Button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This story shows the primary button style.',
      },
    },
  },
  args: {
    color: "primary",
    label: "Label",
    variant: "contained",
    disabled: false,
  },
};

export const Secondary: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This story shows the secondary button style.',
      },
    },
  },
  args: {
    color: "secondary",
    label: "Label",
    variant: "contained",
    disabled: false,
  },
};

export const Error: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This story shows the error button style.',
      },
    },
  },
  args: {
    color: "error",
    label: "Label",
    variant: "contained",
    disabled: false,
  },
};
