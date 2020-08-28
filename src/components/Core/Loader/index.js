import React from 'react';
import PropTypes from 'prop-types';
import { LoaderWrapper, Loader, FixedLoaderWrapper, FixedLoader } from './Loader';

const LoaderComponent = ({ type, height }) => {
	switch (type) {
		case 'fixed': {
			return (
				<FixedLoaderWrapper id='loader'>
					<FixedLoader />
				</FixedLoaderWrapper>
			);
		}

		case 'basic': {
			return (
				<LoaderWrapper height={height} id='loader'>
					<Loader />
				</LoaderWrapper>
			);
		}

		default: {
			return (
				<LoaderWrapper id='loader'>
					<Loader />
				</LoaderWrapper>
			);
		}
	}
};

LoaderComponent.defaultProps = {
	type: 'basic',
	height: '300px'
};

LoaderComponent.propTypes = {
	type: PropTypes.string
};

export default LoaderComponent;
