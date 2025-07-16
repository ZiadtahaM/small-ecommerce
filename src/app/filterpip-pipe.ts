import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpip'
  ,standalone: true
})
export class FilterpipPipe implements PipeTransform {

  transform(value: any,userinputtitle: string): any[] {
      if (!userinputtitle || userinputtitle.trim() === '') {
      return value;
    }
    if (!value) {
      return [];
    }
    if(value.length===0) return value
    const posts =[]
    for(const post of value){
      if(post.title.toLowerCase().includes(userinputtitle.toLowerCase())){
        posts.push(post)
      }
    }
    return posts; 
  }

}
