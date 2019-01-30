/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface StBadge {
    /**
    * The visual style of the badge
    */
    'variant': string;
  }
  interface StBadgeAttributes extends StencilHTMLAttributes {
    /**
    * The visual style of the badge
    */
    'variant'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'StBadge': Components.StBadge;
  }

  interface StencilIntrinsicElements {
    'st-badge': Components.StBadgeAttributes;
  }


  interface HTMLStBadgeElement extends Components.StBadge, HTMLStencilElement {}
  var HTMLStBadgeElement: {
    prototype: HTMLStBadgeElement;
    new (): HTMLStBadgeElement;
  };

  interface HTMLElementTagNameMap {
    'st-badge': HTMLStBadgeElement
  }

  interface ElementTagNameMap {
    'st-badge': HTMLStBadgeElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}