export default {
  title: 'Button',
};

export const rounded = () => ({
  template: '<my-button :rounded="true">A Button with rounded edges</my-button>',
});

export const square = () => ({
  template: '<my-button :rounded="false">A Button with square edges</my-button>',
});
