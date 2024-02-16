import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

	* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
	}

	:focus {
		outline: 0;
		/* box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']}; */
	}

	body {
		background: ${(props) => props.theme['background']};
		/* color: ${(props) => props.theme['gray-300']}; */
		-webkit-font-smoothing: antialiased;
	}

	h1, h2, h3, h4, h5 {
		font-family: "Baloo 2", sans-serif;
	}

	body, input, textarea, button {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}
`
