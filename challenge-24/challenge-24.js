(function (win, doc) {
  'use strict';
  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.

  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */

  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  function init() {
    initEvents();
  }

  function initEvents() {
    Array.prototype.forEach.call($buttonsNumbers, function(button) {
      button.addEventListener('click', handleClickNumber, false);
    });
    Array.prototype.forEach.call($buttonsOperations, function(button) {
      button.addEventListener('click', handleClickOperation, false);
    });
    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
  }

  function handleClickNumber() {
    setValue(this.value);
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    setValue(this.value);
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function isLastItemAnOperation(item) {
    var operations = getOperations();
    var lastItem = item.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function getOperations(){
    return Array.prototype.map.call($buttonsOperations, function(button) {
      return button.value;
    });
  }

  function removeLastItemIfItIsAnOperator(item) {
    if(isLastItemAnOperation(item)) {
      return sliceItem(item);
    }
    return item;
  }

  function setValue(value) {
    $visor.value += value;
  }

  function sliceItem(item) {
    return item.slice(0, -1);
  }

  function splitAndPopItem(item) {
    return item.split('').pop();
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var allValues = $visor.value.match(getRegex());
    $visor.value = allValues.reduce(reduceCalculation);
  }

  function getRegex() {
    return new RegExp('\\d+[' + getOperations().join('') + ']?', 'g');
  }

  function reduceCalculation(accumulated, actual) {
    var firstValue = sliceItem(accumulated);
    var operator = splitAndPopItem(accumulated);
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? splitAndPopItem(actual) : '';
    return calculate(operator, firstValue, lastValue) + lastOperator;
  }

  function calculate(operation, firstValue, lastValue, lastOperator) {
    switch(operation) {
      case '+':
        return Number(firstValue) + Number(lastValue);
      case '-':
        return Number(firstValue) - Number(lastValue);
      case 'x':
        return Number(firstValue) * Number(lastValue);
      case '÷':
        return Number(firstValue) / Number(lastValue);
    }
  }

  init();
})(window, document);
