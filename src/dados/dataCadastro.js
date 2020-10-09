const dataCadastro = [
    {
      "descricao": "Auto de penhora",
      "quantidade": 1
    },
    {
      "descricao": "Carta de sentença",
      "quantidade": 2
    },
    {
      "descricao": "Cédula de Crédito Bancário",
      "quantidade": 3
    },
    {
      "descricao": "Cédula de Crédito Bancário Penhor",
      "quantidade": 1
    },
    {
      "descricao": "Cédula rural hipotecária",
      "quantidade": 1
    },
    {
      "descricao": "Cédula rural pignoratícia",
      "quantidade": 3
    },
    {
      "descricao": "Contrato de abertura de teto e outras avenças",
      "quantidade": 1
    },
    {
      "descricao": "Escritura pública de abertura de crédito com garantia hipotecária",
      "quantidade": 1
    },
    {
      "descricao": "Escritura pública de compra e venda",
      "quantidade": 70
    },
    {
      "descricao": "Escritura pública de compra e venda Cohapar",
      "quantidade": 1
    },
    {
      "descricao": "Escritura pública de compra e venda com condição resolutiva",
      "quantidade": 1
    },
    {
      "descricao": "Escritura pública de dação em pagamento",
      "quantidade": 2
    },
    {
      "descricao": "Escritura pública de doação",
      "quantidade": 2
    },
    {
      "descricao": "Escritura pública de doação com reserva de usufruto",
      "quantidade": 5
    },
    {
      "descricao": "Escritura pública de instituição e convenção de condomínio com divisão amigável",
      "quantidade": 2
    },
    {
      "descricao": "Escritura pública de inventário",
      "quantidade": 5
    },
    {
      "descricao": "Escritura pública de pacto antenupcial",
      "quantidade": 2
    },
    {
      "descricao": "Escritura pública de permuta",
      "quantidade": 3
    },
    {
      "descricao": "Escritura pública de promessa de permuta com garantia hipotecária",
      "quantidade": 1
    },
    {
      "descricao": "Escritura pública de servidão",
      "quantidade": 10
    },
    {
      "descricao": "Escritura pública de transmissão de domínio",
      "quantidade": 1
    },
    {
      "descricao": "Formal de partilha",
      "quantidade": 2
    },
    {
      "descricao": "Instrumento particular de abertura de matrícula",
      "quantidade": 3
    },
    {
      "descricao": "Instrumento particular de aditivo",
      "quantidade": 2
    },
    {
      "descricao": "Instrumento particular de aditivo de cédula de crédito bancário",
      "quantidade": 3
    },
    {
      "descricao": "Instrumento particular de aditivo de cédula de crédito bancário prazo",
      "quantidade": 4
    },
    {
      "descricao": "Instrumento particular de averbação",
      "quantidade": 2
    },
    {
      "descricao": "Instrumento particular de averbação de endereço",
      "quantidade": 2
    },
    {
      "descricao": "Instrumento particular de cancelamento de alienação fiduciária",
      "quantidade": 5
    },
    {
      "descricao": "Instrumento particular de cancelamento de caução",
      "quantidade": 1
    },
    {
      "descricao": "Instrumento particular de cancelamento de cédula de crédito bancário",
      "quantidade": 1
    },
    {
      "descricao": "Instrumento particular de cancelamento de cédula rurais",
      "quantidade": 2
    },
    {
      "descricao": "Instrumento particular de cancelamento de cláusula resolutiva",
      "quantidade": 3
    },
    {
      "descricao": "Instrumento particular de cancelamento de hipoteca",
      "quantidade": 1
    },
    {
      "descricao": "Instrumento particular de cancelamento de usufruto",
      "quantidade": 1
    },
    {
      "descricao": "Instrumento particular de cessão de direitos com alienação fiduciária",
      "quantidade": 1
    },
    {
      "descricao": "Instrumento particular de compra e venda COHAPAR",
      "quantidade": 1
    },
    {
      "descricao": "Instrumento particular de compra e venda com alienação fiduciária 50%",
      "quantidade": 7
    },
    {
      "descricao": "Instrumento particular de construção",
      "quantidade": 3
    },
    {
      "descricao": "Instrumento particular de instituição e convenção de condomínio",
      "quantidade": 3
    },
    {
      "descricao": "Instrumento particular de integralização de capital",
      "quantidade": 1
    },
    {
      "descricao": "Instrumento particular de penhor mercantil",
      "quantidade": 1
    },
    {
      "descricao": "Instrumento particular de retificação administrativa",
      "quantidade": 1
    },
    {
      "descricao": "Instrumento particular de subdivisão",
      "quantidade": 1
    },
    {
      "descricao": "Mandado de imissão de posse",
      "quantidade": 1
    },
    {
      "descricao": "Ofício de cancelamento de indisponibilidade de bens",
      "quantidade": 4
    },
    {
      "descricao": "Ofício de cancelamento de penhora",
      "quantidade": 5
    },
    {
      "descricao": "Ofício de indisponibilidade de bens",
      "quantidade": 3
    },
    {
      "descricao": "Ofício de penhora",
      "quantidade": 4
    },
    {
      "descricao": "Termo de penhora",
      "quantidade": 7
    },
    {
      "descricao": "Termo de retificação de penhora",
      "quantidade": 1
    }
  ]

function QtdCad(){
  let aux = []
  var i=0
  while (i<dataCadastro.length) {
    aux.push(dataCadastro[i].quantidade)
    i+=1
  }
  return aux
}

function DescCad(){
  let aux = []
  var i=0
  while (i<dataCadastro.length) {
    aux.push(dataCadastro[i].descricao)
     i+=1
  }
  return aux
}

const QatdCad = QtdCad()
const DesCad = DescCad()

export {QatdCad, DesCad}