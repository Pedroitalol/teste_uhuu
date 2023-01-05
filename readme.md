# Detalhes
<p>
Sobre o sistema, não está nada funcional, foi feita apenas uma parte do back e no primeiro erro do front, não deu pra nem começar. O principal motivo foi a falta de tempo, esse teste me pegou em um momento errado e eu nem estava informado dele, o que foi um azar pra mim. Nem queria subir e enviar para vcs, mas isso significaria que a minha chance de entrar seria 0, e não gostei disso, pq realmente dei valor a seleção até agora, e se enviar, só em não ser impossível, eu acho interessante. Enfim, não vou ter mais tempo de refinar essa descrição, mas está ai, antes de terminar vou agradecer pela oportunidade, mesmo que esse teste não tenha sido produtivo, ainda foi interessante, principalmente tentar, talvez com mais tempo e consição, seguiria melhor. Mas enfim, até uma outra oportunidade.
</p>

# Para rodar no docker:
    npx create-next-app --example with-docker nextjs-docker
    cd nextjs-docker
    docker build -t nextjs-docker .
    docker run -p 3000:3000 nextjs-docker

# Parar rodar com npm:
    npx create-next-app@latest teste-uhuu
    npm run dev

# Para rodar um exemplo de API:
    npx create-next-app --example api-routes-rest api-routes-rest-app
    cd api-routes-rest-app
    npm run dev

# O que é necessário para o sistema:
    Tabela de clientes: nome, peso e endereço(FK)
    Tabela de endereços: Logradouro, Número, Bairro, Complemento, Cidade, Estado, País, Latitude e Longitude
