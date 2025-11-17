
/**
 * Storybook stories for the TextField component.
 *
 * Demonstrates empty, placeholder, and filled states with different props.
 */
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { TextField } from "../components/TextField/TextField";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "TextField",
  component: TextField,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    onChange: fn(),
    disabled: false,
    error: false,
  },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Empty: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This story shows the TextField with no text.',
      },
    },
  },
  args: {
    placeholder: undefined,
    defaultValue: undefined,
  },
};

export const Placeholder: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This story shows the TextField with a placeholder text.',
      },
    },
  },
  args: {
    placeholder: "Update placeholder here",
    defaultValue: undefined,
  },
};

export const filled: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This story shows the TextField with a filled value.',
      },
    },
  },
  args: {
    placeholder: "Update placeholder here",
    defaultValue: "Update value here",
  },
};
