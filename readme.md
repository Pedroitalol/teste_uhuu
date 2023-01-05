Para rodar no docker:
    npx create-next-app --example with-docker nextjs-docker
    cd nextjs-docker
    docker build -t nextjs-docker .
    docker run -p 3000:3000 nextjs-docker

Parar rodar com npm:
    npx create-next-app@latest teste-uhuu
    npm run dev

Para rodar um exemplo de API:
    npx create-next-app --example api-routes-rest api-routes-rest-app
    cd api-routes-rest-app
    npm run dev

O que é necessário para o sistema:
    Tabela de clientes: nome, peso e endereço(FK)
    Tabela de endereços: Logradouro, Número, Bairro, Complemento, Cidade, Estado, País, Latitude e Longitude
