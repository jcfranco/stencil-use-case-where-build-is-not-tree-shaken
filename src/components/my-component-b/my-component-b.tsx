import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-component-b',
  shadow: true,
})
export class MyComponentB {

  render() {
    return (
      <Host>
        😭
      </Host>
    );
  }

}
