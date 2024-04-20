// 1. Các kiểu dữ liệu cơ bản
// number: Số
// string: Chuỗi / văn bản
// boolean: true / false
// Date: Ngày / giờ
// object: Đối tượng
// any: Không xác định
// undefined: Không tồn tại
// null: Rỗng

// 2. Khởi tạo biến (có kiểu dữ liệu)
const a: string = "1";
let b: Date = new Date();
var c: boolean = true;
let d: any;
d = "Hello World!";
d = 1;
d = true;
d = undefined;
d = null;
d = {
    name: "Nguyen Vinh Quang",
    description: "Simp gai bmt"
};
d = [ 1, 2, 3, 4 ];

// 3. Viết hàm
function printLowerCase(content: string): void {
    console.log(
        content.toLowerCase()
    );
}

const printLowerCase2 = (content: string): void => {
    console.log(
        content.toLowerCase()
    );
}

// 4. Định kiểu hàm
// (tham số 1: kiểu tham số 1, ...) => kiểu dữ liệu trả ra
let printNumber: (num: number) => void;

function toLowerCase(content: string, callback: (lowerCaseContent: string) => void): void {
    const lowerCaseContent: string = content.toLowerCase();
    callback(lowerCaseContent);
}

// toLowerCase(
//     "Hello World!",
//     function (lowerCaseContent: string): void {
//         console.log(lowerCaseContent);
//     }
// );

// 5. Kiểu đa kiểu dữ liệu
let a1: string | number = "Hello World!";
a1 = 1000;

// 6. Kiểu danh sách
const a2: string[] = [];

// 7. Kiểu đối tượng
const a3: { id: string, name: string, birth: Date } = {
    birth: new Date(),
    id: "CHUTAN01",
    name: "Tình yêu mới chớm nở xin đừng lụi tàn"
};

// 8. Kiểu dữ liệu tùy chỉnh
type StringOrNumber = string | number;
let stringOrNumber: StringOrNumber = "Hello World!";
stringOrNumber = 1235;

// 9. Interface cho JSON
// => Interface cho JSON có thể có fields và có thể có phương thức
interface Person {
    id: string,
    name: string,
    birth: Date,
    printInfo(): void;
    setName(name: string): void;
}
const person: Person = {
    birth: new Date(),
    id: "WAN",
    name: "MỘT TAY TÔI GIỮ CHỊ MỘT TAY TÔI CHẤP ANH",
    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Date of birth: ${this.birth}`);
    },
    setName(name) {
        this.name = name;
    },
};

// 10. Interface cho class
// => Không có field
interface Converter<F, T> {
    convert(from: F): T;
}

class NumberToStringConverter implements Converter<number, string> {
    // Constructors:
    public constructor() {

    }

    // Methods:
    public convert(from: number): string {
        return `${from}`;
    }
}

const numberToStringConverter: Converter<number, string> = new NumberToStringConverter();
const numberString: string = numberToStringConverter.convert(2500);
console.log(`numberString value: ${numberString}`);
console.log(`type of numberString: ${typeof numberString}`);

// 11. Mối quan hệ kế thừa interface
interface Reversable<F, T> {
    reverse(from: F): T;
}

interface ReversableConverter<F, T> extends Converter<F ,T>, Reversable<T, F> {

}

class NumberStringConverter implements ReversableConverter<number, string> {
    // Constructors:
    public constructor() {

    }

    // Methods:
    public convert(from: number): string {
        // return "" + from;
        return `${from}`;
    }

    public reverse(from: string): number {
        return Number.parseFloat(from);
    }
}

const numberStringConverter: ReversableConverter<number, string> = new NumberStringConverter();

// 12. Class
class User {
    // Fields:
    private username?: string;
    protected name?: string;
    public password?: string;

    // Constructors:
    public constructor(username?: string, name?: string, password?: string) {
        this.username = username;
        this.name = name;
        this.password = password;
    }

    // Getters / setters:
    public get Username(): string | undefined {
        return this.username;
    }

    public set Username(username: string | undefined) {
        this.username = username;
    }

    public get Name(): string | undefined {
        return this.name;
    }

    public set Name(name: string | undefined) {
        this.name = name;
    }

    public get Password(): string | undefined {
        return this.password;
    }

    public set Password(password: string | undefined) {
        this.password = password;
    }
}

const user: User = new User();
user.Username = "nguyenvinhquang";
user.Name = "Nguyen Vinh Quang";
user.Password = "thichgaibmt";

console.log(`Username: ${user.Username}`);
console.log(`Name: ${user.Name}`);
console.log(`Password: ${user.Password}`);

// 12. Abstract class
interface DataProvider<T> {
    provide(): T;
}

abstract class NumberProvider implements DataProvider<number> {
    // Fields:
    protected dataSource: number;

    // Constructors:
    public constructor() {
        this.dataSource = 250;
    }

    // Methods:
    public abstract provide(): number;
}

class NumberProviderImpl extends NumberProvider {
    // Constructors:
    public constructor() {
        super();
    }

    // Methods:
    public provide(): number {
        return this.dataSource;
    }
}

const numberProvider: NumberProvider = new NumberProviderImpl();
console.log(numberProvider.provide());

// 13. Enums
// 13.1. Enums truyền thống
enum OrderType {
    SELL = "Đơn bán",
    BUY = "Đơn nhập"
}

console.log(OrderType.SELL);
console.log(OrderType.BUY);

// 13.2. Enums theo kiểu
type HTTPMethod = "POST" | "PUT" | "DELETE" | "GET" | "PATCH" | "OPTIONS";
const getMethod: HTTPMethod = "OPTIONS";