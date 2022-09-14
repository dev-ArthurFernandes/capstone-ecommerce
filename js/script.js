
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
    tagDiv.appendChild(imagem)

    butao.addEventListener('click', () => {
        
        let tagUl               = document.querySelector('.carrinho')
        
        let tagLi               = document.createElement('li')
        let divImg              = document.createElement('div')
        let itemInfo            = document.createElement('div')
        let tag                 = document.createElement('span')
        let spanName            = document.createElement('span')
        let spanPrice           = document.createElement('span')
        let divButton           = document.createElement('div')
        let bntMais             = document.createElement('button')
        let bntMenos            = document.createElement('button')
        let itemContador        = document.createElement('input')
        let newImage            = document.createElement('img')

        tagLi.id                = productId
        divImg.className        = 'imgCart' 
        itemInfo.className      = 'itemInfo'
        divButton.className     = 'butoes'
        bntMais.className       = 'but_+'
        bntMenos.className      = 'but_-'
        itemContador.className  = 'itemContador'
        itemContador.value      = '0'
        newImage.src            = productImg
        newImage.alt            = productName


        tag.innerHTML           = productTag
        bntMais.innerHTML       = '+'
        bntMenos.innerHTML      = '-'

        spanName.appendChild(nome)
        spanPrice.appendChild(preco)
        divButton.append(bntMais,itemContador,bntMenos)
        divImg.appendChild(newImage)
        itemInfo.append(tag,spanName,spanPrice)
        
        tagLi.append(divImg,itemInfo,divButton)


        tagUl.appendChild(tagLi)
    })

    
    tagLi.append(tagDiv,categoria,nome,descrisao,preco,butao)

    return tagLi
}
addCard(data)

section.appendChild(addCard(data))


