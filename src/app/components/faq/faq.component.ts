import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})

export class FaqComponent {

  @Input()
  title = 'FAQ';

  @Input()
  multi = false;

  @Input()
  displayMode = 'default'; // or flat

}

const catgories = document.querySelectorAll('#catgories .category');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');


catgories.forEach((category) => {
  console.log(category);
  const categotyElement = category as HTMLInputElement;
	category.addEventListener('click', (e) => {
    const element = e.currentTarget as HTMLInputElement;
    
  window.alert('Okay, si estas seguro.');
		catgories.forEach((elemento) => {
			elemento.classList.remove('activa');
		});
      element.classList.toggle('activa');
		  let activeCategory = categotyElement.dataset.category;	
      
      // Activamos el contenedor de preguntas que corresponde
		  contenedorPreguntas.forEach((contenedor) => {
        const contenedorElement = category as HTMLInputElement;
			if(contenedorElement.dataset.category === activeCategory){
				contenedor.classList.add('activo');
			} else {
				contenedor.classList.remove('activo');
			}
		});
	


	
	});
});

