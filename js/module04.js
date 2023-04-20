// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// }

// const deliverPizza = pizzaName => console.log(`Delivering pizza ${pizzaName}.`);

// function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// }

// const eatPizza = pizzaName => console.log(`Eating pizza ${pizzaName}`);

// makePizza('Royal Grand', deliverPizza);

// makePizza('Ultracheese', eatPizza);

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}`);
// });

//-------------------------------------------------------------------------------------------------------------------

const pizzaPalace = {
    pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
    order(pizzaName, callback1, callback2) {
        const { pizzas } = this;

        if (!pizzas.includes(pizzaName)) {
            const error = `There is no pizza with a name ${pizzaName} in the assortment.`;

            callback2(error);
            return;
        }

        callback1(pizzaName);
        return;
    },
};

// Callback for onSuccess
function makePizza(pizzaName) {
    // return `Your order is accepted. Cooking pizza ${pizzaName}.`;
    console.log(`Your order is accepted. Cooking pizza ${pizzaName}.`);
}

// Callback for onError
function onOrderError(error) {
    // return `Error! ${error}`;
    console.log(`Error! ${error}`);
}

// Method calls with callbacks
pizzaPalace.order('Smoked', makePizza, onOrderError);
pizzaPalace.order('Four meats', makePizza, onOrderError);
pizzaPalace.order('Big Mike', makePizza, onOrderError);
pizzaPalace.order('Vienna', makePizza, onOrderError);

//-------------------------------------------------------------------------------------------------------------------
