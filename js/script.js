
// Criação dos produtos na Tela
let section = document.querySelector('.produtos')

function addCard(data){
    
    let tagUl = document.createElement('ul')

    for(item in data){
    
        let produtoCard = makeCards(data[item])

        tagUl.appendChild(produtoCard)
    }

    return tagUl
}

function makeCards(item){
    
    let tagLi       = document.createElement('li')
    let tagDiv      = document.createElement('div')
    let imagem      = document.createElement('img')
    let categoria   = document.createElement('span')
    let nome        = document.createElement('h3')
    let descrisao   = document.createElement('p')
    let preco       = document.createElement('p')
    let butao       = document.createElement('button')

    //Produto
    let productName         = item.nameItem
    let productId           = item.id
    let productDescription  = item.description
    let productImg          = item.img
    let productValue        = item.value
    let productTag          = item.tag

    tagDiv.className        = "img"
    imagem.src              = productImg
    imagem.alt              = productName
    categoria.className     = "tag"
    categoria.innerHTML     = productTag
    categoria.style.width   = `${productTag[0].length * 11}px`
    nome.innerHTML          = `<strong>${productName}</strong>`
    descrisao.className     = "description"
    descrisao.innerHTML     = productDescription
    preco.className         = "price"
    preco.innerHTML         = `R$ ${productValue}`
    butao.innerHTML         = "Adicionar ao carrinho"
    butao.classList         = 'addCart'
    tagLi.id                = productId
    tagLi.classList         = 'produto'

    butao.addEventListener('click', () => {
        let tagLi       = document.createElement('li')
        let divImg      = document.createElement('div')
        let imagem      = document.createElement('img')
        let itemInfo    = document.createElement('div')
        let tag         = document.createElement('span')
        let spanName    = document.createElement('span')
        let name        = document.createElement('h3')

        console.log(productId)
    })

    tagDiv.appendChild(imagem)
    tagLi.append(tagDiv,categoria,nome,descrisao,preco,butao)

    return tagLi
}
addCard(data)

section.appendChild(addCard(data))


