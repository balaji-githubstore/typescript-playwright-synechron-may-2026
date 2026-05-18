export class Category {
  id!: number;
  name!: string;
}

export class Tag {
  id!: number;
  name!: string;
}

export class Pet {
  id!: number;
  category!: Category;
  name!: string;
  photoUrls!: string[];
  tags!: Tag[];
  status!: string;
}