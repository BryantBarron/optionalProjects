const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers(){
      return this._appetizers;
    },

    set appetizers(apps){
      this._appetizers = apps;
    },

    get mains(){
      return this._mains;
    },

    set mains(meals){
      this._mains = meals;
    },

    get desserts(){
      return this._desserts;
    },

    set desserts(sweets){
      this._desserts = sweets;
    },
  },

  get courses(){
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    };
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName){
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal(){
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
  }
};

menu.addDishToCourse('appetizers', 'egg rolls', 5.25);
menu.addDishToCourse('appetizers', 'meatballs', 6.25);
menu.addDishToCourse('appetizers', 'crab cakes', 4.75);

menu.addDishToCourse('mains', 'steak', 13);
menu.addDishToCourse('mains', 'chicken', 11);
menu.addDishToCourse('mains', 'fish', 12.75);

menu.addDishToCourse('desserts', 'ice cream', 2.75);
menu.addDishToCourse('desserts', 'brownies', 1.25);
menu.addDishToCourse('desserts', 'cheese cakes', 2.25);

let meal = menu.generateRandomMeal();

console.log(meal);
