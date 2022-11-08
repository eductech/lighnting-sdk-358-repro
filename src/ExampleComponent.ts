import { Lightning } from '@lightningjs/sdk'

interface ComponentSpec extends Lightning.Component.TemplateSpec {
  ExampleComponentChild: object
}

export class ExampleComponent
  extends Lightning.Component<ComponentSpec>
  implements Lightning.Component.ImplementTemplateSpec<ComponentSpec>
{
  static override _template(): Lightning.Component.Template<ComponentSpec> {
    return {
      ExampleComponentChild: {},
    }
  }

  get ExampleComponentChild() {
    return this.tag('ExampleComponentChild')
  }
}
