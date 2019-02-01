# Stencil Progress Component

This is a simple _progress component_ created using Stencil.

## Progress - &lt;st-progress&gt;

Progress indicators express an unspecified wait time.

### Using this component

*Script tag*
1. Put a script tag similar to this `<script src='https://unpkg.com/st-progress-component/dist/st-progress.js'></script>` in the head of your index.html  
1.1 You can specify a semantic version in your unpkg url: `<script src='https://unpkg.com/st-progress-component@0.0.1/dist/st-progress.js'></script>`

*Node Module*
1. Run `npm i st-progress-component --save`
2. Put a script tag similar to this <script src='node_modules/st-progress-component/dist/st-progress.js'></script> in the head of your index.html

### Examples

Default animated progress bar.

```html
<st-progress></st-progress>

<st-progress color="#2196f3"></st-progress>

<st-progress color="rgb(225,0,80)"></st-progress>
```

### Properties

| Property | Attribute | Description                            | Type     | Default     |
| -------- | --------- | -------------------------------------- | -------- | ----------- |
| `color`  | `color`   | The visual color style of the progress | `string` | `undefined` |

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*

## License

[MIT](LICENSE) © Ademílson F. Tonato