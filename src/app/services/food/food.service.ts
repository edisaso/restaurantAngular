import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :Food[]{
    return  this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  getAllTags(): Tag[] {
    return [
      { name: 'Всички', count: 14 },
      { name: 'Пица', count: 2 },
      { name: 'Обяд', count: 3 },
      { name: 'Бургер', count: 1 },
      { name: 'Картофи', count: 2 },
      { name: 'Супа', count: 1 },
      { name: 'Десерт', count: 3 },
    ];
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == "Всички" ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Пица-пеперони',
        cookTime: '10-20',
        price: 14,
        favorite: false,
        origins: ['Италия'],
        stars: 4.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['Пица', 'Обяд'],
      },
      {
        id: 2,
        name: 'Кюфтета',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['България', 'Турция'],
        stars: 4.7,
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['Обяд'],
      },
      {
        id: 3,
        name: 'Бургер',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Германия', 'Америка'],
        stars: 3.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['Бургер'],
      },
      {
        id: 4,
        name: 'Пържени картофи',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Белгия', 'Франция'],
        stars: 3.3,
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['Картофи'],
      },
      {
        id: 5,
        name: 'Пилешка супа',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['Индия', 'Азия'],
        stars: 3.0,
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['Супа'],
      },
      {
        id: 6,
        name: 'Пица-Веган',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['Италия'],
        stars: 4.0,
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['Пица', 'Обяд'],
      },
      {
        id: 7,
        name: 'Кекс със орехи',
        price: 13,
        cookTime: '60-70',
        favorite: false,
        origins: ['България'],
        stars: 2.1,
        imageUrl: '/assets/images/foods/keksorehi.jpg',
        tags: ['Десерт', 'Кекс'],
      },
      {
        id: 8,
        name: 'Тиквени захаросани понички',
        price: 7,
        cookTime: '15-20',
        favorite: true,
        origins: ['Америка'],
        stars: 5.0,
        imageUrl: '/assets/images/foods/tikveniponichki.jpg',
        tags: ['Десерт', 'Понички'],
      },
      {
        id: 9,
        name: 'Крамбъл с картофи и орехи',
        price: 20,
        cookTime: '35-40',
        favorite: false,
        origins: ['Америка'],
        stars: 3.1,
        imageUrl: '/assets/images/foods/sladkikarto.jpg',
        tags: ['Десерт', 'Картофи'],
      },
    ];
  }
}
