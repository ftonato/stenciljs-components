import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'st-alert',
  styleUrl: 'alert.scss',
  shadow: true
})
export class Alert {
  /**
   * The class list
   */
  @Prop() classnames: string;

  getClasses() {
    return `alert ${this.classnames}`;
  }

  render() {
    return <div class={this.getClasses()}><slot /></div>;
  }
}
