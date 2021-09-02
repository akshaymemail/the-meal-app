class Meal {
  constructor(
    id,
    categoryids,
    title,
    affordability,
    complexity,
    imageUrl,
    duration,
    ingredients,
    step,
    isGlutenFree,
    isVegan,
    isVegetarian,
    isLactoseFree
  ) {
    ;(this.id = id),
      (this.categoryids = categoryids),
      (this.title = title),
      (this.affordability = affordability),
      (this.complexity = complexity),
      (this.imageUrl = imageUrl),
      (this.duration = duration),
      (this.ingredients = ingredients),
      (this.step = step),
      (this.isGlutenFree = isGlutenFree),
      (this.isVegan = isVegan),
      (this.isVegetarian = isVegetarian),
      (this.isLactoseFree = isLactoseFree)
  }
}

export default Meal
