-- ============================================================
-- VERSIN · Schema do Banco de Dados · MySQL · MVP
-- ============================================================

CREATE DATABASE IF NOT EXISTS versin CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE versin;

-- ------------------------------------------------------------
-- USUARIOS
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS USUARIOS (
  id_usuario   INT           NOT NULL AUTO_INCREMENT,
  nome_usuario VARCHAR(60)   NOT NULL,
  foto_perfil  VARCHAR(255)  DEFAULT NULL,
  biografia    TEXT          DEFAULT NULL,
  email        VARCHAR(120)  NOT NULL,
  senha_hash   VARCHAR(255)  NOT NULL,
  status_login ENUM('online','offline') NOT NULL DEFAULT 'offline',
  created_at   DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id_usuario),
  UNIQUE KEY uq_email (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ------------------------------------------------------------
-- CATEGORIAS
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS CATEGORIAS (
  id_categoria   INT         NOT NULL AUTO_INCREMENT,
  nome_categoria VARCHAR(80) NOT NULL,
  PRIMARY KEY (id_categoria)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO CATEGORIAS (nome_categoria) VALUES
  ('Tecnologia'),
  ('Ciência'),
  ('Inovação'),
  ('Filosofia');

-- ------------------------------------------------------------
-- POSTS
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS POSTS (
  id_post        INT  NOT NULL AUTO_INCREMENT,
  id_usuario     INT  NOT NULL,
  conteudo_texto TEXT NOT NULL,
  categoria_id   INT  DEFAULT NULL,
  data_criacao   DATE NOT NULL DEFAULT (CURRENT_DATE),
  hora_criacao   TIME NOT NULL DEFAULT (CURRENT_TIME),
  PRIMARY KEY (id_post),
  CONSTRAINT fk_post_usuario   FOREIGN KEY (id_usuario)   REFERENCES USUARIOS(id_usuario)   ON DELETE CASCADE,
  CONSTRAINT fk_post_categoria FOREIGN KEY (categoria_id) REFERENCES CATEGORIAS(id_categoria) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ------------------------------------------------------------
-- CURTIDAS
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS CURTIDAS (
  id_curtida   INT  NOT NULL AUTO_INCREMENT,
  id_usuario   INT  NOT NULL,
  id_post      INT  NOT NULL,
  data_curtida DATE NOT NULL DEFAULT (CURRENT_DATE),
  PRIMARY KEY (id_curtida),
  UNIQUE KEY uq_curtida (id_usuario, id_post),
  CONSTRAINT fk_curtida_usuario FOREIGN KEY (id_usuario) REFERENCES USUARIOS(id_usuario) ON DELETE CASCADE,
  CONSTRAINT fk_curtida_post    FOREIGN KEY (id_post)    REFERENCES POSTS(id_post)        ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ------------------------------------------------------------
-- MENSAGENS
-- ------------------------------------------------------------
CREATE TABLE IF NOT EXISTS MENSAGENS (
  id_mensagem       INT  NOT NULL AUTO_INCREMENT,
  id_remetente      INT  NOT NULL,
  id_destinatario   INT  NOT NULL,
  conteudo_mensagem TEXT NOT NULL,
  data_envio        DATE NOT NULL DEFAULT (CURRENT_DATE),
  hora_envio        TIME NOT NULL DEFAULT (CURRENT_TIME),
  PRIMARY KEY (id_mensagem),
  CONSTRAINT fk_msg_remetente    FOREIGN KEY (id_remetente)    REFERENCES USUARIOS(id_usuario) ON DELETE CASCADE,
  CONSTRAINT fk_msg_destinatario FOREIGN KEY (id_destinatario) REFERENCES USUARIOS(id_usuario) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
