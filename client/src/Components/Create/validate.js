const regexCharacters = /^[A-Za-z\s]*$/;
const regexNumbers = /^[0-9]+$/;

export const validate = (input) => {

const errors = {}

!input.name ? errors.name = "Please enter a name"
: (!regexCharacters.test(input.name)) ?  errors.name = "Name can only contain characters"
: input.name.length > 30 ? errors.name = "Name must not exceed 30 characters"
: errors.name = null;

const minWeight = parseInt(input.minWeight);
const maxWeight = parseInt(input.maxWeight);
!input.minWeight ? errors.minWeight = "Please enter a weight value"
: minWeight < 2 ? errors.minWeight = "Weight must be over 2kgs"
: (!regexNumbers.test(input.minWeight)) ? errors.minWeight = "Weight can only contain numbers"
: minWeight > 100 ? errors.minWeight = "Weight must not exceed 100kg"
: minWeight > maxWeight ? errors.minWeight = "Min weight must not be higher than Max weight"
: errors.minWeight = null;

!input.maxWeight ? errors.maxWeight = "Please enter a weight value"
: (!regexNumbers.test(input.maxWeight)) ? errors.maxWeight = "Weight can only contain numbers"
: maxWeight > 150 ? errors.maxWeight = "Weight must not exceed 150kg"
: maxWeight < minWeight ? errors.maxWeight = "Max weight must not be lower than Min weight"
: errors.maxWeight = null;

const minHeight = parseInt(input.minHeight);
const maxHeight = parseInt(input.maxHeight);
!input.minHeight ? errors.minHeight = "Please enter a height value"
: (!regexNumbers.test(input.minHeight)) ? errors.minHeight = "Height can only contain numbers"
: minHeight > 120 ? errors.minHeight = "Height must not exceed 120cm"
: minHeight > maxHeight ? errors.minHeight = "Min height must not be higher than Max height"
: errors.minHeight = null;

!input.maxHeight ? errors.maxHeight = "Please enter a height value"
: (!regexNumbers.test(input.maxHeight)) ? errors.maxHeight = "Height can only contain numbers"
: maxHeight > 150 ? errors.maxHeight = "Height must not exceed 150cm"
: errors.maxHeight = null;

const life_span = parseInt(input.life_span);
!input.life_span ? errors.life_span = "Please enter a life span value"
: life_span < 8 ? errors.life_span = "Life span must be over 8 years"
: (!regexNumbers.test(input.maxHeight)) ? errors.maxHeight = "Life span can only contain numbers"
: life_span > 20 ? errors.life_span = "Life span must not exceed 20 years"
: errors.life_span = null;


return errors;
}





