function cutomRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.children
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.target)

  container.appendChild(domElement)
}


const reactElement = {
  type: 'a',
  props: {
    href: 'http://google.com',
    target: '_black'
  },
  children: 'click me to visite google'

}

const mainContainer = document.getElementById('root')

cutomRender(reactElement, mainContainer)

