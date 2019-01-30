import { Component, Prop } from "@stencil/core";

@Component({
  tag: "st-progress",
  styleUrl: "progress.scss",
  shadow: true
})
export class Progress {
  /**
   * The visual color style of the progress
   */
  @Prop() color: string;

  render() {
    return (
      <div style={{ color: this.color }}>
        <svg viewBox="22 22 44 44">
          <circle cx="44" cy="44" r="20.2" fill="none" stroke-width="3.6" />
        </svg>
      </div>
    );
  }
}
