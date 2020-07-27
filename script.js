// Grab usable elements 
const form = document.querySelector('form');
const submitBtn = document.querySelector('.submit-button');
const ingredientBtn = document.querySelector('.ingredient-button'); 
const newIngredient = document.querySelector('.ingredients');
const addListOfStep = document.querySelector('.steps');
const stepBtn = document.querySelector('.step-button');

// Creat a function that handle the ingredients html
const addNewIngredient = event => {
    event.preventDefault();
    const ingredientHTML =`
        <div class="addIngredient">
            <input class="ingredient" type="text" id="ingredient" name="name"/>
        </div>
    `;
   newIngredient.insertAdjacentHTML('afterend', ingredientHTML);
};

// Creat a function that handle the step html
const addSteps = event => {
    event.preventDefault();
    const stepsHTML =`
        <div class="add-steps">
            <input class="step-input" type="text" id="step" name="name" placeholder="Give the steps" required />
        </div>
    `;
   addListOfStep.insertAdjacentHTML('afterend', stepsHTML);
};

// a function that handle the submit button
const handleSubmitBtn = event => {
    event.preventDefault();
    if (event.target.matches('form')) {
        const form = event.target;
        const { title, picture, difficulty, timing, ingredients, steps } = form;

        const formHTML = ``;

    };
};
// Listen for the events
ingredientBtn.addEventListener('click', addNewIngredient);
stepBtn.addEventListener('click', addSteps);
submitBtn.addEventListener('click', handleSubmitBtn);