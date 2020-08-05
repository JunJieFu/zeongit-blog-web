export class Technology {
  constructor(image, title, text) {
    this.image = image
    this.title = title
    this.text = text
  }
}

export class Live {
  constructor(image, title, component) {
    this.image = image
    this.title = title
    this.component = component
  }
}

export class Tab {
  constructor(label, value) {
    this.label = label
    this.value = value
  }
}
