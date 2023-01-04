create table `teste_uhuu`.enderecos (
      `id_endereco` INT(30) NOT NULL AUTO_INCREMENT,
      `logradouro` VARCHAR(40) CHARACTER SET utf8 DEFAULT NULL,
      `numero` INT(5),
      `bairro` VARCHAR(40) CHARACTER SET utf8 NOT NULL,
      `complemento` VARCHAR(40) CHARACTER SET utf8 NOT NULL,
      `cidade` VARCHAR(40) CHARACTER SET utf8 NOT NULL,
      `estado` VARCHAR(40) CHARACTER SET utf8 NOT NULL,
      `pais` VARCHAR(40) CHARACTER SET utf8 NOT NULL,
	  `latitude` DOUBLE NOT NULL,
	  `longitude` DOUBLE NOT NULL,
	  PRIMARY KEY (`id_endereco`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

create table `teste_uhuu`.entregas (
      `id_entrega` int(30) NOT NULL AUTO_INCREMENT,
      `nome_cliente` VARCHAR(40) CHARACTER SET utf8 NOT NULL,
      `peso` DOUBLE NOT NULL,
	  `id_endereco` INT(30) NOT NULL,
	  PRIMARY KEY (`id_entrega`),
      foreign key (`id_endereco`) references `enderecos`(`id_endereco`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

insert into enderecos value(null, 'coisa', 23, 'bairro', 'complemento', 'cidade', 'estado', 'paos', '123.1', '-134.54');
insert into entregas values(null, 'Fulano', '100.2', 1), (null, 'Beltrano', '30', 1);

SELECT * FROM entregas join enderecos on entregas.id_endereco = enderecos.id_endereco;
SELECT * FROM entregas;
SELECT * FROM enderecos;