    var vetdados = 
    [
        {id:1, nome:'teste'},
        {id:2, nome:'teste2'},
        {id:3, nome:'teste3'},
        {id:4, nome:'teste4'},
        {id:5, nome:'teste5'},
        {id:6, nome:'teste6'},
    ]


    function carregatabela(vetdados)
    {
        let tbody = document.querySelector('#tb-body');
        let html = '';

        for(let item of vetdados)
        {
            html += 
            `
                <tr>
                    <td class="coluna"><input type="checkbox" data-id="${item.id}"></td>
                    <td class="coluna">${item.nome}</td>
                    <td class="coluna"><a class="btnExcluir" onclick="excluiritem(${item.id})">🗑️</td>
                </tr>
            `
        }
        //alert(html);
        tbody.innerHTML = html;
    }

function adicionaritem() {
    const form = document.querySelector('.needs-validation');
    if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return; 
    }

    let novoitem = {
        id: new Date().getTime(),
        nomeFantasia: document.querySelector('#nomefantasia').value,
        cnpj: document.querySelector('#CNPJ').value,
        cep: document.querySelector('#CEP').value,
        logradouro: document.querySelector('#logradouro').value,
        numero: document.querySelector('#numero').value,
        bairro: document.querySelector('#bairro').value,
        cidade: document.querySelector('#cidade').value,
        estado: document.querySelector('#UF').value,
        responsavel: document.querySelector('#responsavel').value,
        telefone: document.querySelector('#telefone').value,
        email: document.querySelector('#email').value
    };

    vetdados.push(novoitem);
    carregatabela(vetdados);

    form.reset();
    form.classList.remove('was-validated');
}

    function excluiritem(idDelete)
    {
        let vetAux = [];
        for (let i=0; i<vetdados.length;i++)
        {
            if(vetdados[i].id != idDelete)
                    vetAux.push(vetdados[i])
        }
        vetdados = vetAux;
        carregatabela(vetdados);
    }

    function excluirselecionados()
    {
        let vetcheckbox = document.querySelectorAll('input[type="checkbox"][data-id]');
            if(vetcheckbox.length > 0)
            {
                for(let ck of vetcheckbox)
                    if(ck.checked == true)
                        excluiritem(ck.dataset.id)
            }
            else alert('Não há itens para serem apagados.....');
    }

    function selecionartodos()
    {
        let ckpai = document.querySelector('#ckTodos');
        let vetcheckbox = document.querySelectorAll('input[type="checkbox"][data-id]');
        for (let ck of vetcheckbox)
        {
            ck.checked = ckpai.checked; 
        }
    }

    document.addEventListener('DOMContentLoaded',
        function()
        {
            carregatabela(vetdados);

            let ckpai = document.querySelector('#cktodos');
            ckpai.addEventListener('click',selecionartodos,false);

            let btnadd = document.querySelector('#btn-add');
            btnadd.addEventListener('click',adicionaritem,false);

            let btnExcsel = document.querySelector('#btnExcluirSelecionados');
            btnExcsel.addEventListener('click',excluirselecionados,false);
        },false);