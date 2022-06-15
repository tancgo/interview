interface Article {
  articleId: string;
  title: string;
  content: string;
  status: number;
}

// Partial 将传入的所有属性变为可选
type MyPartial<T> = { [P in keyof T]?: T[P] };
type A = MyPartial<Article>;

// 将传入的所有属性变为必选项，这个和 Partial 相反
type MyRequired<T> = { [P in keyof T]-?: T[P] };
type B = MyRequired<A>;
