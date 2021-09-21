import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';
import ButtonDocs from './button.mdx';

// the default export tells storybook where to put it in terms of navigation
export default {
  title: 'Button',
  component: 'Button',
  parameters: {
    docs: {
      page: ButtonDocs,
    },
  },
};

export const Basic = () => ({
  template: hbs`
    <Button {{on "click" this.handleClick}}>
      Click me
    </Button>
  `,
  context: {
    handleClick: action('button clicked'),
  },
});
