// ts 高级工具类型实现
// 文章 https://markdowner.net/article/80348744310312960
// 视频 https://www.bilibili.com/video/BV1yU4y1y7WD/?spm_id_from=333.788&vd_source=7daaf6c5284ae79f57244a66272f2d3c
interface Article {
  articleId: string
  title: string
  content: string
  status: number
}

// Partial 将传入的所有属性变为可选
type MyPartial<T> = { [P in keyof T]?: T[P] }
type A = MyPartial<Article>

// 将传入的所有属性变为必选项，这个和 Partial 相反
type MyRequired<T> = { [P in keyof T]-?: T[P] }
type B = MyRequired<A>

// Record,该类型可以将 K 中所有的属性的值转化为 T 类型
{
  type MyRecord<K extends keyof any, T> = { [P in K]: T }

  type PetType = "dog" | "cat" | "fish"
  interface PetInfo {
    name: string
    age: number
  }

  type Pets = MyRecord<PetType, PetInfo>
}

// Pick 从 T 中取出 一系列 K 的属性
{
  type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
  interface PetInfo {
    name: string
    age: string
  }

  type NonVipInfo = MyPick<PetInfo, "name">
}

// 实现和Pick相反的功能Omit
{
  type MyOmit<T, U> = Pick<
    T,
    { [P in keyof T]: P extends U ? never : P }[keyof T]
  >
  interface PetInfo {
    name: string
    age: string
  }

  type NonVipInfo = MyOmit<PetInfo, "name">
}

// Exclude类型过滤 将某个类型中属于另一个的类型移除掉
{
  type MyExclude<T, U> = T extends U ? never : T

  // 一周（平常日）
  type Weekday =
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday"
  // 休息日
  type DayOff = "Saturday" | "Sunday"
  // 工作日
  type WorkDay = MyExclude<Weekday, DayOff>
}

// 使用Pick 和 Exclude 进行组合, 实现忽略对象某些属性功能的Omit
{
  type MyOmit<T, U> = Pick<T, Exclude<keyof T, U>>
  interface PetInfo {
    name: string
    age: string
  }

  type NonVipInfo = MyOmit<PetInfo, "age">
}

// Extract 提取共同的类型
{
  type MyExtract<T, U> = T extends U ? T : never
  // 休息日
  type DayOff = "Saturday" | "Sunday"
  // 会员日
  type VipDay = "Sunday" | "Monday"

  // 等价与 type DoubleDiscountDay = 'Sunday';
  type DoubleDiscountDay = MyExtract<DayOff, VipDay>
}

// ReturnType：提取函数的返回类型
const fn = (s: string, r: number): string[] | string => {
  return []
}

type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : any
type Res = MyReturnType<typeof fn>

// Parameters: 提取函数参数的类型
type MyParameters<T> = T extends (...args: infer P) => any ? P : any
type params = MyParameters<typeof fn>

// 想要获取一个Promise<xxx>类型中的xxx类型
type MyRes = Promise<number[]>;
type Unpacked<T> = T extends Promise<infer P> ? P : any
type resType = Unpacked<MyRes>;


