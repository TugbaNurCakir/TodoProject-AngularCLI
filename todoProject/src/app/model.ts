export class Model{
  user: any;
  items: any;


  constructor(){
      this.user = "Tugbanur";
      this.items = [
        new TodoItem("Spor", false),
        new TodoItem("Yemek", false),
        new TodoItem("Angular Proje", false),
        new TodoItem("İngilizce", false),

      ];
  }
}

export class TodoItem{
  description: any;
  action: any;

  constructor(description: any, action: any){
    this.description=description;
    this.action = action;
  }
}
