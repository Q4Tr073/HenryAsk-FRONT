import { TagsEnum } from "../app/Interfaces/interfaceExercise";
export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  city: string;
  type: string;
  role: 0 | 1 | 2 | 3 | 4 | 5;
  user_name: string;
  profile_picture: string;
  banner: string;
  biography: string;
  isBanned: boolean;
  posts: Array<string> & any;
  answers: Array<string> & any;
  comments: Array<string> & any;
  own_henry_coin: number;
  give_henry_coin: number;
  theoric: Array<string>;
  excersices: Array<string>;
  github: string;
  linkedin: string;
  coffee:string;
  avatar:
    | "https://res.cloudinary.com/henryask/image/upload/v1651459729/avatares/unicorn_ntmtyp.png"
    | "https://res.cloudinary.com/henryask/image/upload/v1651459728/avatares/pig_tzhrjl.png"
    | "https://res.cloudinary.com/henryask/image/upload/v1651459728/avatares/pigeon_yfv9ka.png"
    | 'https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/secret_wqhn3g.png'
    | 'https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/score_hghnpc.png'
    | 'https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/sandwich_s6vidk.png'
    | 'https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/speedrun_t56kga.png'
    | 'https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/ice_breaker_fyfsw4.png'
    | 'https://res.cloudinary.com/henryask/image/upload/v1651879289/avatares/movie_k5yk2g.png'
    | "";
  createdAt?: string;
  coffee: string;
  userCoin: Array<string>;
}
export interface InitialState {
  data: User;
  loading: string;
  profile: User;
}

export interface isAlumnOrInstructor {
  user: Array;
  height: number;
}
export interface Answer {
  _id: string;
  owner: Owner;
  content: string;
  post: string;
  comments: Array<Comment>;
  createdAt: string;
}

export interface Theoric {
  _id: string;
  owner: Owner;
  title: string;
  content: string;
  author: string;
  images: Array[string];
  comments: Array[string];
}

export interface Comment {
  _id: string;
  owner: Owner;
  answer: string;
  content: string;
}
// INTERFACES PARA GET POST './getPostsForum.ts';

/*   export enum Type {
    prep,
    learning,
  } */

export enum Tags {
  JavaScript = "JavaScript",
  PostgreSQL = "PostgreSQL",
  Sequelize = "Sequelize",
  Nodejs = "Nodejs",
  Express = "Express",
  React = "React",
  Redux = "Redux",
  CSS = "CSS",
  HTML = "HTML",
  SQL = "SQL",
  Modulo = "Modulo",
  Otros = "Otros",
}

export interface Column {
  id: "name" | "question" | "description" | "tags" | "open";
  label: string;
  maxWidth?: number | string;
  minWidth?: number;
  align?: "right" | "center";
  format?: (value: number) => string;
}

export interface isAlumnOrInstructor {
  user: Array;
  height: number;
}

export interface Owner {
  _id: string;
  user_name: string;
  profile_picture: string;
  avatar: string;
  role: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Posts {
  _id: string;
  question: string;
  description: string;
  owner: Owner; //cambiado de string a any por Agus ya que se resolvió el tema de las Refs
  createdAt: string;
  open: boolean;
  answers: Array<string>;
  type: number;
  tags: Array<string>;
}

export interface propsPost {
  post: Array<Posts>;
}

export interface height {
  height: number;
}
// ----------------------------------> Termina interfaces posts
// ---------------------------------->

export interface InitialState {
  data: User;
  loading: string;
  profile: User;
}
export interface Error {
  errorTag: string;
  errorSubmit: string;
}
/**
 * @TableExercise
 */
export interface ColumnTableExercise {
  id: "owner" | "title" | "description" | "code" | "test" | "tags";
  label: "Creador" | "Título" | "Descripción" | "Código" | "Test" | "Tags";
  maxWidth?: number | string;
  minWidth?: number;
  align?: "center";
  format?: (value: any) => OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  } & string;
}
/**
 * @TableTheoric
 */
export interface ColumnTableTheoric {
  id: "owner" | "title" | "content" | "author" | "images" | "comments";
  label:
    | "Creador"
    | "Título"
    | "Contenido"
    | "Autor"
    | "Imágenes"
    | "Comentarios";
  maxWidth?: number | string;
  minWidth?: number;
  align?: "center";
  format?: (value: string & Array<string>) => OverridableComponent<
    SvgIconTypeMap<{}, "svg">
  > & {
    muiName: string;
  } & string;
}

// interface report
export interface Report {
  owner: User;
  description: string;
  status: string;
  reason: string;
  post: {} | Posts;
  answer: {} | Answer;
  comment: {} | Comment;
}
//------//
