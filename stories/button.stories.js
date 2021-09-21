import { hbs } from 'ember-cli-htmlbars';
import { action } from '@storybook/addon-actions';

// the default export tells storybook where to put it in terms of navigation
export default {
  title: 'Button',
  component: 'Button',
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
