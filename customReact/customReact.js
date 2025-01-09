const root = document.getElementById('root');


const obj = {
    type:'a',
    props:{
        href:"https://www.google.com/"
    },
    childern:"Click Me"
}

addElement(obj,root);

function addElement(obj,root){

    const newElement = document.createElement(obj.type);
    newElement.innerHTML = obj.childern;
    for (const prop in obj.props) {
        if (prop ==='childern')continue;
        newElement.setAttribute(prop, obj.props[prop] )
    
    root.appendChild(newElement);

    }

}