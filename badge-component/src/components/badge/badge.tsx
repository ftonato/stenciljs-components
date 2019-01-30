import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'st-badge',
  styleUrl: 'badge.scss',
  shadow: true
})
export class Badge {
  /**
   * The visual style of the badge
   */
  @Prop() variant: string;

  getClasses() {
    return `badge badge-${this.variant}`;
  }

  render() {
    return <span class={this.getClasses()}><slot /></span>;
  }
}
