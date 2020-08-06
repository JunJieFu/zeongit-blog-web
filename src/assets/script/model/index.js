export class LabelValue {
  constructor(label, value) {
    this.label = label
    this.value = value
  }
}

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

export class Footer {
  constructor(title, linkList) {
    this.title = title
    this.linkList = linkList
  }
}
