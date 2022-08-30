import { baseURL } from './../shared/baseurl';
import { Component, OnInit, inject} from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent implements OnInit {
errMess : string
  dishes: Dish[] = DISHES;

  selectedDish: Dish;
  onSelect(dish: Dish) {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);  }
  






  constructor(private dishService : DishService,
    @inject('BaseURL') private baseURL) { }

  ngOnInit(): void {

  }

}

