

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

// Milestone 1
// Partendo dalla seguente struttura dati, 
// mostriamo in pagina tutte le icone disponibili come da layout.


// Milestone 2
// Coloriamo le icone per tipo



const iconsFiltred = icons.map ((elements)=>{
    return elements;
})

/**
 * Sono due argomenti della funzione. 
 * Filtra originalList a seconda sella scelta, prima choice
 * @param {*} choice  ['all', 'user', 'vegetable', 'animal'] 
 * @param {*} originalList 
 */

function filterIcons(choice, originalList){

  return originalList.filter((icon)=>{

        //ritornaimo TRUE solo se corrisponde al filtro.
        if(choice === 'all'){
            return true;
        }
        if (coice === icon.type){
            return true;
        }

        //se non è riuescito ad attivare
        //gli altri return, allora
        return false;
    })

};


function listIconsToHTML(filter){

    const iconsFiltered = filterIcons (filter, icons);

     let containerHtml = document.querySelector('.icons-content');
     containerHtml.innerHTML='';

    iconsFiltered.forEach((icon) => {
    
        const { name, prefix, family, type } = icon;
        console.log(icon)
        
        containerHtml.innerHTML += `
      
        <div class="icon-card col"> 
           <div class="icon-card-inner">
              <div class="icon ${type}">
                 <i class ="${family} ${prefix}${name}"></i> 
              </div>
              <div class="name">${name}</div>
           </div>
        </div>
        `
    });
};

listIconsToHTML('all');

const selectElement = document.querySelector('.type-select');

selectElement.addEventListener('change', (event)=>{
    //event è la descrizione dell'evento e contiene 
    // in event.target.value il valore della select selezionata.
    listIconsToHTML(event.target.value);
});


// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone