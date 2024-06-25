function customRender(reactElement, container)
{
    // 'a' tag
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)*/

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props)
    {
        //ratta
        if(prop == reactElement.children) continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        container.appendChild(domElement)
        
    }
}

// to render 'a' tag, we do this
// tag object
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'

    },
    children: 'Click me to visit google'

}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)