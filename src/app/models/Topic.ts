export class Topic {
    id: number;
    userId:number;
    title: string;
    content: string;
    creationDate:string;
    lastUpdateDate:string
  
    constructor() {
      this.id = 1;
      this.userId=1
      this.title = '';
      this.content = '';
      this.creationDate = '',
      this.lastUpdateDate=''
    }
  } 