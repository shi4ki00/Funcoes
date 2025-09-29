function menu(){
    let Escolha

    do {
        Escolha = prompt(`Digite um numero das opções a seguir:
            1 - Inserir valor de uma venda
            2 - Ver status das vendas do dia
            3 - Inserir valor de uma despesa
            4 - Ver total de despesas do dia
            5 - Encerrar`)    

            
            if(Escolha >= 1 && Escolha < 5){
                switch(Escolha){
                    case "1": 
                        InserirVenda()
                        break
                    case "2":
                        VerVendas()
                        break
                    case "3":
                        InserirDespesa()
                        break
                    case "4":
                        VerDespesas()
                        break
                }
            }


    } while (Escolha != 5);
}

function InserirVenda(Venda, TotalVendido, NumeroVendas){
    let Venda, TotalVendido = 0, NumeroVendas = 0

    Venda = Number(prompt("Digite o valor da sua venda"))
    TotalVendido = TotalVendido + Venda
    NumeroVendas++

    
    return
}

function VerVendas(){
    alert(`O numero de vendas hoje é: ${numero}
        O Valor total vendido hoje é: ${total}`)
}

menu()