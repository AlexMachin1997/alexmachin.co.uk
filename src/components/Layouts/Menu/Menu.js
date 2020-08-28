import styled from 'styled-components';

export const Container = styled.nav`
	display: flex;
	background-color: ${(props) => props.theme.black};
	justify-content: space-around;
	align-items: center;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	flex-wrap: wrap;
	/* padding: 1rem 0 0 0; */
	z-index: 10000;
	@media (max-width: 500px) {
		padding: 1rem 0 0 0;
	}
`;

export const NavbarBrand = styled.div`
	font-family: 'Kaushan Script', cursive;
`;

export const MenuItems = styled.ul`
	list-style-type: none;
	display: flex;
`;

export const MenuItem = styled.li`
	margin: 1rem;
	&:hover {
		cursor: pointer;
	}
`;
