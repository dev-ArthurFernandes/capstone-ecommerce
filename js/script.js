
let section         = document.querySelector('.produtos')

let cartShopList    = []

let carrinhoVazio   = document.querySelector('.listItem')

let cartShop        = document.querySelector('.carrinho')

let quantidade      = document.querySelector('#quantity')

let PrecoTotal      = 0

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

    butao.addEventListener('click', addToCart)

    
    tagLi.append(tagDiv,categoria,nome,descrisao,preco,butao)

    return tagLi
}

function addToCart(){
    console.log(event)
    for(item in cartShopList){
        if(item.id === event['path']['1'].id){
            
        }
    }
    carrinhoVazio.style = "background-image: none"

    cartShopList.push(event['path'][1].id - 1)

    quantidade.value = cartShopList.length

    let produto = data[event['path'][1].id - 1]

    let tagLi           = document.createElement('li')
    let divImg          = document.createElement('div')
    let imagem          = document.createElement('img')
    let itemInfo        = document.createElement('div')
    let spanTag         = document.createElement('span')
    let spanName        = document.createElement('span')
    let name            = document.createElement('h3')
    let spanPrice       = document.createElement('span')
    let price           = document.createElement('p')
    let divButao        = document.createElement('div')
    let bntMais         = document.createElement('button')
    let itemContador    = document.createElement('input')
    let bntMenos        = document.createElement('button')



    let productName         = produto.nameItem
    let productId           = produto.id
    let productDescription  = produto.description
    let productImg          = produto.img
    let productValue        = produto.value
    let productTag          = produto.tag

    tagLi.id                = productId
    divImg.className        = "imgCart"
    imagem.src              = productImg 
    imagem.alt              = productName
    itemInfo.className      = 'itemInfo'
    spanTag.className       = 'tag'
    spanTag.innerHTML       =  productTag
    name.innerHTML          = `<strong>${productName}</strong>`
    price.innerHTML         = `R$ ${productValue}`
    divButao.className      = 'butoes'
    bntMais.className       = 'but_+'
    itemContador.id         = `item${productId}Contador`
    itemContador.value      = 1
    bntMenos.className      = 'but_-'
    bntMais.innerHTML       = '+'
    bntMenos.innerHTML      = '-'
    price.className         = 'price'
    itemContador.readOnly   = true
    itemContador.disabled   = true

    spanName.append(name)
    spanPrice.append(price)
    divButao.append(bntMais,itemContador,bntMenos)
    itemInfo.append(spanTag,spanName,spanPrice)
    divImg.appendChild(imagem)
    tagLi.append(divImg,itemInfo,divButao)

    tagLi.addEventListener('click', calculateQuantity)

    PrecoTotal += productValue

    cartShop.appendChild(tagLi)
    calculatePrice(produto)
}


function calculatePrice(){

    let total   = document.querySelector('#total')

    total.value = `R$ ${PrecoTotal}`
}

function calculateQuantity(event){
    console.log(event)
    if(event['path'][0].className === "but_+"){
        let produto = data[event['path'][2].id - 1]

        let price = produto.value

        let input = document.querySelector(`#item${produto.id}Contador`)
        console.log(input)
        input.value = parseInt(input.value) + 1

        PrecoTotal += price

        console.log(cartShopList.length)

        cartShopList.push("1")

        quantidade.value = cartShopList.length
    }else if(event['path'][0].className === "but_-"){
        let produto = data[event['path'][2].id - 1]

        let price = produto.value

        let input = document.querySelector(`#item${produto.id}Contador`)
        
        input.value = parseInt(input.value) - 1

        PrecoTotal -= price
        
        cartShopList.splice(0,1)
        quantidade.value = cartShopList.length
        // if(input.value === "0"){

        // }
    }
   removeProduct(event)
    calculatePrice()
}

function removeProduct(event){
    
    let quantidade = document.querySelector(`#item${data[event['path'][2].id - 1].id}Contador`).value

    if(quantidade === "0"){
        event['path'][2].remove()
    }else{
        return false
    }
    if(cartShopList.length === 0){
        carrinhoVazio.style = "background-image: url('/img/carrinhoVazio.png');"
    }else{
        return false
    }
}

section.appendChild(addCard(data))