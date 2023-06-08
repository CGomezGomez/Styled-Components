import { StyledButton } from "./styles";

const Button = () => {

	return (
    <StyledButton color='blue' padding="2rem" onClick={()=> console.log('CLICK')}>Soy un boton</StyledButton>
    );
};

export default Button;