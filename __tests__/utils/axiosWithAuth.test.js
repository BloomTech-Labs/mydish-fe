import axiosWithAuth from '../../utils/axiosWithAuth';
import axios from 'axios';
import { AsyncStorage } from 'react-native';

test('AsyncStorage mocks correctly', async () => {
  /* 
    The point of this test is to make sure our axiosWithAuth
        will properly wait for AsyncStorage.
    This means that our AsyncStorage methods should be async.
    This test makes sure that:
    - AsyncStorage.getItem() becomes a jest.fn()
    - When we call AsyncStorage.getItem(), it actually 
          waits to return the promise.
    orderOfCalls is an array to test the promise:
    We set a timeout to push a value into the array,
        and then (outside the setTimeout) we also push a 
        value in the array. 
    If the array has "init" before "promise", then we can be sure 
        that our jest.fn() is actually returning a delayed promise.
    ERGO, We can accurately test our axiosWithAuth() function 
        to make sure it waits for this delay that we created.
    */

  const orderOfCalls = [];
  AsyncStorage.getItem = jest.fn((tokenName) => {
    return new Promise((res) => {
      setTimeout(() => {
        orderOfCalls.push('promise');
        res(tokenName);
      }, 500);
      orderOfCalls.push('init');
    });
  });

  const token = await AsyncStorage.getItem('userToken');

  expect(AsyncStorage.getItem).toHaveBeenCalled();
  expect(token).toBe('userToken');
  expect(orderOfCalls).toEqual(['init', 'promise']);
});

test('axios mocks properly', () => {
  // Our axios mock
  axios.create = jest.fn((obj) => ({ ...obj, test: true }));
  // The obj we'll pass into our mock function
  const testObj = {
    baseURL: 'test',
    headers: { Authorization: 'testToken' },
  };
  // The expected return
  const expectedObj = { ...testObj, test: true };

  const returnObj = axios.create(testObj);

  expect(axios.create).toHaveBeenCalled();
  expect(returnObj).toEqual(expectedObj);
});

test('axiosWithAuth waits for AsyncStorage and creates an axios object', async () => {
  // Our axios mock
  axios.create = jest.fn((obj) => ({ ...obj, test: true }));
  // Our AsyncStorage mock
  AsyncStorage.getItem = jest.fn((tokenName) => {
    return new Promise((res) => {
      setTimeout(() => {
        res(tokenName);
      }, 500);
    });
  });
  const expectedObj = {
    baseURL: 'https://mydish-staging.herokuapp.com/',
    headers: { Authorization: 'userToken' },
    test: true,
  };

  const axiosCustom = await axiosWithAuth();

  expect(AsyncStorage.getItem).toHaveBeenCalled();
  expect(AsyncStorage.getItem).toHaveBeenCalledWith('userToken');
  expect(axios.create).toHaveBeenCalled();
  expect(axiosCustom).toEqual(expectedObj);
});
