import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';

import styles from './styles';

const Container = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

Container.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

Container.defaultProps = {
  //name: 'Stranger'
};

export default Container;
