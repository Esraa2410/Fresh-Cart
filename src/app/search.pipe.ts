import { Pipe, PipeTransform } from '@angular/core';
import { Products ,ICategory } from './products';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(products:Products[] ,searchTerm:string): Products[]  {
    return products?.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase()));
  }

}
