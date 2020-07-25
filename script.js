const ingredientBtn = document.querySelector('.ingredient-button'); 
const newIngredient = document.querySelector('.ingredients');
const addListOfStep = document.querySelector('.steps');
const stepBtn = document.querySelector('.step-button');

const addNewIngredient = event => {
    event.preventDefault();
    const ingredientHTML =`
        <div class="addIngredient">
            <input class="ingredient" type="text" id="ingredient" name="name"/>
        </div>
    `;
   newIngredient.insertAdjacentHTML('afterend', ingredientHTML);
};

const addSteps = event => {
    event.preventDefault();
    const stepsHTML =`
        <div class="add-steps">
            <input class="step-input" type="text" id="step" name="name" placeholder="Give the steps" required />
        </div>
    `;
    // stepInput.value = '';
   addListOfStep.insertAdjacentHTML('afterend', stepsHTML);
};

ingredientBtn.addEventListener('click', addNewIngredient);
stepBtn.addEventListener('click', addSteps);