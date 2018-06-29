# Concepts


[Sibiling communication pt1 relay / pt2 eventbus](https://vegibit.com/vue-sibling-component-communication/)
- Custom Events

```js
messageBrother() {
//  this.$emit('EVENT-NAME', 'MESSAGE-PASSED-WITH-EVENT')
    this.$emit('sistersaid', 'Mom said do your homework!')
}
```
---
- Communication between Siblings

## sistercard.vue
template
```html
<button @click="messageBrother" class="btn btn-warning">Message Brother</button>
            <!--method called  -->
```
script
```js
//  this.$emit('EVENT-NAME', 'MESSAGE-PASSED-WITH-EVENT')
    this.$emit('sistersaid', 'Mom said do your homework!')
```
## parentcard.vue
template
```html
<sister-card :messagedaughter="messagedaughter" @sistersaid="messageSon($event)"></sister-card>
                                                <!--1. Message listener for custom event -->
                                                <!--2. Passes the event to the method on parent to communicate to sibling-->
```
script

```js
messageSon(message) {
    this.messageson = message;
}

data() {
    return {
        thecardtitle: 'Parent Component!',
        messagedaughter: '',
        messageson: ''
    }
}
```

----




#### Pug
- [PrePros Boilerplate HTML](https://github.com/Tor020/preprosboilerplate/tree/master/Dev)
- [Pug](https://gist.github.com/gearmobile/e1be3359a667eb1e555b2c461955e800)
- [HTML to Pug](https://html-to-pug.com/)
- [Pug to HTML](https://pughtml.com/)

#### Vue-Cli
- [Full Vue-cli Docs](https://github.com/vuejs/vue-cli/tree/dev/docs)
- [Vue-cli commands](https://github.com/vuejs/vue-cli/blob/dev/docs/cli.md)
- Seems to be some weird way of passing options to webpack with [vue-cli](https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md#inspecting-the-projects-webpack-config) 
- [Actually fucking useful deep explaination into Vue CLI 3+](https://blog.logrocket.com/vue-cli-3-the-deep-dive-41dff070ac4a)

#### Decent Vue Component example

 [tutorial page](https://frontstuff.io/build-your-first-vue-js-component)
 [code-example](https://codesandbox.io/s/38k1y8x375)
