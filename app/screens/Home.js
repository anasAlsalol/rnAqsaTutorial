import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import { connect } from 'react-redux';

import {
  Container,
  Logo,
  InputWithButton,
  ClearButton,
  LastConverted,
  Header,
} from '../components';

import { changeCurrencyAmount, swapCurrency } from '../actions/currencies';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    lastConvertedDate: PropTypes.object,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string,
  };

  handleChangeText = text => {
    const { dispatch } = this.props;
    dispatch(changeCurrencyAmount(text));
  };

  handlePressBaseCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', {
      title: 'Base Currency',
      type: 'base',
    });
  };

  handlePressQuoteCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate('CurrencyList', {
      title: 'Quote Currency',
      type: 'quote',
    });
  };

  handleSwapCurrency = () => {
    const { dispatch } = this.props;
    dispatch(swapCurrency());
  };

  handleOptionsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Options');
  };

  render() {
    const {
      isFetching,
      amount,
      conversionRate,
      baseCurrency,
      quoteCurrency,
      lastConvertedDate,
      primaryColor,
    } = this.props;

    let quotePrice = '...';
    if (!isFetching) {
      quotePrice = (amount * conversionRate).toFixed(2);
    }

    return (
      <Container backgroundColor={primaryColor}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType="numeric"
            onChangeText={this.handleChangeText}
            textColor={primaryColor}
          />
          <InputWithButton
            editable={false}
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice}
            textColor={primaryColor}
          />
          <LastConverted
            date={lastConvertedDate}
            base={baseCurrency}
            quote={quoteCurrency}
            conversionRate={conversionRate}
          />
          <ClearButton
            onPress={this.handleSwapCurrency}
            text="Reverse Currencies"
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    isFetching: conversionSelector.isFetching,
    primaryColor: state.theme.primaryColor,
  };
};

export default connect(mapStateToProps)(Home);
