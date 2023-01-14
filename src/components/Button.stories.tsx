import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "Example/custom-button",
  component: Button,
  argTypes: {
    uppercase: {
      type: "boolean",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
  size: "medium",
};

export const Danger = Template.bind({});
Danger.args = {
  intent: "danger",
};

export const Secondary = Template.bind({});
Secondary.args = {
  intent: "secondary",
};
