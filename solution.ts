function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  return value;
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

interface Item {
  title: string;
  rating: number;
}

function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}

function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const mergedArray: (string | number)[] = [];

  const exists = (arr: (string | number)[], val: string | number): boolean => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        return true;
      }
    }
    return false;
  };

  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    if (item !== undefined && !exists(mergedArray, item)) {
      mergedArray[mergedArray.length] = item;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const item = arr2[i];
    if (item !== undefined && !exists(mergedArray, item)) {
      mergedArray[mergedArray.length] = item;
    }
  }

  return mergedArray;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    const basePrice = product.price * product.quantity;
    const discountAmount = product.discount
      ? (basePrice * product.discount) / 100
      : 0;
    return total + (basePrice - discountAmount);
  }, 0);
}
