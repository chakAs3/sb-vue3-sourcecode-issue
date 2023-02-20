import MyButton from './Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/7.0/vue/writing-stories/introduction
export default {
  title: 'Example/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary'],
    }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/vue/writing-stories/args
export const Primary = {
  story: (args) => ({
    // same with v-bind
    // template: `<my-button variant="primary" v-bind="args">{{args.default}}</my-button>`,
    template: `<my-button variant="primary">{{args.default}}</my-button>`,
    setup() {
      return {
        args,
      }
    }, 
  }),
  args: {
    default: 'Button!'
  }
};
